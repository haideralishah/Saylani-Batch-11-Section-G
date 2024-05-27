// let plan1 = {
//     planName: "fat loss",
//     excercises: "strength training",
//     fee: 2000,
//     admissionFee: 1000,
//     isAirconditioned: false,
//     calculateBill: function (noOfMonths) {
//         let totalBill = (this.fee * noOfMonths) + this.admissionFee;
//         if (noOfMonths >= 3) {
//             totalBill = totalBill / 100 * 80;
//         }
//         console.log(totalBill);
//     }
// }

// console.log(plan1.planName);
// plan1.calculateBill(4);
// plan1.calculateBill(2);


// let excercises = "planName";
// console.log(plan1.excercises); // strength training
// console.log(plan1["excercises"]);// strength training
// console.log(plan1[excercises]); // fat loss







// let allkeys = Object.keys(plan1);
// let allValues = Object.values(plan1)
// console.log(allkeys, allValues);


// for (let prop in plan1) {
//     console.log(plan1.prop);
//     console.log(prop, ":", plan1[prop]);
// }

































// let user = {
//     userName: 'haider',
//     haider: `He is a full stack engineer and trainer.`
// }

// let userName = "haider";
// // console.log(user.userName)
// console.log(user["userName"]); // "haider"
// console.log(user[userName]); //








// let user = {
//     userName: 'haider',
//     haider: `He is a full stack engineer and trainer.`,
//     isMarried: true,
// }

// for (let prop in user) {
//     user[prop] = prompt(`Enter a new value for key ${prop}`);


// let obj = {
//     [prop]: user[prop]
// }
// console.log(obj);
// }

// console.log(user);







































// let keyName = prompt('enter a key name'); // userName
// let keyValue = prompt('enter a key value'); // "haider"

// let obj = {
//     [keyName]: keyValue
// }

// console.log(obj);































































































// {
//     name: 'anas',
//     rollNumber: 2643,
//     subjects: ['HTML','CSS', "JavaScript"],
//     isMatriculate: true

// }


// function Student(name, rollNumber, subjects, isMatriculate) {
//     this.name = name;
//     this.rollNumber = rollNumber;
//     this.subjects = subjects;
//     this.isMatriculate = isMatriculate;
// }

// Student.prototype.isEntryTestPassed = true;

// let student1 = new Student("Anas", 2643, ["JavaScript", "Firebase"], true);
// let student2 = new Student('Umair', 5555, ["NodeJS"], true);
// console.log(student1.isEntryTestPassed, student2.isEntryTestPassed);




// function Car(name, model, varient) {
//     this.name = name;
//     this.model = model;
//     this.varient = varient;
// }
// Car.prototype.calcFuelAvg = function (fuel, km) {
//     console.log(`Fuel average is ${km / fuel}.`);
// }

// let car1 = new Car('Mehran', 2005, "VXR");
// let car2 = new Car("Toyota Corolla", 2013, "GLI");
// car1.calcFuelAvg(20, 200);
// car2.calcFuelAvg(10, 130);

















// let sec = 1;
// let intervalRef = setInterval(function () {
//     if (sec === 10) {
//         clearInterval(intervalRef);
//     }
//     console.log(sec++);
// }, 250);



// let timeline = setTimeout(function () {
//     console.log('shoot');
// }, 1000);

// let isAmountArranged = prompt('have you arranged the amount');
// if (isAmountArranged === 'yes') {
//     clearTimeout(timeline);
// }


