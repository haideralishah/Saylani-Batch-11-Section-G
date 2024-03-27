/*
    do not user includes and indexOf methods
    use for loop
*/


// let capCities = ['Karachi', 'Lahore', 'Peshawar', 'Quetta', 'Skardu'];

// let userCity = prompt('Which city do you live in?'); //karachi
// let isCapCity = false;

// for (let i = 0; i < capCities.length; i++) {
//     let capCity = capCities[i];
//     console.log(capCity);
//     if (userCity.toLowerCase() === capCity.toLowerCase()) {
//         console.log('You live in a capital city.');
//         isCapCity = true;
//         break;
//     }
// }

// if (isCapCity === false) {
//     console.log('You do not live in a capital city.');
//     let doYouWantToMove = confirm("do you want to move?");
//     if (doYouWantToMove) {
//         console.log('you may explore properties on zameen.com');
//     }
// }






























// for (let i = 0; i <= 3; i++) {
//     console.log("***** outer loop " + i + " *****");

//     for (let j = 0; j <= 3; j++) {
//         console.log("====== inner loop " + j + " ======");
//     }

// }




























let firstNames = ["Akram", "Abdullah", "Aadil", "Noman"];
let lastNames = ["Khan", "Ansari", "Qureshi", "Tanoli"];
let possibleNames = [];
for (let i = 0; i < firstNames.length; i++) {
    let firstName = firstNames[i];

    for (let j = 0; j < lastNames.length; j++) {
        let lastName = lastNames[j];
        let fullName = firstName + " " + lastName;
        console.log(fullName);
        possibleNames.push(fullName);
    }
}
console.log(possibleNames);
