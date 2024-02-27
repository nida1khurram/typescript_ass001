"use strict";
//  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
//make an array
var names = ["Nida", "Zahid Ali", "Shahina Begum"];
//create index error
var invalidindex = 5;
//index error
console.log("name at index ".concat(invalidindex, ":"), names[invalidindex]);
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var i = names_1[_i];
    console.log(i);
}
