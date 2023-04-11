import { Converter } from "../Converter";
import { Parameter } from "../Parameter";
import { Validator } from "../Validator";

export const isString: Validator = (value: unknown): boolean => {
  return typeof value === "string";
}

const toString: Converter<string> = (value?: string): string => {
  return value ?? "";
}

export class StringParameter extends Parameter<string> {
  validate: Validator = isString;
  convert: Converter<string> = toString;
}

export function stringParameter(): StringParameter {
  return new StringParameter();
}
