"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*let PersonName: string = "muhamMad faSih bin muNawwar akhTar mujahiD";

//Step 1: Show in lower case

let LowercaseName: string = PersonName.toLowerCase();

console.log(LowercaseName);
//Step 2: Show in upper case

let uppercase: string = PersonName.toUpperCase();

console.log(uppercase);
// step 3: show in title case

let words: string[] = PersonName.split(" ");
let titlecaseName: string = ""

for (let i=0; i < words.length; i++)
{
   titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};
console.log(titlecaseName);*/
let names = "Musfirah";
console.log(names.slice(2).toUpperCase());
