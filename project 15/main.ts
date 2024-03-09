// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList: Array<string>  = [
    "Muhammad Salman",
    "Ahmed Naseem",
    "Shaheer Qasim",
    "Bilal Iqbal",
    "Moavia Qasim"
]
let notComingGuest: string = "Bilal Iqbal"
console.log(`${notComingGuest}, can't make it to the dinner.`)
let newGuest: string = "Abdul Rehman"
let indexnotComingGuest: number = guestList.indexOf(notComingGuest)
if(indexnotComingGuest!== -1)
{
  guestList[indexnotComingGuest] = newGuest
}
console.log("New invitation list: ")
guestList.forEach((guestname)=>
{
    console.log(`Dear ${guestname}, you are invited to the dinner(THANK YOU)`)
}
)



