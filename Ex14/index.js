"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
//*list of guest list in array
let guestlist = ["Ali", "Sana", "Irha"];
exports.guestlist = guestlist;
//print message
for (let name of guestlist) {
    console.log(`Dear Friend ${name} , I would like to invite to dinner today please join us and enjoy!`);
}
