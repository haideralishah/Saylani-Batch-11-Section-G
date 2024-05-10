/*
data types
Math, string, number, boolean, array, date methods
conditions
loop
functions
DOM
onClick (click event)
*/







// let day = new Date().getDay();
// let dayName;

// if (day === 0) {
//     dayName = "Sunday";
// }
// else if (day === 1) {
//     dayName = "Monday";
// }
// else if (day === 5) {
//     dayName = "Friday";
// }
// else {
//     dayName = "Saturday";
// }



// let day = new Date().getDay();
// let dayName;
// switch (day) {
//     case 0:
//         dayName = "Sunday";
//         break;
//     case 1:
//         dayName = "Monday";
//         break;
//     case 5:
//         dayName = "Friday";
//         console.log(dayName);
//         break;
//     case 6:
//         dayName = "Saturday";
//         console.log(dayName);
//         break;
//     default:
//         dayName = "Saturday";
// }





























// let day = prompt('enter a day name');

// switch (day) {
//     case "Monday":
//         console.log("It is off.");
//         break;
//     case "Wednesday":
//         console.log('It is off.');
//         break;
//     default:
//         console.log('It is a working day.');
// }













// let day = prompt('enter a day name');

// switch (day) {
//     case "Monday":
//     case "Wednesday":
//         console.log("It is off.");
//         break;
//     case "Friday":
//         console.log('It is half day.');
//         break;
//     default:
//         console.log('It is a working day.');
// }



















// let age = +prompt("enter your age");
// let city = prompt('enter your city');

// switch (true) {
//     case age < 15 && city === "karachi":
//         console.log('congrats, you are eligible.');
//         break;
//     case age >= 15 && age < 20 && city !== 'karachi':
//         console.log('please contact Islamabad branch.');
//         break;
//     default:
//         console.log('Sorry, you are not eligible.');
// }




//Turnery Operator

// let age = +prompt("enter your age");

// age < 15 ?
//     console.log('congrats you are eligible.') :
//     console.log('Sorry you are not eligible.')

// if (age < 15) {
//     console.log('congrats you are eligible.');
// }
// else {
//     console.log('Sorry you are not eligible.')
// }

//condition ? if block : else block















































// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
















// let str = "";

// while (str !== "exit") {
//     str = prompt('enter any value');
// }






















// let dice = Math.ceil(Math.random() * 6);
// let i = 1;
// while (dice !== 6) {
//     dice = Math.ceil(Math.random() * 6);
//     console.log(dice, i++);
// }



































// let userInput = +prompt('enter a number');

// while (userInput % 2 !== 0) {
//     console.log(userInput);
//     userInput = +prompt('enter a number');
// }















// let userInput = 17;

// do {
//     console.log(userInput);
//     userInput = +prompt('enter a number');
// } while (userInput % 2 !== 0)













function greet(el) {
    console.log('hello', el);
    el.innerHTML = 'I love JavaScript.';
}

let h1El = document.querySelectorAll("h1");

greet(h1El[0]);
