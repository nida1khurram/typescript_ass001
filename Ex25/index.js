"use strict";
// . Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = ['green', 'yellow', 'red'];
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
if (alien_color[0] == 'green') {
    console.log("the player just earned 5 points");
}
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
if (alien_color[1] || alien_color[2]) {
    console.log("The version that fails will have no output");
}
