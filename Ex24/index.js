"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings
var fname = "Quaide-e-Azam";
var lname = "Muhammad Ali Jinnah";
console.log("string test False :", fname === lname);
console.log("string test True :", fname !== lname);
//Tests using the lower case function
var t1 = "World";
var t2 = "world";
console.log("lower case false :", t1 === t2);
console.log("lower case true :", t1.toLowerCase() === t2);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num = 10;
console.log("equality :", num === num);
console.log("inequality :", num !== num);
console.log("greter than :", num > 10);
console.log("less than :", num < 10);
console.log("greter than equal :", num >= 10);
console.log("less than equal :", num <= 10);
// • Tests using "and" and "or" operators
var num1 = 7;
var num2 = 10;
var num3 = 15;
console.log("and :", num1 < num2 && num2 < num3); //both con are true
console.log("and :", num1 > num2 && num2 > num3); //both con are false
console.log("or :", num1 < num2 || num2 < num3); //at least one con is true
console.log("or :", num1 > num2 || num2 > num3); //at least one con is false
// • Test whether an item is in a array
var name = ["Sana", "Ali", "Raza"];
console.log(name.includes("Sana"));
console.log(name.includes("Saad"));
// • Test whether an item is not in a array
var x = [2, 4, 6, 8];
console.log(!x.includes(3));
console.log(!x.includes(8));
