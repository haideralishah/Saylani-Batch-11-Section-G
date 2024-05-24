let plan1 = {
    planName: "fat loss",
    excercises: "strength training",
    fee: 2000,
    admissionFee: 1000,
    isAirconditioned: false,
    calculateBill: function (noOfMonths) {
        let totalBill = (this.fee * noOfMonths) + this.admissionFee;
        if (noOfMonths >= 3) {
            totalBill = totalBill / 100 * 80;
        }
        console.log(totalBill);
    }
}

// console.log(plan1.planName);
// plan1.calculateBill(4);
// plan1.calculateBill(2);


// let excercises = "planName";
// console.log(plan1.excercises); // strength training
// console.log(plan1["excercises"]);// strength training
// console.log(plan1[excercises]); // fat loss







let allkeys = Object.keys(plan1);
let allValues = Object.values(plan1)
console.log(allkeys, allValues);


for (let prop in plan1) {
    console.log(plan1.prop);
    console.log(prop, ":", plan1[prop]);
}