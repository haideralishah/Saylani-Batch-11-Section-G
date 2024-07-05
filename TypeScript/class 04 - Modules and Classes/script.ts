/*
1. add type="module" in script tag
2. modify tsconfig.json and change target and module properties to ESNext
3. run with live server
*/

// import { car as myCar, userName, age } from "./utils/sum.js";

// import Sum from "./utils/sum.js";

// import * as SumModule from "./utils/sum.js";
// console.log(SumModule.age);

// let count = sum(4, 5);
// console.log(Sum(4, 9))


// let car = "Haval H6 HEV";

// console.log(count, myCar, userName);

































































// interface Vhicle {
//     isAutomatic: boolean,
//     selfStart: boolean
// }
// interface Car extends Vhicle {
//     airConditioned: boolean
// }
// interface SpecialCar extends Car {
//     fly: boolean
// }

// interface Bike extends Vhicle {
//     footrest: boolean
// }

// let car: Car = {
//     isAutomatic: true,
//     selfStart: true,
//     airConditioned: true
// }
// let specialCar: SpecialCar = {
//     isAutomatic: true,
//     selfStart: true,
//     airConditioned: true,
//     fly: true
// }

// let bike: Bike = {
//     isAutomatic: false,
//     selfStart: true,
//     footrest: true
// }














































interface CarInterface {
    name: string;
    model: number;
    varient: string;
    isAutomatic: boolean;
    calculateAverage: (fuel: number, milage: number) => void;
}

class Car implements CarInterface{
    name;
    model;
    varient;
    constructor(carName: string, model: number, varient: string) {
        this.name = carName;
        this.model = model;
        this.varient = varient;
    }
    isAutomatic = true;
    calculateAverage(fuel: number, milage: number) {
        let msg = `${this.name} has fuel average of ${milage / fuel} km.`
        console.log(msg);
    }
}
let car1 = new Car("Mehran", 2005, "VXR");
car1.calculateAverage(20, 400);
let car2 = new Car("Haval", 2023, "HEV");
car2.calculateAverage(10, 150);

console.log(car1, car2);