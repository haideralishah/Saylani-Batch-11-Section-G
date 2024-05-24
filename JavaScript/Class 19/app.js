// let divEl = document.querySelectorAll("#container")[0];
// let userName = prompt('what is your name?');
// divEl.innerHTML = `<h1>Hello ${userName}</h1>`;














/*
.createElement(tagNameInUpperCase) // create elment node
.setAttribute(attributeName, attributeValue)
.createTextNode(string) // create text node
parent.appendChild(newChild)  // add in last node
parent.insertBefore(newChild, target)  // add on target node
parent.removeChild(target)  // remove target node


*/


let divEl = document.querySelectorAll("#container")[0];

let h1El = document.createElement("H1");
h1El.setAttribute("id", "main-heading");
h1El.setAttribute("title", "this is main heading");
h1El.setAttribute("class", "hide special not-show");

let textNode = document.createTextNode("Hello Mars");
h1El.appendChild(textNode);
divEl.appendChild(h1El);

let target = divEl.childNodes[1];
// let target = divEl.firstChild.nextSibling;
divEl.insertBefore(h1El, target);

let targetToDelete = divEl.childNodes[2];
divEl.removeChild(targetToDelete)

