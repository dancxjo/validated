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
exports.numberParameter = exports.NumberParameter = void 0;
var Parameter_1 = require("../Parameter");
var string_1 = require("./string");
var toNumber = function (value) {
    try {
        var asFloat = parseFloat(value);
        if (isFinite(asFloat) && !isNaN(asFloat)) {
            return asFloat;
        }
        throw new TypeError("Value ".concat(value, " is not a number"));
    }
    catch (e) {
        throw new TypeError("Value ".concat(value, " is not a number"));
    }
};
var isNumber = function (value) {
    if (!(0, string_1.isString)(value)) {
        return false;
    }
    try {
        toNumber(value);
        return true;
    }
    catch (e) {
        return false;
    }
};
var NumberParameter = /** @class */ (function (_super) {
    __extends(NumberParameter, _super);
    function NumberParameter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validate = isNumber;
        _this.convert = toNumber;
        return _this;
    }
    return NumberParameter;
}(Parameter_1.Parameter));
exports.NumberParameter = NumberParameter;
function numberParameter() {
    return new NumberParameter();
}
exports.numberParameter = numberParameter;
