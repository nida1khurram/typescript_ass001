// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animal_name:string[]=['cat','Goat','Dog']
for(let animal of animal_name){
    console.log(`${animal}`)}
    //  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
    for(let animal of animal_name){
        if(animal === 'Dog'){
            console.log(`${animal} is a great pet!`)
}else if(animal === 'cat'){
    console.log(`${animal} is a sweet pet!`)
}else if(animal === 'Goat'){
    console.log(`${animal} great animal that give us milk`)
}
    }

//  • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log(`these animals have in common. Any of these animals would make a great pet!`)