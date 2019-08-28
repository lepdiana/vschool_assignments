document.airline.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = document.airline.firstName.value;
    const lastName = document.airline.lastName.value;
    const age = document.airline.age.value;
    const gender = document.airline.gender.value;
    const location = document.airline.location.value;
    var diet = document.airline.diet;
    var checkedDiet = [];
    for (var i = 0; i < airline.diet.length; i++){
        if (diet[i].checked){
            checkedDiet.push(diet[i].value)
        }
    }


    alert(
    `
    First name: ${firstName}
    Last name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location: ${location}
    Dietary restriction(s): ${checkedDiet}
    `)
})