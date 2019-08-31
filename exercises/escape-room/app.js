const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log("Hello: " + name);


let gameOver = false
let key = false
const option = ["Put hand in hole", "Find the key, or", "Open the door"]

while(!gameOver){
    const userChose= readline.keyInSelect(option, "What would you like to do?")

    if(userChose === 0){
        console.log(`${name} DIED. GAME OVER.`)
        gameOver = true
    } else if(userChose === 2){
        if(key){
            console.log(`${name} ESCAPED!`)
            gameOver = true
        } else {
            console.log("You need to find a key.")
        } 
    } else if(userChose === 1){
        console.log(`You found the key.`)
        key = true
    } else if(userChose === -1){
        console.log(`YOU CAN'T QUIT`)
    } 

}