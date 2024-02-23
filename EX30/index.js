//  Make a array of five or more usernames, including the name 'admin'.Hello Admin: 
var usernames = ["Admin", "Alice", "David", "Rock", "Daniel"];
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var name_1 = usernames_1[_i];
    console.log("Hello ", name_1, "thank you for logging in again.");
}
// • If the username is 'admin', print a special greeting, such as Hello admin
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// for( let key in usernames){
// console.log("Hello ",usernames[key],"thank you for logging in again.");
// }
// 
