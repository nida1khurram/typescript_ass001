// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizza_name = ['chicken tikka', 'fajita', 'malai boti'];
for (var _i = 0, pizza_name_1 = pizza_name; _i < pizza_name_1.length; _i++) {
    var pizza = pizza_name_1[_i];
    console.log("".concat(pizza));
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var _a = 0, pizza_name_2 = pizza_name; _a < pizza_name_2.length; _a++) {
    var pizza = pizza_name_2[_a];
    console.log("\n I like ".concat(pizza));
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n I really love pizza");
