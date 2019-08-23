// function sumTwoNums(num1, num2){
//     return num1 + num2
// }

// console.log(sumTwoNums(1, 2))

// const numbers = (num1, num2, num3) => {
//     if(num1 > num2 && num1 > num3){
//         return num1
//     } 
//     else if (num2 > num1 && num2 > num3){
//         return num2
//     } else {
//         return num3
//     }
// }
// console.log("numbers: ", numbers(1, 2, 3))


// function oddOrEven(num){
    
//     if(num % 2 === 0){
//         return "even"
//     } else {
//         return "odd"
//     }
// }
// console.log(oddOrEven(2)) // => even
// console.log(oddOrEven(3)) // => odd



strings = (aString) => {
    if (aString.length < 20) {
        return aString + aString;
    } else return aString.slice(0, aString.length/2);
} 
console.log(strings("hihihihi"));
console.log(strings("hihihihihihihihihihihihihihihi"));