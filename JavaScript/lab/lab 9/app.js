// function greet(user){
//     console.log(`Assalamualaikum ${user}`);
// }

// greet("haider");

// greet("Abdullah");

















// let user = "Haider";
// let msg = "My name is " + user + ".";
// let msg1 = `My name is ${user}.`;

// let msg2 = `
//     <h2>My name is ${user}.</h2>
// `;



















// let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let dateEl = document.querySelectorAll('.date-n-time');

// function printDatenTime() {
//     let now = new Date();
//     let str = `
//         <h2>${monthName[now.getMonth()]}, ${now.getFullYear()}</h2>
//         <h2>${now.getHours()}:${now.getMinutes()}</h2>
//         <h2>${dayName[now.getDay()]}</h2>
//     `;

//     dateEl[0].innerHTML = str;
// }
// printDatenTime();



















// function calclateHyp(base, perp) {
//     function calculateSqr(num) {
//         return num * num;
//     }

//     let hyp2 = calculateSqr(base) + calculateSqr(perp);

//     let hyp = Math.sqrt(hyp2);
//     console.log(hyp.toFixed(2));
// }

// calclateHyp(4, 5);


































// function findLargeNSmallNSum() {
//     if (arguments.length < 1) return "1 parameter is required.";

//     let sum = 0;
//     let largest = arguments[0];
//     let smallest = arguments[0];

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];

//         if (arguments[i] > largest) {
//             largest = arguments[i];
//         }

//         if (arguments[i] < smallest) {
//             smallest = arguments[i];
//         }
//     }
//     let str = `
//     Sum: ${sum}
//     Largest Number: ${largest}
//     Smallest Number: ${smallest}
//         `
//     console.log(str);
// }

// findLargeNSmallNSum(1, 2, 8, 7, 3);
// findLargeNSmallNSum(1, 2, 3, 7, 999, 9, 20, 45, 66, 100);
// findLargeNSmallNSum();

























function splitStr(str, separator) {

}


function joinArr(arr, separator) {

}









