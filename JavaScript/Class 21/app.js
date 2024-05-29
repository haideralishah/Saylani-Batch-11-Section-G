// function Student(name, rollNum, isFeePaid) {
//     this.name = name;
//     this.rollNum = rollNum;
//     this.isFeePaid = isFeePaid;
// }

// Student.prototype.subjects = ["HTML", "CSS", "JavaScript"];

// let student1 = new Student('Haider', 2643, true);
// let student2 = new Student('Abdullah', 2645, false);
// let student3 = new Student('Muzammil', 2647, true);
// student1.subjects = ["Python"];
// console.log(student1, student2, student3);






// let allvalues = Object.values(student1);
// console.log(allvalues.includes("Haider"), student1);


// for (let key in student1) {
//     if (student1[key] === "Haider") {
//         console.log(key);
//     }
// }




// delete student1.isFeePaid;
// student1.isSpecialQuota = true;
// console.log("isFeePaid" in student1);
// console.log("isSpecialQuota" in student1);

















// delete student1.isFeePaid;
// student1.isSpecialQuota = true;

// let allStudents = [student1, student2, student3];

// console.log(allStudents);

// for (let i = 0; i < allStudents.length; i++) {
//     let student = allStudents[i];
//     if ("isFeePaid" in student) {
//         if (student.isFeePaid) {
//             console.log(`${student.name}, Thank you for fee submission`);
//         }
//         else {
//             console.log(`${student.name}, Please clear your dues`);
//         }
//     }
//     else if ("isSpecialQuota" in student) {
//         console.log(`${student.name}, dill lga k prho`);
//     }
// }







































// console.log(student1.subjects, student1);
// console.log(student2.subjects, student2);

// console.log(student1.hasOwnProperty("subjects"));
// console.log(student2.hasOwnProperty("subjects"));


























// let currentURL = location;
// console.log(currentURL)



// let newURL = prompt('please enter a valid URL');
// location = newURL;
