"use strict";
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = ['green', 'yellow', 'red'];
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color[0] == 'green') {
    console.log("the player just earned 5 points for shooting the alien.");
    // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
}
else if (alien_color[1] || alien_color[2]) {
    console.log("the player just earned 10 points.");
}
