// function character (word) {
//     let upWord = word.toUpperCase();
//     let lowWord = word.toLowerCase ();
//     console.log(upWord + lowWord)
// }

// character ("welcome");



// function half (word) {
//     const stringLength = word.length;
//     // console.log(stringLength);
//     const halfLength = stringLength / 2;
//     // console.log(halfLength);
//     return Math.floor(halfLength)
// }

// console.log(half ("hello"));

// function example (word) {
//     const stringLength = word.length;
//     const returnFirstHalf = stringLength / 2;
//     return word.slice(0, Math.floor(returnFirstHalf))
// }

// console.log(example ("whatever"));


function lastProblem (todo) {
    const firstHalf = todo.slice(0, todo.length / 2).toUpperCase();
    const secondHalf = todo.slice(todo.length / 2, todo.length).toLowerCase();
    const combine = firstHalf.concat(secondHalf);
    return combine
}

console.log (lastProblem ("donedonedonedone"));