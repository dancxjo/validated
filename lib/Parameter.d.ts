import { Converter } from "./Converter";
import { Validator } from "./Validator";
export type InvalidHandler = (value: unknown) => void;
export type FailedToConvertHandler = (value?: string, error?: unknown) => void;
export declare abstract class Parameter<T> {
    readonly onInvalid: InvalidHandler;
    readonly onFailedToConvert: FailedToConvertHandler;
    abstract validate: Validator;
    abstract convert: Converter<T>;
    constructor(onInvalid?: InvalidHandler, onFailedToConvert?: FailedToConvertHandler);
}
