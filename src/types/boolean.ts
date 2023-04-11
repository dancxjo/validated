import { Converter } from "../Converter";
import { Parameter } from "../Parameter";
import { Validator } from "../Validator";
import { isString } from "./string";

const toBoolean: Converter<boolean> = (value?: string): boolean => {
  if (value === undefined) {
    throw new TypeError(`Value ${value} is not a boolean`);
  }
  return value.toLowerCase() === 'true';
}

const isBoolean: Validator = (value: unknown): boolean => {
  if (!isString(value)) {
    return false;
  }
  return /^true|false$/i.test(value as string);
}


export class BooleanParameter extends Parameter<boolean> {
  validate = isBoolean;
  convert = toBoolean;
}

export function booleanParameter(): BooleanParameter {
  return new BooleanParameter();
}
