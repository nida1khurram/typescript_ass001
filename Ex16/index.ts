
//*list of guest list in array
let guestlist:string []=["Ali","Faiza","Irha"];
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// for (let guest of guestlist){
//     console.log(`Dear Friend ${guest},we found a bigger dinner table. `);

// }
// • Add one new guest to the beginning of your array.
 let newGuestBeginning:string="Saad"
guestlist.unshift(newGuestBeginning)

// • Add one new guest to the middle of your array.

let newGuestmid:string="Raza"
let midindex:number=Math.floor(guestlist.length/2)
guestlist.splice(midindex,0,newGuestmid)
// console.log(guestlist);
//  • Use append() to add one new guest to the end of your list. 
let newGuestEnd:string="Khan"
guestlist.push(newGuestEnd)
// console.log(guestlist);
// • Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation message");

for (let guest of guestlist){
    console.log(`Dear Friend ${guest}, you are invited to Dinner. `);
}
export{}