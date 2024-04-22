// let now = new Date();

// console.log(now);

// let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = now.getDay();
// // console.log(day);
// console.log(dayName[day]);






// let monthName = ["Jan", "Feb", "Mar", "Apr"];

// let month = now.getMonth();
// console.log(month);
// console.log(monthName[month]);












// let ms = now.getMilliseconds();
// console.log(ms);

// let msNow = now.getTime();
// console.log(msNow);



















let dob = new Date("October 4, 1991");
let now = new Date();

let age = now.getTime() - dob.getTime()

console.log(age / 1000 / 60 / 60 / 24 / 365.25);