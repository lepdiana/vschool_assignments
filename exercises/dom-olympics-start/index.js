// const header = document.getElementById('header');

// header.innerHTML = `<div class='header'><h2>JavaScript Made This!!</h2><div><h3><span class='name'>Diana</span><span> wrote the JavaScript</span></h3></div></div>`





// const container = document.createElement("div")
// container.className = "header"

// const h2 = document.createElement("h2")
// h2.textContent = "Javascript Made This!!"

// const subHeader = document.createElement("div")
// const name = document.createElement("span")
// name.textContent = "Diana"
// name.className = "name"
// const rest = document.createElement("span")
// rest.textContent = " wrote the Javascript"

// subHeader.appendChild(name)
// subHeader.appendChild(rest)

// container.appendChild(h2)
// container.appendChild(subHeader)

// header.appendChild(container)





// const h2 = document.createElement("h2")
// h2.textContent = "JavaScript Made This!!"
// h2.className = "header"

// header.appendChild(h2)

// const p = document.createElement("p")

// const name = document.createElement("span")
// name.innerHTML = "Diana "
// name.className = "name"

// const secondChild = document.createElement("span")
// secondChild.textContent = "wrote the javascript"

// p.className = "header"

// // name and secondChild in p
// p.appendChild(name)
// p.appendChild(secondChild)

// header.appendChild(p)

// const messages = document.getElementsByClassName("message")

// messages[0].textContent = "hey!"
// messages[1].textContent = "wassyo!"
// messages[2].textContent = "waaa?!"
// messages[3].textContent = "hey!"

// const container = document.getElementsByClassName("messages")[0]

// const newMessage = document.createElement("div")
// newMessage.classList = "message left"
// newMessage.textContent = "this is new"

// container.appendChild(newMessage)

// var clearButton = document.getElementById("clear-button")
// clearButton.addEventListener("click", function(e) {
//     e.target.nextElementSibling.children.outerText: ""
// })


// ----------------------------------------------------

const header = document.getElementById("header");
const title = document.createElement("div");
const titleSize = document.createElement("h2");
titleSize.textContent = "JavaScipt Made This!!";
title.appendChild(titleSize);
header.appendChild(title);

const subHeader = document.createElement("div");
const subHeaderSize = document.createElement("h3");
const subHeaderSpan = document.createElement("span");
const nameAttribute = document.createAttribute("class");
nameAttribute.innerHtml = "name";
subHeaderSpan.setAttributeNode(nameAttribute);
subHeader.textContent = "Diana ";
subHeaderSize.appendChild(subHeaderSpan);
const subHeaderSpan2 = document.createElement("span");
subHeaderSpan2.textContent = "wrote the JavaScript";
h3.appendChild(subHeaderSpan2);
subHeader.appendChild(h3);
header.appendChild(subHeader);