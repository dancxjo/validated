import { Converter } from "../Converter";
import { Parameter } from "../Parameter";
import { Validator } from "../Validator";
export declare const isString: Validator;
export declare class StringParameter extends Parameter<string> {
    validate: Validator;
    convert: Converter<string>;
}
export declare function stringParameter(): StringParameter;
