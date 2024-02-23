"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//*list of guest list in array
var guestlist = ["Ali", "Faiza", "Irha"];
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// for (let guest of guestlist){
//     console.log(`Dear Friend ${guest},we found a bigger dinner table. `);
// }
// • Add one new guest to the beginning of your array.
var newGuestBeginning = "Saad";
guestlist.unshift(newGuestBeginning);
// • Add one new guest to the middle of your array.
var newGuestmid = "Raza";
var midindex = Math.floor(guestlist.length / 2);
guestlist.splice(midindex, 0, newGuestmid);
// console.log(guestlist);
//  • Use append() to add one new guest to the end of your list. 
var newGuestEnd = "Khan";
guestlist.push(newGuestEnd);
// console.log(guestlist);
// • Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation message");
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear Friend ".concat(guest, ", you are invited to Dinner. "));
}
