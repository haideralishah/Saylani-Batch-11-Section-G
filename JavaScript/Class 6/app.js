/*

array.length // length of array
array.includes()  // boolean true or false
array.indexOf()  // index number of existing item or -1

array.pop()      // remove last index
array.push()     // add to last index
array.shift()    // remove first index
array.unshift()  // add to first index

array.splice()   // remove or add on targetted index
array.slice()   //  to make a copy of extracted item 


*/







// let fruits = ['apple', 'banana', 'oranges'];


// console.log(fruits.length);

// console.log(fruits[1]);

// let userFavFruit = prompt('what is your fav fruit?');
// if (fruits.includes(userFavFruit)) {
//     console.log("Your fav fruit is already in the list.");
// }
// else {
//     console.log('your fav fruit is not in the list.');
// }





// let books = ["Deewan Ghalib", "Baal Jebreel", "Bahar Shariat", "Rich Dad Poor Dad"];

// let userRequiredBook = prompt('which book do you want to read?');

// let bookIndex = books.indexOf(userRequiredBook);
// if (bookIndex > -1) {
//     console.log("Your required book is indexed at " + bookIndex)
// }
// else {
//     console.log('Sorry your required book is unavailable.');
// }










// let fruits = ['apple', 'banana', 'oranges'];

// fruits.pop();
// fruits.push("Kharbooza");

// console.log(fruits);













// let fruits = ['apple', 'banana', 'oranges'];

// fruits.shift();
// fruits.unshift("mango", "pineapple");

// console.log(fruits);











// let fruits = ['apple', 'banana', 'oranges', "mango", "watermelon"];

// fruits.splice(1, 0, "Melons", 'Grapes');
// fruits.splice(3, 2);

// console.log(fruits)



















let fruits = ['apple', 'banana', 'oranges', "mango", "watermelon", "strawberry", "grapes", "melons"];


// let favFruits = fruits.slice(2, 4);
let favFruits = fruits.slice(4, 7);

console.log(favFruits)



