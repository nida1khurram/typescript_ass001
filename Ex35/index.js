// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
var animal_name = ['cat', 'Goat', 'Dog'];
for (var _i = 0, animal_name_1 = animal_name; _i < animal_name_1.length; _i++) {
    var animal = animal_name_1[_i];
    console.log("".concat(animal));
}
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
for (var _a = 0, animal_name_2 = animal_name; _a < animal_name_2.length; _a++) {
    var animal = animal_name_2[_a];
    if (animal === 'Dog') {
        console.log("".concat(animal, " is a great pet!"));
    }
    else if (animal === 'cat') {
        console.log("".concat(animal, " is a sweet pet!"));
    }
    else if (animal === 'Goat') {
        console.log("".concat(animal, " great animal that give us milk"));
    }
}
//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("these animals have in common. Any of these animals would make a great pet!");
