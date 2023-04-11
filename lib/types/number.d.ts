import { Converter } from "../Converter";
import { Parameter } from "../Parameter";
import { Validator } from "../Validator";
export declare class NumberParameter extends Parameter<number> {
    validate: Validator;
    convert: Converter<number>;
}
export declare function numberParameter(): NumberParameter;
