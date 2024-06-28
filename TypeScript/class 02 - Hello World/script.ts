
/*Union Types*/
// let user: string | number = "haider";

// user = 5;

// let fruits: string[] = ['Apple', 'Banana'];

// let mixArr: (string | number)[] = ['Apple', 'Banana'];
// mixArr.push(1);











// let user: any;
// user = "haider";
// user = 2;
// user = true;



















/* Making custome types or aliases  */
// type Mixed = string | number | boolean;

// let h: Mixed = "a";

// let o: Mixed = 4;

// let c: Mixed = "e";

// let u: Mixed = true;

// console.log(h, o, c, u);












type Car = {
    name: string,
    model: number,
    varient: string,
    isAutomatic: boolean,
    features: string[],
    launchedYear?: number,
    calculateAvg?: (fuelQty: number, distance: number) => void
}

let car: Car = {
    name: 'Mehran',
    model: 2009,
    varient: 'VXR',
    isAutomatic: false,
    features: ["Air Bags", "Air Conditioned"],
    calculateAvg: (fuelQty, distance) => {
        
    }
}

car.launchedYear = 2000;


