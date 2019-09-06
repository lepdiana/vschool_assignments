// const petOwner = "John"
// let name = "animal"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", petOwner)
//     return petObjects
// }

// runForLoop(["cat", "dog"])






// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// console.log(mapVegetables(carrots))


// let mapVegetables = (arr) => 
//     arr.map((carrot) => {
//         return {type: "carrot", name: carrot}
//     })

// console.log(mapVegetables(carrots))





// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))


// const filterForFriendly = (arr) =>
//     arr.filter((person) => person.friendly)

//     console.log(filterForFriendly(people))






// function doMathSum(a, b) {
//     return a + b
// }
// console.log(doMathSum(3, 4))
// var produceProduct = function(a, b) {
//     return a * b
// }


// const doMathSum = (a, b) => a + b
// console.log(doMathSum(3, 4))

// const produceProduct = (a, b) => a * b
// console.log(produceProduct(3, 4))




// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Extra Credit
// Use template literals to build the string

// let firstName = "Jane";
// let lastName = "Doe";
// let age = 100;

// const printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

// console.log(printString("Kat", "Stark", 40))



// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  filterForDogs = arr => {return arr.filter(animal => (animal.type === "dog") ? true:false)}





// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

const vacation = (location, name) => {return `Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please as the president of ${location} if you need anything.`
}

console.log(vacation("Utah", "Beyonce"))