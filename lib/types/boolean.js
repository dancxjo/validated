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
exports.booleanParameter = exports.BooleanParameter = void 0;
var Parameter_1 = require("../Parameter");
var string_1 = require("./string");
var toBoolean = function (value) {
    if (value === undefined) {
        throw new TypeError("Value ".concat(value, " is not a boolean"));
    }
    return value.toLowerCase() === 'true';
};
var isBoolean = function (value) {
    if (!(0, string_1.isString)(value)) {
        return false;
    }
    return /^true|false$/i.test(value);
};
var BooleanParameter = /** @class */ (function (_super) {
    __extends(BooleanParameter, _super);
    function BooleanParameter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validate = isBoolean;
        _this.convert = toBoolean;
        return _this;
    }
    return BooleanParameter;
}(Parameter_1.Parameter));
exports.BooleanParameter = BooleanParameter;
function booleanParameter() {
    return new BooleanParameter();
}
exports.booleanParameter = booleanParameter;
