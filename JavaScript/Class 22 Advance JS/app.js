/*
stack
heap

Mutable & Immutable

Primitive Types are immutable
number, boolean, string, null, undefined, bigint, symbol

Non Primitive Types are mutable
array, objects, functions
*/

// let student1 = "haider";
// let student2 = student1; //haider
// student1 = "ali";

// console.log(student2, student1)





// let lunch = "biryani";
// let dinner = lunch;
// lunch = 'zinger';
// dinner = "apple";
// console.log(lunch, dinner);



// let user1 = {
//     name: 'haider',
//     rollNum: 2643
// }
// console.log(user1);
// let user2 = user1;
// user2.name = "abdullah";
// console.log(user2);


// let fruits = ["apple", "banana", "orange"];
// let favFruits = fruits.slice(0);










// let user1 = {
//     name: 'haider',
//     rollNum: 2643
// }
// let user2 = {
//     name: 'abdullah',
//     rollNum: 2655,
//     id: 1
// }
// Object.assign(user2, user1);

// let user2 = Object.assign({}, user1);
// user2.name = 'abdullah';
// console.log(user2, user1);


































// let uber = "car";
// let careem = uber; // "car"

// console.log(careem);
// uber = 'rickshaw';
// console.log(careem);





// let num1 = [1, 2, 3];
// let num2 = num1.slice(0);
// num1.push(4);
// console.log(num2);

// let obj1 = {
//     name: 'aslam',
//     rollNum: 2644
// }
// let obj2 = Object.assign({}, obj1);
// obj1.name = "akram";
// console.log(obj2, obj1);




















// let fruits = ["apple", "banana", "orange"];
// let favFruits = [...fruits];
// favFruits.push('watermelon');
// console.log(fruits, favFruits);






// let obj1 = {
//     name: 'aslam',
//     rollNum: 2644
// }
// let obj2 = { ...obj1 };
// obj2.name = "abdullah";
// console.log(obj2, obj1);































// /* Promise */
// let treat = new Promise(function (resolve, reject) {
//     let isNotesAvail = confirm("Have you arranged English Notes?");
//     if (isNotesAvail) {
//         let foodWish = prompt('what do you want to eat?');
//         resolve(foodWish);
//     }
//     else {
//         reject("dosti khtm");
//     }
// });



// treat
//     .then(function (foodItem) {
//         console.log(`Thanks bro, ${foodItem} is due on me.`);
//     })
//     .catch(function (e) {
//         console.log('Tm se ye umeed ni thi.', e);
//     })


























// let user = {
//     userName: 'Haider Ali Shah',
//     rollNumber: 2643,
//     isTeacher: true,
//     subjects: ['JavaScript'],
//     fathersName: "Muhammad Shah Alam"
// }

// function printStudent(student) {
//     let userName = 'Abdullah';

//     const {
//         userName: studentName,
//         fathersName,
//         rollNumber,
//         ...remainingProps
//     } = student;

//     console.log(remainingProps)

//     let str = `
//         Welcome ${studentName} son of ${fathersName}, your roll number is ${rollNumber}.
//     `;

//     document.write(str);

// }

// printStudent(user);




























// let car = {
//     carName: 'Mehran',
//     varient: "VXR",
//     model: 2005,
//     features: {
//         isAirConditioned: true,
//         isAutomatic: false,
//         fuelAverage: "best",
//         easyToDhakka: true
//     }
// }
// const {
//     carName,
//     varient,
//     features: { fuelAverage, easyToDhakka }
// } = car;

// console.log(carName, varient, fuelAverage, easyToDhakka);











































// let fruits = ['apple', 'banana', 'watermelon', 'orange', 'mango'];

// const [fruit1, , , fruit2] = fruits;

// console.log(fruit1, fruit2);

// const [fruit1, , fruit2, , fruit3] = fruits;

// console.log(fruit1, fruit2, fruit3)















































/*
Arrow Function

() => {
    console.log('hello');
}

(userName, rollNumber) => {
    console.log(`Welcome ${userName}, your roll number is ${rollNumber}`);
}


() => `Welcome.`;

(userName, rollNumber) => `Welcome ${userName}, your roll number is ${rollNumber}`;

userName => `Welcome ${userName}`

*/



// function greet() {
//     console.log('hello');
// }

// () => {
//     console.log('hello');
// }

// setTimeout(() => {
//     console.log('hello');
// }, 500);



// const greet = () => {
//     console.log('hello world');
// }

// greet();







// const greet = (userName, rollNumber) => {
//     console.log(`Welcome ${userName}, your roll number is ${rollNumber}`);
// }

// greet('haider', 2435);



















// const makeMessage = (userName, rollNumber) => `Welcome ${userName}, your roll number is ${rollNumber}`;

// let greet = makeMessage("Abdullah", 2643);

// console.log(greet);





















// const makeMessage = userName => `Welcome ${userName}`;

// let greet = makeMessage("Abdullah");

// console.log(greet);















// let obj = {
//     num: 5,
//     calculateSquare: function () {
//         console.log(this.num * this.num);
//         console.log(this);
//     }
// }



// let obj = {
//     num: 5,
//     calculateSquare: () => {
//         console.log(this.num * this.num);
//         console.log(this);
//     }
// }



















// let obj = {
//     num: 5,
//     calculateSquare: function () {
//         console.log(this.num * this.num);
//         console.log(this);
//         const anotherFun = () => {
//             console.log(this);
//         }
//         anotherFun();
//     }
// }

