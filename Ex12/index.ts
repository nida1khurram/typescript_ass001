// Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[]=['Sana','Ali','Arshman','irha'];
//loop through each name in the array
for( let name of  names){
    //print a personalized with message for each friend
    console.log(`Good Morning ${name},i hope you  are fine!`); 
}