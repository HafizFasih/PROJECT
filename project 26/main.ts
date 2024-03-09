/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

let alienColor: string ="Green";
// VERSION 1
console.log("VERSION 1")
if(alienColor == "Green"){
    console.log("Congratulations! you have won 5 points by shooting the alien.")
}
else{
    console.log("Congratulations! you have won 10 points by shooting the alien.")
}
// VERSION 2
console.log("\n VERSION 2")
if(alienColor == "Red"){
    console.log("Congratulations! you have won 10 points by shooting the alien.")
}
else {
    console.log("Congratulations! you have won 5 points by shooting the alien.")
}