import { Converter } from "../Converter";
import { Parameter } from "../Parameter";
import { Validator } from "../Validator";
export declare class BooleanParameter extends Parameter<boolean> {
    validate: Validator;
    convert: Converter<boolean>;
}
export declare function booleanParameter(): BooleanParameter;
