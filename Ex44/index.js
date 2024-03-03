"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("summary of sandwish ");
    if (item.length === 0) {
        console.log("your order is empty plz insert an item");
    }
    else {
        item.forEach(function (item, index) {
            console.log("".concat(index + 1, ".").concat(item));
        });
    }
}
// Call the function three times, using a different number of arguments each time.
sandwich('');
sandwich('ham', 'mayonise');
sandwich('chicken tikka');
