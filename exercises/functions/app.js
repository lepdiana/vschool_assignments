// function mySum(sum1, sum2) {
//     return sum1 + sum2
// }

// console.log(mySum(18, 21));

// function par(par1, par2, par3) {
//     if (par1 > par2 && par1 > par3) {
//         return par1
//     } else if (par2 > par1 && par2 > par3) {
//         return par2
//     } else {
//         return par3
//     }
// }

// console.log(par(5, 2, 8));


// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// }

// console.log(evenOrOdd(11))


function str(word) {
    if (word.length <= 20) {
        return word + word
    } else {
        return word.slice(0, word.length / 2)
    }
}

console.log(str("youareawesomeyouareawesome"))