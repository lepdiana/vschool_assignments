const readline = require("readline-sync");

/////////////////Global variables////////////////////
let gameOver = false

const player = {
    name: "",
    healthLife: 100
}


//////////////////Game functions /////////////////////
function walk(){
    console.log("I went walking.")

    const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    if(randomNum === 0){ 
        // an enemy appears
        // generateEnemy()
        // fight()

    }
}


////////////////// Game///////////////////////////////
console.log("Welcome to Colossal Adventure!");

player.name = readline.question('What is your name? ');

console.log(`Hi ${player.name}! Lets start the game.`);
while(!gameOver) {
    const userChoice = readline.keyInSelect(["walk"], "What would you like to do? ");
    if(userChoice === 0){
        walk()
    } else if(userChoice === -1) {
        console.log("You can't cancel")
    }
}

// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// If a wild enemy appears:
// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, you will choose a random attack power between a min and max
// If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
// If the enemy kills the player the console prints an cool death message and the game ends
// Inventory
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory