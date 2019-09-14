const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const pokemonCharacter = data.objects[0].pokemon;     
        listOutDataToDOM(pokemonCharacter);
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon/", true);
xhr.send();

 
const listOutDataToDOM = (arr) => {
    console.log(arr) 
    for (let i=0; i < arr.length; i++) {
        const text = document.createElement("div")
        text.textContent = arr[i].name
        document.body.appendChild(text)
    }
}

