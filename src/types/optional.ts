import { Converter } from "../Converter";
import { InvalidHandler, Parameter } from "../Parameter";
import { Validator } from "../Validator";

export class OptionalParameter<T, P extends Parameter<T>> extends Parameter<T | undefined> {
  validate: Validator = (value: unknown): boolean => value === undefined || this.underlyingType.validate(value);
  convert: Converter<T|undefined> = (value?: string): T|undefined => value === undefined ? undefined : this.underlyingType.convert(value);
  constructor(readonly underlyingType: P, onInvalid?: InvalidHandler, onFailedToConvert?: InvalidHandler) {
    super(onInvalid, onFailedToConvert);
  }
}

export function optionally<T, P extends Parameter<T>>(base: P): OptionalParameter<T, P> {
  return new OptionalParameter(base);
}
