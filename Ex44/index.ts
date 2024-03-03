
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
function sandwich(...item:string[]):void
{
    console.log("summary of sandwish ");
    if(item.length === 0){
console.log(`your order is empty plz insert an item`)
    }else{
        item.forEach((item , index)=>{
        console.log(`${index + 1}.${item}`);
    });
    }
}
// Call the function three times, using a different number of arguments each time.
sandwich('')
sandwich('ham','mayonise')
sandwich('chicken tikka')

export{}