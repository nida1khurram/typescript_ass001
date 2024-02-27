"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
//*list of guest list in array
let guestlist = ["Ali", "Sana", "Irha"];
exports.guestlist = guestlist;
//*step1 Add a print statement at the end of your program stating the name of the guest who can’t make it.
let personwhocant = "sana";
console.log(`${personwhocant},can't make it to dinner `);
// console.log(guestlist[1], `cnat make it to dinner`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest = "Faiza";
guestlist[1] = newGuest;
// Print a second set of invitation messages, one for each person who is still in your list.
console.log(" second set of invitation messages");
for (const guest of guestlist) {
    console.log(`${guest} , you are invited to Dinner`);
}
