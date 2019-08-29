const box = document.getElementsByClassName("box")[0]

box.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor="blue"
})

box.addEventListener("mousedown", function(e){
    e.target.style.backgroundColor="red"
})

box.addEventListener("mouseup", function(e){
    e.target.style.backgroundColor="yellow"
})

box.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor="green"
})

document.addEventListener("scroll", function(e){
    e.target.getElementsByClassName("box")[0].style.backgroundColor="orange"
})

document.addEventListener("keypress", function(e) {
    const charCode = e.keyCode;
    const keyCode = e.key;
        switch (keyCode) {
            case 'b':
                document.getElementsByClassName("box")[0].style.background="blue";
                alert("blue")
                break;
            case 'r':
                document.getElementsByClassName("box")[0].style.background="red";
                break;
            case 'y':
                document.getElementsByClassName("box")[0].style.background="yellow";
                break;
            case 'g':
                document.getElementsByClassName("box")[0].style.background="green";
                break;
            case 'o':
                document.getElementsByClassName("box")[0].style.background="orange";
                break;
            default:
                document.getElementsByClassName("box")[0].style.background="black";
                break;
        }
})