"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = [
    "Salman",
    "Ahmed",
    "Hammad",
    "Quaid e Azam",
    "Muhammad Iqbal"
];
guestList.forEach((guestName) => {
    console.log(`Asssalamoalikum, Dear Mr. ${guestName},I like to invite you at my place for today's dinner. THANK YOU.`);
});
// for project 19
exports.default = guestList;
