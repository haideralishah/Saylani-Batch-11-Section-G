"use strict";
/*
1. add type="module" in script tag
2. modify tsconfig.json and change target and module properties to ESNext
3. run with live server
*/
class Car {
    name;
    model;
    varient;
    constructor(carName, model, varient) {
        this.name = carName;
        this.model = model;
        this.varient = varient;
    }
    isAutomatic = true;
    calculateAverage(fuel, milage) {
        let msg = `${this.name} has fuel average of ${milage / fuel} km.`;
        console.log(msg);
    }
}
let car1 = new Car("Mehran", 2005, "VXR");
car1.calculateAverage(20, 400);
let car2 = new Car("Haval", 2023, "HEV");
car2.calculateAverage(10, 150);
console.log(car1, car2);
