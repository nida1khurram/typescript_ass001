"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Great Magicians: Start with a copy of your program from Exercise 39.
// Magicians: Make a array of magician’s names.
console.log("before modify list:\n");
var magname = ['dave', 'harry', 'jmmy'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
//call func bofore modify
show_magicians(magname);
console.log("after modify list:");
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_greate(great) {
    for (var _i = 0, great_1 = great; _i < great_1.length; _i++) {
        var i = great_1[_i];
        console.log("the great ", i);
    }
}
// Call show_magicians() to see that the list has actually been modified.
make_greate(magname);
