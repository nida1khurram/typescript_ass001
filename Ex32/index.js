// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_user = ['Ali', 'Saad', 'Raza', 'Sikander', 'Asad'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_user = ['Sana', 'Irha', 'Noor', 'Sikander', 'Asad'];
// • Loop through the new_users list to see if each new username has already been used.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//func for comparision
function checkUser(current_user, new_user) {
    //tolowercase & make new array use .map array
    var lowerc_u = current_user.map(function (user) { return user.toLowerCase(); });
    //to convert new user to lowercase
    for (var _i = 0, new_user_1 = new_user; _i < new_user_1.length; _i++) {
        var nu = new_user_1[_i];
        var lowern_u = nu.toLowerCase();
        // If it has, print a message that the person will need to enter a new username. 
        if (lowerc_u.includes(lowern_u)) {
            console.log("".concat(nu, ",the person will need to enter a new username"));
        }
        else {
            // If a username has not been used, print a message saying that the username is available.
            console.log("".concat(nu, ",the username is available. "));
        }
    }
}
checkUser(current_user, new_user);
