"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEnvironment = exports.getValidParameters = exports.getValidParameter = void 0;
__exportStar(require("./Parameter"), exports);
__exportStar(require("./Converter"), exports);
__exportStar(require("./Validator"), exports);
__exportStar(require("./ParameterMap"), exports);
__exportStar(require("./ValidatedParameters"), exports);
function getValidParameter(key, parameterMap, parameters) {
    var parameter = parameterMap[key];
    var value = parameters[key];
    if (parameter.validate(value)) {
        try {
            return parameter.convert(value);
        }
        catch (e) {
            if (parameter.onFailedToConvert) {
                parameter.onFailedToConvert(value, e);
            }
            else {
                throw new TypeError("Failed to convert value for parameter ".concat(key.toString(), ": ").concat(value));
            }
        }
    }
    if (parameter.onInvalid) {
        parameter.onInvalid(value);
    }
    throw new TypeError("Invalid value for parameter ".concat(key.toString(), ": ").concat(value));
}
exports.getValidParameter = getValidParameter;
function getValidParameters(parameterMap, parameters) {
    var validatedParameters = {};
    for (var key in parameterMap) {
        validatedParameters[key] = getValidParameter(key, parameterMap, parameters);
    }
    return validatedParameters;
}
exports.getValidParameters = getValidParameters;
function makeEnvironment(parameterMap) {
    return new Proxy(process.env, {
        get: function (target, keySymbol) {
            var key = keySymbol.toString();
            var isDeclared = key in parameterMap;
            if (!isDeclared) {
                throw new TypeError("Parameter ".concat(key.toString(), " is not declared as an environment variable"));
            }
            return getValidParameter(key, parameterMap, target);
        }
    });
}
exports.makeEnvironment = makeEnvironment;
