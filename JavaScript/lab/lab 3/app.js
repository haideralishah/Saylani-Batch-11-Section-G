
// let city = promp('what is your city name?');

// if (city === "Karachi") {
//     console.log('welcome to the city of lights.');
//     document.write('welcome to the city of lights.');
//     alert('welcome to the city of lights.');
// }

















// let city = promp('what is your city name?');

// if (city === "Karachi") console.log('welcome');
// else console.log('hello world');










// let areYouGraduate = confirm('Are you graduate?');
// let division = +prompt("what was your score?");
// let sports = prompt("which sports do you play?");

// if (areYouGraduate && division >= 60 || sports === "cricket") {
//     console.log('you are eligible for admission.');
// }



// let areYouGraduate = confirm('Are you graduate?');
// let sports = prompt("which sports do you play?");

// if (confirm('Are you graduate?') && +prompt('what was your score?') >= 60) {

// }
// else if (prompt("which sports do you play?") === "cricket") {

// }


















// let totalMarks = +prompt('total marks?');
// let obtainedMarks = +prompt('obtained marks?');
// let percentage = obtainedMarks / totalMarks * 100;

// document.write("<h1>Marksheet</h1><br /><br />");
// document.write('<p>Total Marks: ' + totalMarks + "</p>");
// document.write('<p>Obtained Marks: ' + obtainedMarks + "</p>");

// document.write("<p>Percentage: " + percentage + "</p>")

// if (percentage >= 80) {
//     document.write("<p>Grade: A-1</p>");
//     document.write("<p>Remarks: Excellant</p>");
// }
// else if (percentage >= 70) {
//     document.write("<p>Grade: A</p>");
//     document.write("<p>Remarks: Good</p>");
// }
// else if (percentage >= 60) {
//     document.write("<p>Grade: B</p>");
//     document.write("<p>Remarks: You need to improve</p>");
// }
// else if (percentage < 60 ) {
//     document.write("<p>Grade: Fail</p>");
//     document.write("<p>Remarks: Moye Moye</p>");
// }






















let totalMarks = +prompt('total marks?');
let obtainedMarks = +prompt('obtained marks?');
let percentage = obtainedMarks / totalMarks * 100;
let grade, remarks;

document.write("<h1>Marksheet</h1><br /><br />");
document.write('<p>Total Marks: ' + totalMarks + "</p>");
document.write('<p>Obtained Marks: ' + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage + "</p>")

if (percentage >= 80) {
    grade = "A-1", remarks = "Excellant";
}
else if (percentage >= 70) {
    grade = "A", remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B", remarks = "You need to improve";
}
else if (percentage < 60) {
    grade = "Fail", remarks = "Moye Moye";
}

document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");
