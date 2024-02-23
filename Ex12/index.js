// Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ['Sana', 'Ali', 'Arshman', 'irha'];
//loop through each name in the array
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    //print a personalized with message for each friend
    console.log("Good Morning ".concat(name_1, ",i hope you  are fine!"));
}
