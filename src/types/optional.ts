import { Converter } from "../Converter";
import { InvalidHandler, Parameter } from "../Parameter";
import { Validator } from "../Validator";

export class OptionalParameter<T> extends Parameter<T | undefined> {
  validate: Validator = (value: unknown): boolean => value === undefined || this.underlyingType.validate(value);
  convert: Converter<T|undefined> = (value?: string): T|undefined => value === undefined ? undefined : this.underlyingType.convert(value);
  constructor(readonly underlyingType: Parameter<T>, onInvalid?: InvalidHandler, onFailedToConvert?: InvalidHandler) {
    super(onInvalid, onFailedToConvert);
  }
}

export function optionally<T>(base: Parameter<T>): OptionalParameter<T> {
  return new OptionalParameter(base);
}
