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
exports.stringParameter = exports.StringParameter = exports.isString = void 0;
var Parameter_1 = require("../Parameter");
var isString = function (value) {
    return typeof value === "string";
};
exports.isString = isString;
var toString = function (value) {
    return value !== null && value !== void 0 ? value : "";
};
var StringParameter = /** @class */ (function (_super) {
    __extends(StringParameter, _super);
    function StringParameter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validate = exports.isString;
        _this.convert = toString;
        return _this;
    }
    return StringParameter;
}(Parameter_1.Parameter));
exports.StringParameter = StringParameter;
function stringParameter() {
    return new StringParameter();
}
exports.stringParameter = stringParameter;
