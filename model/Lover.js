"use strict";
exports.__esModule = true;
exports.Lover = void 0;
var Lover = /** @class */ (function () {
    function Lover(id, name, address, zodiac, yearOfBirth, interest) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._zodiac = zodiac;
        this._yearOfBirth = yearOfBirth;
        this._interest = interest;
    }
    Lover.prototype.getId = function () {
        return this._id;
    };
    Lover.prototype.setId = function (value) {
        this._id = value;
    };
    Lover.prototype.getName = function () {
        return this._name;
    };
    Lover.prototype.setName = function (value) {
        this._name = value;
    };
    Lover.prototype.getAddress = function () {
        return this._address;
    };
    Lover.prototype.setAddress = function (value) {
        this._address = value;
    };
    Lover.prototype.getZodiac = function () {
        return this._zodiac;
    };
    Lover.prototype.setZodiac = function (value) {
        this._zodiac = value;
    };
    Lover.prototype.getYearOfBirth = function () {
        return this._yearOfBirth;
    };
    Lover.prototype.setYearOfBirth = function (value) {
        this._yearOfBirth = value;
    };
    Lover.prototype.getInterest = function () {
        return this._interest;
    };
    Lover.prototype.setInterest = function (value) {
        this._interest = value;
    };
    return Lover;
}());
exports.Lover = Lover;
