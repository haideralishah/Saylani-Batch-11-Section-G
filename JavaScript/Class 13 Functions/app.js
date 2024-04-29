// function cook() {
//     console.log('bring chai paratha');
// }

// cook();
// cook();
// cook();
// cook();
// cook();



























// function cook(item1, item2) {
//     console.log("Bring " + item1 + " " + item2);
// }

// cook("Biryani", "raita");
// cook("bengan", "tende");











// function findCube(num) {
//     console.log(num * num * num);
// }

// findCube(3);

// findCube(9);

// findCube(5);




















// function displayMessage(userName, msg = 'How may I help you?') {
//     console.log(userName + " " + msg);
// }

// displayMessage("abdullah", "Assalamualaikum");

// displayMessage("Muzammil", "apni fees submit krwayen");

// displayMessage("Ahmed");















// function makeFruitChaat() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("crush " + arguments[i]);

//     }
// }

// makeFruitChaat("banana", "apple", "orange");
// makeFruitChaat("melon");
// makeFruitChaat("mango", "grapes");













// function letMeKnowYourWishes() {
//     console.log(arguments);
// }

// letMeKnowYourWishes("no traffic", "dinner biryani", "petrol 50Liter");


















// alert();
// let userName = prompt('what is your name?');








// function add2Num(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let findSum = add2Num(2, 6);

// console.log(findSum);














// input are in inches
// output should be in meters
// function findVolume(l, h, w) {
//     let lInMeters = l * 0.0254;
//     let hInMeters = h * 0.0254;
//     let wInMeters = w * 0.0254;

//     let calculatedVolume = lInMeters * hInMeters * wInMeters;
//     return calculatedVolume.toFixed(2) + "m";
// }

// let item = ["mobile", "remote", "laptop"];
// let h = [25, 30, 45];
// let w = [10, 15, 30];
// let l = [20, 25, 29];
// let volumeInMeters = [];

// let olEl = document.querySelectorAll('ol');
// for (let i = 0; i < item.length; i++) {
//     let volume = findVolume(20, 25, 10);
//     volumeInMeters.push(volume);
//     console.log("item " + item[i] + " volum is:" + volume);
//     // olEl[0].innerHTML += "<li>" + item[i] + " volume is: " + volume + "</li>"
//     olEl[0].innerHTML += `
//         <li>${item[i]} volume is: ${volume}</li>
//     `

// }

// console.log(volumeInMeters);



















// function addTwoNum(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let keBill = addTwoNum(7000, 2000); // KE bill + tax

// let educationalCost = addTwoNum(5000, 5000); // admission fee + tuition fee

// let dinner = addTwoNum(8000, 2000); // dinner + tax

// let grocerries = addTwoNum(15000, 100); // grocerries + delivery charges


// console.log(keBill, educationalCost, dinner, grocerries);



















function calculateGrade(marks) {
    let grade;
    if (marks >= 80) {
        grade = "A-1";
    }
    else if (marks < 80 && marks >= 70) {
        grade = "A";
    }
    else if (marks < 70 && marks >= 60) {
        grade = "B";
    }
    else if (marks < 60 && marks >= 50) {
        grade = "C";
    }
    else if (marks < 50 && marks >= 40) {
        grade = "D";
    }
    else if (marks < 40 && marks >= 33) {
        grade = "E";
    }
    else {
        grade = "F";
    }
    return grade;
}






let students = ['ahmed', "abdullah", "muzammil"];
let marks = [65, 75, 45];
let tBody = document.querySelectorAll('tbody');

for (let i = 0; i < students.length; i++) {
    let grade = calculateGrade(marks[i]);

    tBody[0].innerHTML += `
        <tr>
            <td>${students[i]}</td>
            <td>${marks[i]}</td>
            <td>${grade}</td>
        </tr>      
    `
}

