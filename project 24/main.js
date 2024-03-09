"use strict";
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Step 1: Tests for equality and inequality with strings
const string1 = "Hello";
const string2 = "Hello";
const string3 = "World";
console.log("string1 == string2 :", (string1 === string2)); // true
console.log("string1 == string3 :", (string1 === string3)); // false
console.log("string1 != string3 :", (string1 !== string3)); // true
// Step 2: Tests using the lower case function
let lowercase1 = string1.toLowerCase();
let uppercase1 = string2.toUpperCase();
console.log(`${lowercase1} == ${uppercase1} :`, (lowercase1 === uppercase1));
console.log(`${lowercase1} != ${uppercase1} :`, (lowercase1 !== uppercase1));
// Step 3: Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 5;
const num2 = 10;
const num3 = 15;
console.log(`${num1} == ${num2} : `, (num1 == num2));
console.log(`${num1} == ${num3} : `, (num1 == num3));
console.log(`${num2} == ${num2} : `, (num2 == num2));
console.log(`${num1} > ${num3} : `, (num1 > num3));
console.log(`${num2} < ${num3} : `, (num2 < num3));
console.log(`${num3} >= ${num2} : `, (num3 >= num2));
console.log(`${num2} <= ${num3} : `, (num2 <= num3));
// Step 3: Tests using "and" and "or" operators
console.log(`${num1} < ${num2} && ${num3} > ${num1} :`, num1 < num2 && num3 > num1);
console.log(`${num3} < ${num2} && ${num3} > ${num1} :`, num3 < num2 && num3 > num1);
console.log(`${num1} < ${num2} || ${num3} > ${num1} :`, num1 < num2 || num3 > num1);
console.log(`${num1} > ${num2} || ${num3} < ${num1} :`, num1 > num2 || num3 < num1);
// Step 4: Test whether an item is in a array
// FOR NUMBERS
const numbers = [1, 2, 3, 4, 5, 6];
if (numbers.includes(3)) {
    console.log("3 is included");
}
else {
    console.log("3 is not included");
}
let people = [
    { name: 'Salman', age: 18 },
    { name: 'Ahmed', age: 17 },
    { name: 'Maaz', age: 17 }
];
let personWithNameAhmed = people.find(person => person.name == "Ahmed");
if (personWithNameAhmed) {
    console.log("Ahmed is here");
}
else {
    console.log("Ahmed is not here");
}
//  Step 5: Test whether an item is not in a array
// FOR NUMBERS
const numb = [1, 2, 3, 4, 5, 6];
if (numbers.includes(10)) {
    console.log("10 is included");
}
else {
    console.log("10 is not included");
}
