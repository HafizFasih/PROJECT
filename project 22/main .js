"use strict";
/*
If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
// Step 1: Index Error
function createfruit(name, color, taste) {
    return {
        name,
        color,
        taste
    };
}
const fruits = [
    createfruit("apple", "red", "sweet"),
    createfruit("orange", "orange", "citrusy"),
    createfruit("banana", "yellow", "sweet"),
    createfruit("pineapple", "yellow", "sweet")
];
let invalidIndex = -1;
console.log(`Fruits at index ${invalidIndex} :`, fruits[invalidIndex]);
// Step 2: Make sure you correct the error before closing the program.
fruits.forEach((fruit) => {
    console.log(`
    Name: ${fruit.name},
    color: ${fruit.color},
    taste: ${fruit.taste}`);
});
