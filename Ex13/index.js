"use strict";
//*list of transportation in array
let favorite_transportation = [];
//push transportation in array
favorite_transportation.push(["car", "Toyota"]);
favorite_transportation.push(["motercycle", "Honda"]);
favorite_transportation.push(["bicyle", "Sohraab"]);
//*print using for each loop
favorite_transportation.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand},${transport}`);
});
