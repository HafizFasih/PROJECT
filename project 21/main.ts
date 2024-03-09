// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const names = {
    name:"Person name",
    age: 1,
    married: true,
}
let Name: Array <typeof names> = []

Name.push(names);
Name.push({
    name:"person name",
    age: 1,
    married: true
})

let person1 = {
    name: "Salman",
    age: 18,
    married: false
}
Name.push(person1)

let person2 = {
    name: "Ahmed",
    age: 17,
    married: false
}
Name.push(person2)

let person3 ={
    name: "Moavia",
    age: 20,
    married: true
}
Name.push(person3)

let person4 = {
    name:"Abdul Rehman",
    age: 25,
    married: true
}
Name.push(person4)
console.log(Name)
function displayName(Name: Array <typeof names> ) :void
{
    for(let i of Name)
    {
        console.log(`Name ${i.name}
        Age ${i.age}
        Married ${i.married}
        --------------- \n`
        )
    }
}