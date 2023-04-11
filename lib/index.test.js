"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var boolean_1 = require("./types/boolean");
var number_1 = require("./types/number");
var optional_1 = require("./types/optional");
var string_1 = require("./types/string");
describe('getValid', function () {
    it('should work for a (formatted) query string', function () {
        var query = {
            name: 'John Doe',
            age: '42',
            isAlive: 'true',
        };
        var _a = (0, _1.getValidParameters)({
            name: (0, string_1.stringParameter)(),
            age: (0, number_1.numberParameter)(),
            isAlive: (0, boolean_1.booleanParameter)(),
            isHappy: (0, optional_1.optionally)((0, boolean_1.booleanParameter)()),
        }, query), name = _a.name, age = _a.age, isAlive = _a.isAlive, isHappy = _a.isHappy;
        expect(name).toBe('John Doe');
        expect(age).toBe(42);
        expect(isAlive).toBe(true);
        expect(isHappy).toBe(undefined);
    });
});
