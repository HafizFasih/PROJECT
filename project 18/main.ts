/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */


/* step 1:Think of at least five places in the world you’d like to visit.
 Store the locations in a array. Make sure the array is not in alphabetical order. */
let BeautifulPlaces: Array<string> = ["Makkah","Paris","London","Canda","Tokyo"]

/* step 2: Print your array in its original order.*/
console.log("Orignal arragment")
console.log(BeautifulPlaces)

// step 3: Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical arrament")
console.log([...BeautifulPlaces].sort())

// step 4:Show that your array is still in its original order by printing it.
console.log("Still in orignal order")
console.log(BeautifulPlaces)

// step 5:print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse order")
console.log([...BeautifulPlaces].sort().reverse())

// step 6:Show that your array is still in its original order by printing it again.
console.log("Still in orignal order")
console.log(BeautifulPlaces)

// step 7:Reverse the order of your list. Print the array to show that its order has changed.
BeautifulPlaces.reverse()
console.log("Permenant reversed order")
console.log(BeautifulPlaces)

// step 8:Reverse the order of your list again. Print the list to show it’s back to its original order.
BeautifulPlaces.reverse()
console.log("Back to orignal")
console.log(BeautifulPlaces)

// step 9:Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
BeautifulPlaces.sort()
console.log("Permenant sorted to alphabetical order")
console.log(BeautifulPlaces)

//step 10:Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
BeautifulPlaces.sort().reverse()
console.log("Permenant sorted to reverse alphabetical order")
console.log(BeautifulPlaces)
