"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
var Parameter = /** @class */ (function () {
    function Parameter(onInvalid, onFailedToConvert) {
        if (onInvalid === void 0) { onInvalid = function (value) { throw new TypeError("Value ".concat(value, " is not a valid ").concat(_this.constructor.name)); }; }
        if (onFailedToConvert === void 0) { onFailedToConvert = function (value) { throw new TypeError("Cannot convert ".concat(value, " to a valid ").concat(_this.constructor.name)); }; }
        var _this = this;
        this.onInvalid = onInvalid;
        this.onFailedToConvert = onFailedToConvert;
    }
    return Parameter;
}());
exports.Parameter = Parameter;
