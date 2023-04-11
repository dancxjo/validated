import { Converter } from "./Converter";
import { Validator } from "./Validator";

export type InvalidHandler = (value: unknown) => void
export type FailedToConvertHandler = (value?: string, error?: unknown) => void

export abstract class Parameter<T> {
  abstract validate: Validator
  abstract convert: Converter<T>

  constructor(
    readonly onInvalid: InvalidHandler = (value) => { throw new TypeError(`Value ${value} is not a valid ${this.constructor.name}`) },
    readonly onFailedToConvert: FailedToConvertHandler = (value) => { throw new TypeError(`Cannot convert ${value} to a valid ${this.constructor.name}`) }) { }

}
