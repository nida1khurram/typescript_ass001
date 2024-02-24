"use strict";
//  Make a array of five or more usernames, including the name 'admin'.Hello Admin: 
let usernames = ["Admin", "Alice", "David", "Rock", "Daniel"];
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
for (let name of usernames) {
    console.log("Hello ", name, "thank you for logging in again.");
}
// • If the username is 'admin', print a special greeting, such as Hello admin
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// for( let key in usernames){
// console.log("Hello ",usernames[key],"thank you for logging in again.");
// }
// 
