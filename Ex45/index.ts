
// Cars: Write a function that stores information about a car in a Object. 

function car(manufacturer:string,model_name:string,color:string,feature:string):
// The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
{ manufacturer:string,model_name:string,color:string,feature:string}
{const car_info={
    manufacturer,
    model_name,
    color,
    feature,
};
return car_info
}
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
const car1=car(`(GM)USA`,`C7`,`black`,`Leather seats`);
const car2=car(`Toyota`,`corolla`,`red`,`sunroof`);
//  Print the Object that’s returned to make sure all the information was stored correctly.
console.log(car1);
console.log(car2);

export{}
