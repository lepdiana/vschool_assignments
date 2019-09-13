const displayCount = document.getElementById("container")
const incrementButton = document.getElementById("increment")


let count = 0
displayCount.textContent = count

incrementButton.addEventListener("click", (event) => {
    event.preventDefault()
    count++;
    displayCount.textContent = count;
    localStorage.setItem("num", count);
    const savedNum = localStorage.getItem("num");
    console.log(savedNum)
})









