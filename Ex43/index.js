"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians: Make a array of magician’s names.
console.log("before modify list:\n");
var magname = ['dave', 'harry', 'jmmy'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function make_great(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
//call func bofore modify
make_great(magname);
console.log("after modify list:");
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function show_magicians(great) {
    for (var _i = 0, great_1 = great; _i < great_1.length; _i++) {
        var i = great_1[_i];
        console.log("the great ", i);
    }
}
// Call show_magicians() to see that the list has actually been modified.
show_magicians(magname);
