document.add.addEventListener("submit", function(e){
    e.preventDefault()

    var num1Input = Number(document.add.num1.value)
    var num2Input = Number(document.add.num2.value)
    var addTotal = num1Input + num2Input

    // alert(addTotal)
    var span1 = document.createElement("span");
    var txtNode1 = document.createTextNode(addTotal)
    span1.appendChild(txtNode1)
    add.appendChild(span1)
})

document.subtract.addEventListener("submit", function(e){
    e.preventDefault()

    var num3Input = Number(document.subtract.num3.value)
    var num4Input = Number(document.subtract.num4.value)
    var subtractTotal = num3Input - num4Input

    // alert(subtractTotal)
    var span2 = document.createElement("span");
    var txtNode2 = document.createTextNode(subtractTotal)
    span2.appendChild(txtNode2)
    subtract.appendChild(span2)
})

document.multiply.addEventListener("submit", function(e){
    e.preventDefault()

    var num5Input = Number(document.multiply.num5.value)
    var num6Input = Number(document.multiply.num6.value)
    var multiplyTotal = num5Input * num6Input

    // alert(multiplyTotal)
    var span3 = document.createElement("span");
    var txtNode3 = document.createTextNode(multiplyTotal)
    span3.appendChild(txtNode3)
    multiply.appendChild(span3)
})

