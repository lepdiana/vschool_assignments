// Write a function that returns the number of times ‘code’ appears in an array.

function checkCode(arr){
  const filteredWord = arr.filter(function(word){
    return word == 'code'
  })
  return filteredWord.length
}
console.log(checkCode(['code', 'cool', 'notcode', 'hi']))
console.log(checkCode(['code', 'code', 'hello', 'world', 'hi']))