"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
var alien_color = 'green'; //'red'//'yellow'
// console.log("1 version of code")
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === 'green') {
    console.log("the player just earned 5 points for shooting the alien.");
    // • If the alien is yellow, print a message that the player earned 10 points.
}
else if (alien_color === 'yellow') {
    // console.log("2 version of code")
    console.log("the player just earned 10 points.");
    // • If the alien is red, print a message that the player earned 15 points.
}
else if (alien_color === 'red') {
    console.log("the player earned 15 points.");
}
else {
    console.log("Unknown color!");
}
