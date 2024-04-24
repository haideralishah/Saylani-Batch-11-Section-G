
// function sum(num2, num1) {
//     console.log(num1 + num2);
// }

// sum(2, 4);
// sum(8, 3);
// sum(5.3, 4.8);




// let h1El = document.querySelectorAll("h1");

// function greetUser(greetMsg, userName) {
//     h1El[0].innerHTML = greetMsg + " " + userName;
// }

// let user = prompt('what is your name');
// greetUser("Assalmualaikum", user);

// greetUser("Eid Mubarak", "Muzammil");
// greetUser("Namaste", "Akash");

// greetUser("Muzammil", "Eid Mubarak");















// function displayMsg(greet, firstName, lastName, message) {

// }













// function calculate(num1, num2, operator) {
//     if (operator === "+") {
//         console.log(num1 + num2);
//     }
//     else if (operator === "-") {
//         console.log(num1 - num2);
//     }
//     else if (operator === "*") {
//         console.log(num1 * num2);
//     }
//     else if (operator === "/") {
//         console.log(num1 / num2);
//     }
//     else if (operator === "%") {
//         console.log(num1 % num2);
//     }
// }

// calculate(2, 4, "+");
// calculate(6, 7, "*");
// calculate(6, 7, "-");
// calculate(70, 7, "/");
// calculate(70, 9, "%");




//                 "hAIdER",  "AlI"
//                  "Haider Ali"
// function titleCase(firstName, lastName) {
//     let ffChr = firstName[0].toUpperCase();
//     let fRestChr = firstName.slice(1).toLowerCase();
//     let titledFName = ffChr + fRestChr;

//     let lFChr = lastName[0].toUpperCase();
//     let lRestChr = lastName.slice(1).toLowerCase();
//     let titledLName = lFChr + lRestChr;

//     let fullName = titledFName + " " + titledLName;

//     console.log(fullName);
// }

// titleCase("hAIdER", 'aLI');

// titleCase('muZAMMIl', "huSSAIn");












function findLastIndex(word, chr) {
    let lowerWord = word.toLowerCase();
    let lowerChr = chr.toLowerCase();
    let lastIndex = lowerWord.lastIndexOf(lowerChr);

    console.log(lastIndex);
}


findLastIndex("HELLO WORLD", "l");

