const output = document.getElementById("total")

const form = document.subHeader;
const goomba = form.amountOfGoombas;
const bobOmb = form.amountOfBobOmbs;
const cheepCheep = form.amountOfCheepCheeps;






form.addEventListener("submit", function(e) {
    e.preventDefault();
    const goombaValue = Number(goomba.value) * 5;
    const bobOmbValue = Number(bobOmb.value) * 7;
    const cheepCheepValue = Number(cheepCheep.value) * 11;
    const totalAmount = goombaValue + bobOmbValue + cheepCheepValue
    output.textContent = `The total price is: ${totalAmount} coins`
})

