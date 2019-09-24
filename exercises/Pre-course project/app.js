var content3 = document.getElementById("content3");
var button = document.getElementById("show-more");

button.onclick = function () {
    if(content3.className === "open") {
        //shrink the box
        content3.className = "";
        button.innerHTML = "show more";
    } else {
        // expand the box
        content3.className = "open";
        button.innerHTML = "show less";
    } 
};

var traits = ["gentle", "affectionate", "obedient"]
for (var i = 0; i < traits.length; i++) {
     console.log(traits[i])
}
