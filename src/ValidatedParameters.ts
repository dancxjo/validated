import { Parameter } from "./Parameter";
import { ParameterMap } from "./ParameterMap";

export type ValidatedParameters<M extends ParameterMap> = { [K in keyof M]: M[K] extends Parameter<infer T> ? T : never };
