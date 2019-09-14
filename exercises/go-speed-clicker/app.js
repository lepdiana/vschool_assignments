const displayCount = document.getElementById("container")
const incrementButton = document.getElementById("increment")


let count = 0
console.log(localStorage.getItem("num"))
if (!localStorage.getItem('num')) {
    console.log("let test")
    count = 0
    displayCount.textContent = count
} else {
count = localStorage.getItem('num')
displayCount.textContent = count
}
incrementButton.addEventListener("click", (event) => {
    event.preventDefault()
    count++;
    displayCount.textContent = count;
    localStorage.setItem("num", count);
    const savedNum = localStorage.getItem("num");
    return savedNum
})










