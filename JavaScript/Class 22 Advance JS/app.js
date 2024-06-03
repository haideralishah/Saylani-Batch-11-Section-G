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











































/* Promise */
let treat = new Promise(function (resolve, reject) {
    let isNotesAvail = confirm("Have you arranged English Notes?");
    if (isNotesAvail) {
        let foodWish = prompt('what do you want to eat?');
        resolve(foodWish);
    }
    else {
        reject("dosti khtm");
    }
});



treat
    .then(function (foodItem) {
        console.log(`Thanks bro, ${foodItem} is due on me.`);
    })
    .catch(function (e) {
        console.log('Tm se ye umeed ni thi.', e);
    })