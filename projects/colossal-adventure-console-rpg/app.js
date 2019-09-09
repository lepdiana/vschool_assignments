const readline = require("readline-sync");



/////////////////Global variables////////////////////
// let gameOver = false

let player = {
    name: "",
    health: 100,
}

let inventoryItems = ["Fist", " Wand", " Godric Gryffindor's Sword"];

//////////////////Game functions /////////////////////

function characterCreation() {
    const character = Math.floor(Math.random() * 2);
    if (character === 0) {
        return `Muggle`
    } else {
        return `Wizard/Witch`
    }
}

function Enemy(name, health) {
    this.name = name
    this.health = health
}

function enemyCreation(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy('Voldemort', 100);
    } else if(randomNum === 1){
        return new Enemy('Draco Malfoy', 100);
    } else {
        return new Enemy('Dementor', 100);
    }
}

function walk(){
    const userChoice = readline.keyInSelect(["walk", "inventory"], "What would you like to do? ");
    if (userChoice === 0) {
        const randomNum = Math.floor(Math.random() * 3);
        if(randomNum === 0){
            fight();
        } else {
             //tell user they didn't run into a monster
             //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
             console.log("Looks like you're still in the clear. Continue walking.")
        }
    } else if (userChoice === 1) {
        //tell user what's in their inventory, and their health, and then tell them to push w to walk
        inventory(); 
        console.log (`
        In your inventory, you have: ${inventoryItems}.
        Your health life is: ${player.health}/100.
        Press walk to continue saving Hogwarts`)
         
    } else {
        console.log(`${currentEnemy} is taking over Hogwarts. You can't quit! `)
    }
}



function run(){
    const escapeChance = Math.floor(Math.random() * 2)
    if(escapeChance === 0){
         //tell user that they successfully got away and can continue walking
         //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
         console.log("You've escaped using the invisibility cloak! Continue walking");
    } else {
         //tell user they were not able to run
         //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
         console.log(`The enemy used the probility probe. You didn't make it out fast enough! `);
         enemyAttack(player);
    }
}

function fight(){
    let currentEnemy = enemyCreation();
    // console.log(currentEnemy) // shows enemy object here
    console.log(`${currentEnemy.name} appeared!!!!`)
    const defenseChoice = readline.keyInSelect(["fight the enemy", "run from the fight"], "What would you like to do? ")
    if (defenseChoice === 1){
        run();
    } else {
        encounterLoop(currentEnemy);
    }
}

function encounterLoop(currentEnemy) {
    while(currentEnemy.health > 0 && player.health > 0){
        enemyAttack(player);
        let continueFightChoice = readline.keyInSelect(['keep fighting', 'run away'], 'What would you like to do??');
        if(continueFightChoice === 0){
            console.log('You decided to keep fighting');
            attackEnemy(currentEnemy);
        } else {
            run();
        }
    }
}

function enemyAttack(player){
    function randomDeduction(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (20 - 10 + 1)) + 10; //The maximum is inclusive and the minimum is inclusive 
    }
    player.health = player.health - randomDeduction();
    console.log("The enemy is attacking you, ", player)
    if (player.health <= 0) {
        die();
    }
}

function attackEnemy(currentEnemy){
    function randomDeduction(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (100 - 98 + 1)) + 98; //The maximum is inclusive and the minimum is inclusive 
    }
    currentEnemy.health = currentEnemy.health - randomDeduction();
    console.log("You are attacking the enemy and their health life is decreasing", currentEnemy)
    if (currentEnemy.health <= 0){
        enemyDie();
    }

}

 function die(){
    console.log("Voldemort, Draco Malfoy, and the Dementor took over Hogwarts. GAME OVER!!!!!")
    player.health = 0;
 }


 function enemyDie(){
    let newInventorylist = inventoryItems.push(" Elder Wand")
    player.health = player.health + 10;
    console.log(`
    You've defeated the enemy. You've earned a new item for your inventory. 
    Here is your invertory list: ${inventoryItems}
    and you've gained some health points.`)
}

function inventory(){
    return `${inventoryItems}`
}
////////////////// Game///////////////////////////////

console.log("Welcome to Hogwarts! Hogwarts is under attack and they need your help!");

player.name = readline.question('What is your name? ');

console.log(`Hi ${player.name}! You are a ${characterCreation()}. Select walk to save Hogwarts. `);
while(player.health > 0) {
    walk();
} 