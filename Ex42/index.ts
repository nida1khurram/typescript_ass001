
// Great Magicians: Start with a copy of your program from Exercise 39.
// Magicians: Make a array of magician’s names.
console.log(`before modify list:\n`);
const magname:string[]=['dave','harry','jmmy'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names:string[]):void
{
    for(const name of names){
       console.log(name);
    }
}
//call func bofore modify
show_magicians(magname);

console.log(`after modify list:`);
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_greate(great:string[]):void
{
    for(const i of great){
        console.log(`the great ` ,i);
    }
}
// Call show_magicians() to see that the list has actually been modified.
make_greate(magname);

export{}