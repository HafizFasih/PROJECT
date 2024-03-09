"use strict";
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
const favouriteFruit = ["apple", "mango", "orange"];
if (favouriteFruit.includes("apple")) {
    console.log("I really like apples.");
}
if (favouriteFruit.includes("mango")) {
    console.log("I really like mangoes.");
}
if (favouriteFruit.includes("orange")) {
    console.log("I really like oranges.");
}
if (favouriteFruit.includes("grapes")) {
    console.log("I really like grapes.");
}
if (favouriteFruit.includes("pineapple")) {
    console.log("I really like pineapple.");
}