// obj.calculateSquare();



















// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// allNum.forEach((num, i) => {
//     if (i % 2 !== 0) return;

//     console.log(num * num);
// });



// let fruits = ["Apple", "Banana", "Orange", "Cherry", "Grapes", "Watermelon"];

// fruits.forEach((fruit, i) => {

//     console.log(fruit.toUpperCase(), i);

// });





























// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let squareArr = allNum.map(num => num * num);

// console.log(squareArr)










// let fNames = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib"];

// fNames = fNames.map((fName) => {
//     return fName.toUpperCase()
// });

// fNames = fNames.map(fName => fName.toUpperCase());

// console.log(fNames);















// let fNames = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib"];

// fNames = fNames.map(fName => {
//     let firstChr = fName[0].toUpperCase();
//     let restChr = fName.slice(1).toLowerCase();
//     return `${firstChr}${restChr}`;
// });

// console.log(fNames);
























// let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNums = allNum.filter((num) => num % 2 === 0);

// console.log(evenNums);













// let students = ["haider", "abdullah", "aslam", "akram", "sameed", "anas", "ahmed", "shoaib", "akram", "hassan", 'rashid', "umair"];

// let feesClear = ["haider", "abdullah", "aslam", "anas", "ahmed", "shoaib", "umair"];

// let examClear = ["abdullah", "aslam", "akram", "ahmed", "shoaib", "akram", "hassan", 'rashid'];

// let eligible = students.filter((student) => (
//     feesClear.includes(student) &&
//     examClear.includes(student)
// ))

// console.log(eligible);










































































/*
array.forEach((item, index)=>);

array.map((item, index)=>{});

array.filter((item, index)=>{})

array.reduce((accomVal, item, index)=>, initVal)

array.every((item, index)=>)

array.some((item, index)=>)

*/



// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15];

// let sum = num.reduce((init, item) => init + item, 0);

// console.log(sum);
















// let str = "hello world";

// let reverseStr = str.split("").reverse().join("");

// let revStr = str.split("")
//     .reduce((reverse, chr) => chr + reverse, "");

// console.log(revStr)



























// let str = 'the quick brown fox jumps over the lazy dog.';
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// let count = str.split("")
//     .reduce((vowCount, chr) => (
//         vowels.includes(chr) ? vowCount + 1 : vowCount
//     ), 0);

// console.log(count)


























// let str1 = "Saylani Mass Information Technology"; //SMIT
// let str2 = "Pakistan Telecommunication Company Limited"; // PTCL
// let str3 = "National Aeronautics Space Administration"; //NASA

// let abbr1 = str1.split(" ").reduce(findAbbr, "");

// let abbr2 = str2.split(" ").reduce(findAbbr, "");

// let abbr3 = str3.split(" ").reduce(findAbbr, "");

// function findAbbr(firstChrs, words) {
//     return firstChrs + words[0];
// }

// console.log(abbr1, abbr2, abbr3);























































// let teamAges = [15, 18, 20, 22, 19];

// let eligible = true;

// for (let i = 0; i < teamAges.length; i++) {
//     if (teamAges[i] < 15) {
//         eligible = false;
//         break;
//     }
// }
// console.log(eligible);





// let teamAges = [15, 18, 20, 31, 22, 24];

// let eligibleForAdmission = teamAges.every((age) => age >= 15);

// let eligibleForGym = teamAges.some((age) => age >= 30);

// console.log(eligibleForAdmission);
// console.log(eligibleForGym);





























// let users = [
//     { email: "headeralishah@gmail.com", password: "12345678" },
//     { email: "abdullah@gmail.com", password: "12345678" },
//     { email: "muzammil@gmail.com", password: "12345678" },
// ]

// function authenticate(userEmail, userPassword) {
//     return new Promise((resolve, reject) => {
//         let isAuth = users.some(({ email, password }) => {
//             return email === userEmail && password === userPassword
//         });
//         if (isAuth) {
//             resolve("Successfully login");
//         }
//         else {
//             reject('Incorrect email or password');
//         }
//     });
// }

// authenticate("headeralishah@gmail.com", "12345678")
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
































// try {
//     aler('Hello World');
// }
// catch (e) {
//     console.error(e);
//     document.write(e);
// }

// console.log("Hello Mars");


// function returnNum() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => resolve(1), 1000);
//     })
// }
// returnNum()
//     .then((result) => {
//         alert(result);
//         return result * 2;
//     })
//     .then(function (result) {
//         alert(result);
//         return result * 2;
//     })

//     .catch((e) => {
//         console.error(e)
//     })













// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 3000)
// });

// Promise.all([promise2, promise3, promise1])
//     .then((success) => {
//         console.log(success);
//     });



















// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("a promise4");
//     }, 3000)
// });

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("b promise5");
//     }, 5000)
// });

// Promise.race([promise4, promise5])
//     .then((success) => {
//         console.log(success);
//     })












function fetchUser1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userName: 'haider', email: 'header@gmail.com' })
        }, 3000)
    });
}

async function getUser() {
    let user = await fetchUser1();
    console.log('next line', user);
}
getUser();





/*
try{}catch(){}
Promise.all()
Promise chaining
Promise.race()
async await
JSON.stringify()
JSON.parse()



self study
localstorage
await fetch()
*/