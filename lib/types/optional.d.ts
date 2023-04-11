import { Converter } from "../Converter";
import { InvalidHandler, Parameter } from "../Parameter";
import { Validator } from "../Validator";
export declare class OptionalParameter<T, P extends Parameter<T>> extends Parameter<T | undefined> {
    readonly underlyingType: P;
    validate: Validator;
    convert: Converter<T | undefined>;
    constructor(underlyingType: P, onInvalid?: InvalidHandler, onFailedToConvert?: InvalidHandler);
}
export declare function optionally<T, P extends Parameter<T>>(base: P): OptionalParameter<T, P>;
