/*
for loop
nested loop
question 13
question 14

*/











// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//     console.log("hello world", 2 * i);
//     arr[i]
// }







// let primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];

// let favPrime = primeNumbers.slice(5, 9);

// console.log(favPrime);






















// let primeNumbers = [1, 2, 11, 3, 5, 7, 17, 19, 23, 29, 31, 37, 41, 43, 13];
// let favPrime = [];

// for (let i = 0; i < primeNumbers.length; i++) {
//     if (primeNumbers[i] >= 10 && primeNumbers[i] <= 20) {
//         favPrime.push(primeNumbers[i]);
//     }
// }

// console.log(favPrime);























// for (let k = 1; k <= 5; k++) {
//     for (let j = 1; j <= 12; j++) {
//         for (let i = 1; i <= 30; i++) {
//             console.log('attendance');
//         }
//         console.log('pay salary');
//     }
//     console.log("Increment 10% ******************");
// }
// console.log("give 1% equity");




















// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(i * j);
//     }
// }




























// let students = ["Ali", "Sami", "Taha", "Inam"];
// let scores = [58, 73, 89, 90];
// document.write("<table><tr><th>Students</th><th>Score</th></tr>");
// for (let i = 0; i < students.length; i++) {
//     document.write("<tr>");
//     document.write("<td>" + students[i] + "</td>");
//     document.write("<td>" + scores[i] + "</td>");
//     document.write("</tr>");
// }

// document.write("</table>");
























// let scores = [12, 45, 3, 22, 34, 50];
// let stopNum = +prompt("enter a number");

// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
//     if (scores[i] === stopNum) {
//         break;
//     }
// }











// let arr = [1, 5, 7, 3, 7, 1, 6, 7, 1, 65, 100, 75, 1571, 30];

// let largestNumber = 1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//         largestNumber = arr[i];
//     }
// }

// console.log(largestNumber);


















let arr = [100, 7, 3, 7, 6, 7, 65, 100, 75, 1571, 30];

let smallestNum = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
        smallestNum = arr[i];
    }
}

console.log(smallestNum);