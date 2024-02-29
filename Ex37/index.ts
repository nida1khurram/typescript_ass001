// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size:string="Large",message:string="I Love TypeScript "):void
{ 
        return console.log(`size:${size} , message:${message}` ) 
}
    makeShirt();
    makeShirt("medium");
    makeShirt("small","TypeScript");
export{}