// let studentName = "Sameed";
// let rollNumber = 2643;
// let fee = 500;
// let subjects = ["HTML", "CSS", "JavaScript"];





// let student = {
//     rollNumber: 2643,
//     studentName: "Sameed",
//     fee: 500,
//     subjects: ["HTML", "CSS", "JavaScript"],
//     calculateAge: function () {
//         console.log('17 years old');
//     }
// };



// console.log(student.studentName);
// console.log(student.fee);
// console.log(student.subjects[2]);

// student.dob = 'October 7, 2003';
// student.fee = 700;
// student.subjects.push('NestJS');
// console.log(student);

// student.calculateAge();




























let car1 = {
    make: "Toyota",
    model: "2023",
    varient: "Grande",
    name: "Corolla",
    fuelType: "Hybrid",
    isAutomatic: true,
    color: 'black',
    milage: 2000,
    calculateTraveled: function (fuel) {
        console.log(`${fuel * 10}km you have travelled.`);
    }
}


let car2 = {
    make: "Honda",
    model: "2023",
    varient: "Xr Turbo",
    name: "Civic",
    fuelType: "Hybrid",
    isAutomatic: true,
    color: 'red',
    milage: 1000,
    calculateTraveled: function (fuel) {
        console.log(`${fuel * 9}km you have travelled.`);
    }
}



let car3 = {
    make: "Suzuki",
    model: "2023",
    varient: "VXR",
    name: "Mehran",
    fuelType: "CNG",
    isAutomatic: false,
    color: 'Rusty',
    milage: 100000,
    calculateTraveled: function (fuel) {
        console.log(`${fuel * 25}km you have travelled.`);
    }
}

let cars = [car1, car2, car3];

console.log(cars[0].make, cars[0].name);
cars[0].calculateTraveled(50);


console.log(cars[1].make, cars[1].name);
cars[1].calculateTraveled(40);

console.log(cars[2].make, cars[2].name);
cars[2].calculateTraveled(10);


























// function abc(fruit1, fruit2) {
//     let obj = {
//         item1: fruit1,
//         item2: fruit2
//     }

//     return obj;
// }
























function createBook(bookName, author, pages, topic) {

}


let book1 = createBook("Bahar Shariat", "Mufti Amjad", 9000, "Islamic");

/*
    {
        bookName: "Bahar Shariat",
        author:  "Mufti Amjad",
        pages: 9000, 
        topic: "Islamic"
    }

*/




