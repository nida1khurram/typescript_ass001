
// Magicians: Make a array of magician’s names.
const magname:string[]=['dave','harry','jmmy'];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names:string[]):void
{
    for(const name of names){
        //print array of mag name through for of loop
       console.log(name)
    }
}
//call func
show_magicians(magname);

export{}