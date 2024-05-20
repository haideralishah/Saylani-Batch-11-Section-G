/*
document.querySelectorAll();
document.querySelector();

document.getElementById();
document.getElementsByTagName();
document.getElementsByClassName();

document.childNodes; // list of childs
document.parentNode; // parent element
document.nextSibling; // next sibling element
document.previousSibling; // previous sibling element

document.nodeName // element name in upper case
document.nodeType // 1 or 3



*/









// // let pEl = document.getElementsByTagName("p");
// let pEl = document.querySelectorAll("p");
// console.log(pEl[1]);
// pEl[1].innerHTML = 'This is awesome.';








// let specialEl = document.getElementsByClassName("special");
// let specialEl = document.querySelectorAll(".special");
// console.log(specialEl[0]);
// specialEl[0].innerHTML = 'How may I help you?';










// let h1El = document.getElementById('cancer');
// let h1El = document.querySelectorAll('#cancer');
// console.log(h1El[0]);
// h1El[0].innerHTML = "Hello Mars";












// let specialEl = document.querySelector(".special");
// console.log(specialEl);













// let h1El = document.querySelectorAll('h1')[0];
// console.log(h1El)




















// let targetEl = document.childNodes[1].childNodes[2].childNodes[5].childNodes[1];
// console.log(targetEl);
// targetEl.innerHTML = "This is CSS class.";







// let h1El = document.querySelectorAll('h1')[0];
// let targetEl = h1El.parentNode.childNodes[5].childNodes[1];
// console.log(targetEl);
// targetEl.innerHTML = "How may I help you?";





















// let h1El = document.querySelectorAll('h1')[0];
// let targetEl = h1El.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1];
// console.log(targetEl);
// targetEl.innerHTML = 'This is CSS class';

















let olEl = document.querySelectorAll("ol");
let liEl = olEl[0].childNodes;
for (let i = 0; i < liEl.length; i++) {
    console.log(liEl[i].nodeType, liEl[i], liEl[i].nodeName);
    if (liEl[i].nodeType === 1 && liEl[i].nodeName === "LI") {
        liEl[i].innerHTML += " namaz";
    }
}
