"use strict";
var myArray = [];
myArray.push('Hello');
myArray.push('World');
myArray.push('!');
console.log(myArray);
var myArray2 = [];
myArray2.push(1);
myArray2.push(3);
myArray2.push(2);
myArray2.push(4);
var newArray = myArray2.map(function (element) { return element * 2; });
console.log(newArray);
