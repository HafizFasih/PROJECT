"use strict";
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
// VERSION 1
console.log("VERSION 1 alligned color is red");
let alienColor1 = "red";
if (alienColor1 == "red") {
    console.log("Congratulations! you have won 15 points");
}
else if (alienColor1 == "green") {
    console.log("Congratulations! you have won 10 points");
}
else {
    console.log("Congratulations! you have won 5 points");
}
//VERSION 2
console.log("\n VERION 2 alligned color is green");
let alienColor2 = "green";
if (alienColor2 == "red") {
    console.log("Congratulations! you have won 15 points");
}
else if (alienColor2 == "green") {
    console.log("Congratulations! you have won 10 points");
}
else {
    console.log("Congratulations! you have won 5 points");
}
//VERSION 3
console.log("\n VERSION 3 alligned color is yellow");
let alienColor3 = "yellow";
if (alienColor3 == "red") {
    console.log("Congratulations! you have won 15 points");
}
else if (alienColor3 == "red") {
    console.log("Congratulations! you have won 10 points");
}
else {
    console.log("Congratulations! you have won 5 points");
}
