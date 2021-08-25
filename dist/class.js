"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var MyArray = /** @class */ (function () {
    function MyArray(firstElement) {
        this.array = [];
        this.array = [firstElement];
    }
    MyArray.prototype.addElement = function (newElement) {
        this.array = __spreadArray(__spreadArray([], this.array), [newElement]);
        return newElement;
    };
    MyArray.prototype.getElement = function (position) {
        return this.array[position] || undefined;
    };
    return MyArray;
}());
var array = new MyArray(2);
array.addElement(5);
array.addElement(9);
array.addElement(456);
array.addElement(45);
console.log(array.getElement(2));
