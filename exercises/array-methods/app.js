var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

var step1 = vegetables.pop();
console.log("vegetables: ", vegetables)

var step2 = fruit.shift();
console.log("fruit: ", fruit);

var step3 = fruit.indexOf("orange");
console.log(step3);

var step4 = fruit.push(1)
console.log("fruit: ", fruit);

console.log(vegetables.length);

var step6 = vegetables.push(3);
console.log("vegetables: ", vegetables);

var food = fruit.concat(vegetables);
console.log("food: ", food);

var step8 = food.splice(4, 2);
console.log(step8);
console.log("food: ", food);

var step9 = food.reverse();
console.log("food:", food);

var step10 = food.join();
console.log(step10)