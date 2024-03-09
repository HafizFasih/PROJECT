//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favouriteTransportation: Array<[transport: string, brand: string]> = []
favouriteTransportation.push(["bike","honda"])
favouriteTransportation.push(["car","toyota"])
favouriteTransportation.push(["bicycle","BMX"])

// console.log(favouriteTransportation)

// I would like to own a
favouriteTransportation.forEach(([transport, brand]) =>
{console.log(`I would like to own a ${brand} ${transport}.`)}
)
