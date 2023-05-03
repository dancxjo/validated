import { Parameter } from './Parameter'
import { ParameterMap } from './ParameterMap'
import { ValidatedParameters } from './ValidatedParameters'

export * from './Parameter'
export * from './Converter'
export * from './Validator'
export * from './ParameterMap'
export * from './ValidatedParameters'
export * from './types/boolean'
export * from './types/number'
export * from './types/optional'
export * from './types/string'

export function getValidParameter<M extends ParameterMap, V extends ValidatedParameters<M>, K extends keyof M>(key: K, parameterMap: M, parameters: Record<string, string | undefined>): V[K] {
  const parameter = parameterMap[key]
  const value = parameters[key as keyof typeof parameters]
  if (parameter.validate(value)) {
    try {
      return parameter.convert(value) as V[K]
    } catch (e) {
      if (parameter.onFailedToConvert) {
        parameter.onFailedToConvert(value, e)
      } else {
        throw new TypeError(`Failed to convert value for parameter ${key.toString()}: ${value}`)
      }
    }
  }

  if (parameter.onInvalid) {
    parameter.onInvalid(value)
  }

  throw new TypeError(`Invalid value for parameter ${key.toString()}: ${value}`)
}

export function getValidParameters<M extends ParameterMap>(parameterMap: M, parameters: Record<string, string | undefined>): ValidatedParameters<M> {
  const validatedParameters: ValidatedParameters<M> = {} as ValidatedParameters<M>
  for (const key in parameterMap) {
    validatedParameters[key] = getValidParameter(key, parameterMap, parameters)
  }
  return validatedParameters
}

export function makeEnvironment<M extends ParameterMap>(parameterMap: M): ValidatedParameters<M> {
  return new Proxy(process.env, {
    get: (target, keySymbol) => {
      const key = keySymbol.toString()
      const isDeclared = key in parameterMap
      if (!isDeclared) {
        throw new TypeError(`Parameter ${key.toString()} is not declared as an environment variable`)
      }

      return getValidParameter(key, parameterMap, target)
    }
  }) as ValidatedParameters<M>
}
