import { Converter } from "../Converter";
import { Parameter } from "../Parameter";
import { Validator } from "../Validator";
import { isString } from "./string";

const toNumber: Converter<number> = (value?: string): number => {
  try {
    const asFloat = parseFloat(value as string);
    if (isFinite(asFloat) && !isNaN(asFloat)) {
      return asFloat;
    }
    throw new TypeError(`Value ${value} is not a number`);
  } catch(e) {
    throw new TypeError(`Value ${value} is not a number`);
  }
}

const isNumber: Validator = (value: unknown): boolean => {
  if (!isString(value)) {
    return false;
  }
  try {
    toNumber(value as string);
    return true;
  } catch(e) {
    return false;
  }
}


export class NumberParameter extends Parameter<number> {
  validate = isNumber;
  convert = toNumber;
}

export function numberParameter(): NumberParameter {
  return new NumberParameter();
}
