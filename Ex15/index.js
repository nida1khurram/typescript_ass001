"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
//*list of guest list in array
var guestlist = ["Ali", "Sana", "Irha"];
exports.guestlist = guestlist;
//*step1 Add a print statement at the end of your program stating the name of the guest who can’t make it.
var personwhocant = "sana";
console.log("".concat(personwhocant, ",can't make it to dinner "));
// console.log(guestlist[1], `cnat make it to dinner`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var newGuest = "Faiza";
guestlist[1] = newGuest;
// Print a second set of invitation messages, one for each person who is still in your list.
console.log(" second set of invitation messages");
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("".concat(guest, " , you are invited to Dinner"));
}
