"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
let person_name = "\t Nida Khurram Alvi \n";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
console.log("Name with withspace:" + person_name);
//Then print the name after striping the white spaces.
let sName = person_name.trim();
console.log("StrippedName: " + sName);
