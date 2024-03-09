"use strict";
// Cars: Write a function that stores information about a car in a Object. 
Object.defineProperty(exports, "__esModule", { value: true });
function car(manufacturer, model_name, color, feature) {
    var car_info = {
        manufacturer: manufacturer,
        model_name: model_name,
        color: color,
        feature: feature,
    };
    return car_info;
}
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
var car1 = car("(GM)USA", "C7", "black", "Leather seats");
var car2 = car("Toyota", "corolla", "red", "sunroof");
//  Print the Object that’s returned to make sure all the information was stored correctly.
console.log(car1);
console.log(car2);
