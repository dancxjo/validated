"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionally = exports.OptionalParameter = void 0;
var Parameter_1 = require("../Parameter");
var OptionalParameter = /** @class */ (function (_super) {
    __extends(OptionalParameter, _super);
    function OptionalParameter(underlyingType, onInvalid, onFailedToConvert) {
        var _this = _super.call(this, onInvalid, onFailedToConvert) || this;
        _this.underlyingType = underlyingType;
        _this.validate = function (value) { return value === undefined || _this.underlyingType.validate(value); };
        _this.convert = function (value) { return value === undefined ? undefined : _this.underlyingType.convert(value); };
        return _this;
    }
    return OptionalParameter;
}(Parameter_1.Parameter));
exports.OptionalParameter = OptionalParameter;
function optionally(base) {
    return new OptionalParameter(base);
}
exports.optionally = optionally;
