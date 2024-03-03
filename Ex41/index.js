"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians: Make a array of magician’s names.
var magname = ['dave', 'harry', 'jmmy'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        //print array of mag name through for of loop
        console.log(name_1);
    }
}
//call func
show_magicians(magname);
