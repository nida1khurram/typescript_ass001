"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
//object
const food = {
    item: "chicken roll",
    price: 150,
    description: "delicious full of chicken roll",
};
// console.log(food);
// define an array of an object
let foods = [];
//push obj
foods.push(food);
foods.push({
    item: "zinger burger",
    price: 350,
    description: "delicious  chicken burger",
});
foods.push({
    item: "Pizza mini",
    price: 350,
    description: "Fajita flavour",
});
// console.log(foods)
for (let i of foods) {
    console.log(i);
}
