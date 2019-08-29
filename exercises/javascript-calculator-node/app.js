const readline = require("readline-sync");

const firstNum = readline.question("Please enter your first number: ");
const secondNum = readline.question("Please enter your second number: ");
const choices = ["add", "subtract", "multiply","divide"];
const operation = readline.keyInSelect(choices, "What operation do you want to use? ");

const num1 = firstNum;
const num2 = secondNum;

function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

if (operation === 0) {
    console.log(`The result is: ${add(num1, num2)}`)
} else if (operation === 1) {
    console.log(`The result is: ${subtract(num1, num2)}`)
} else if (operation === 2) {
    console.log(`The result is: ${multiply(num1, num2)}`)
} else {
    console.log(`The result is: ${divide(num1, num2)}`)
} 