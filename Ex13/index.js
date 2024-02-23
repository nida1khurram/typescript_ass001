//*list of transportation in array
var favorite_transportation = [];
//push transportation in array
favorite_transportation.push(["car", "Toyota"]);
favorite_transportation.push(["motercycle", "Honda"]);
favorite_transportation.push(["bicyle", "Sohraab"]);
//*print using for each loop
favorite_transportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, ",").concat(transport));
});
