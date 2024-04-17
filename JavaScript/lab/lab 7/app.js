// let h1Elements = document.querySelectorAll("h1");

// h1Elements[0].innerHTML = "SMIT Admission";

// let spanEl = document.querySelectorAll("span");

// spanEl[0].innerHTML = "this is awkward";










// let pEl = document.querySelectorAll("p");

// for (let i = 0; i < pEl.length; i++) {
//     pEl[i].innerHTML = "The quick brown fox jumps over the lazy dog.";
// }







// let imgEl = document.querySelectorAll("img");
// imgEl[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnFgdOqI3ng2L3UJqMeW9Acz5mGj6LAcbMGOApTkJYA&s";








// function changeImage() {
//     console.log(2 + 2);
// }


// changeImage();
// changeImage();
















// let imgEl = document.querySelectorAll("img");
// let isNewImage = false;
// function changeImage() {
//     if (isNewImage === false) {
//         imgEl[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnFgdOqI3ng2L3UJqMeW9Acz5mGj6LAcbMGOApTkJYA&s";
//         isNewImage = true;
//     }
//     else {
//         imgEl[0].src = "https://i.pinimg.com/474x/4b/f6/f1/4bf6f197ad48bcf5bcc0a761954cb48d.jpg";
//         isNewImage = false;
//     }
// }




















let inputEl = document.querySelectorAll('input');

function showMessage() {
    console.log(inputEl[0].value);
    inputEl[0].value = "";
}