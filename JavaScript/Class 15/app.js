/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object:
    1. An object
    2. An array
    3. A date
*/

// function sum(num1, num2) {
//     console.log(num1 + num2);
// }
// function greetUser(userName, msg) {
//     console.log(`${msg} ${userName}! How may I help you?`)
// }
// function doAsDirected(a, b, callBack) {
//     callBack(a, b);
// }
// doAsDirected(1, 2, sum);
// doAsDirected(4, 5, sum);
// doAsDirected(`Abdullah`, "Eid Mubarak", greetUser);


// doAsDirected(4, 5, function (num1, num2) {
//     console.log(num1 - num2);
// });




// function displayMsg(str) {
//     console.log(str)
// }

// function findOddOrEven(num, printMsg) {
//     if (num % 2 === 0) {
//         printMsg(`${num} is even.`);
//     }
//     else {
//         printMsg(`${num} is odd.`);
//     }
// }
// findOddOrEven(7, displayMsg);
// findOddOrEven(9, displayMsg);
// findOddOrEven(12, displayMsg);





















let authMsgEl = document.querySelectorAll('.auth-msg');
function authSuccess() {
    authMsgEl[0].innerHTML = `
        <h4 class='success'>You are successfully authenticated.</h4>
    `;
}

function authFail() {
    authMsgEl[0].innerHTML = `
        <h4 class='fail'>Incorrect email or password.</h4>
    `;
}



let users = [
    {
        email: 'haideralishah@gmail.com',
        password: "123456"
    },
    {
        email: 'smit@gmail.com',
        password: "123456"
    }
];

function login(email, password, success, failure) {
    let isAuthenticated = false;
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.email === email && user.password === password) {
            isAuthenticated = true;
            break;
        }
    }

    if (isAuthenticated) {
        success();
    }
    else {
        failure();
    }
}

// login("haideralishah@gmail.com", "123456a", authSuccess, authFail);

login("smit@gmail.com", "123456a", authSuccess, authFail);











































