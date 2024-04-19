// let userInput = +prompt('enter star count'); //10

// for (let i = 0; i < userInput; i++) {
//     let star = "*";

//     for (let j = 0; j < i; j++) {
//         star += "*";
//     }
//     console.log(star);
// }
















// let userInput = +prompt('enter star count'); //10

// for (let i = userInput; i >= 0; i--) {
//     let star = "*";
//     for (let j = 0; j < i; j++) {
//         star += "*";
//     }
//     console.log(star);
// }
















// let inputEl = document.querySelectorAll("input");
// let ulEl = document.querySelectorAll('ul');

// function showMsg() {
//     let userMsg = inputEl[0].value;
//     if (userMsg !== "" && userMsg !== " ") {
//         ulEl[0].innerHTML += "<li>" + userMsg + "</li>";
//         inputEl[0].value = "";
//     }
// }












// let str = "the quick brown fox jumps over the lazy dog.";
// console.log(str.slice(4, 9)); //
// console.log(str.slice(10, 15)); //
// console.log(str.slice(16, 19)); //
// console.log(str.slice(20, 25)); //
// console.log(str.slice(4, 19)); //
















// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";
// // the second world war

// for (let i = 0; i < str.length; i++) {
//     let targetTxt = str.slice(i, i + 12);

//     if (targetTxt === "world war II") {
//         str = str.slice(0, i) + "the second world war" + str.slice(i + 12);
//     }
// }

// console.log(str);











// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";

// str = str.replace(/world war II/g, "the second world war");

// console.log(str);











// let num = "512348431"; 5-1234843-1
// let num = "44334";  443-34






// let num1 = 51.99;
// let num2 = 51.44;

// console.log(Math.round(num1));
// console.log(Math.round(num2));

// console.log(Math.ceil(num1));
// console.log(Math.ceil(num2));

// console.log(Math.floor(num1));
// console.log(Math.floor(num2));










let random = Math.ceil(Math.random() * 8);

console.log(random);


























