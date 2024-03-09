// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let guestList: Array<string> = [
 "Ahmed Naseem",
 "Salman Shahid",
 "Maaz Qureshi",
 "Ali moavia"
]
let newGuest:string = "Moavia Qasim"
let notCominGuest:string = "Maaz Qureshi"
// console.log(`${notCominGuest}, is not joining us.`)
// console.log("New list of invitation: ")
let indexOfNotComingGuest: number = guestList.indexOf(notCominGuest)
if(indexOfNotComingGuest !== -1){
    guestList[indexOfNotComingGuest] = newGuest
}
// guesList.forEach((guest)=>{
//     console.log(`Dear ${guest}, you are invited today for the dinner.`)
// }
//)
for (let guest of guestList){
    console.log(`Hello dear ${guest}, we found a bigger dinning table.`)

}
let NewGuest:string = "Shaheer Qasim"
guestList.unshift(NewGuest)
// console.log(guesList)
let middleGuest: string = "Abrar Ahmed"
let middleIndex: number = guestList.length/2
// console.log(middleIndex)
guestList.splice(middleIndex,0,middleGuest)
// console.log(guestList)
let lastGuest: string = "Muhammad Bilal"
guestList.push(lastGuest)
// console.log(guestList)
console.log("New set of invitations: ")
for(let guest of guestList){
    console.log(`Hey ${guest}, hope you are doing well.You are invited to the dinner.`)
}

