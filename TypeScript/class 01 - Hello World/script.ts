/*
https://www.w3schools.com/typescript/typescript_getstarted.php


install node js from nodejs.org



install typescript in your working directory with following command
npm install typescript --save-dev



create .gitignore and add node_modules



run following command to check tsc
npx tsc



run following command to create tsconfig.json
npx tsc --init



run following command to transpile
npx tsc



run following command to transpile and watch
npx tsc --watch


*/







let user: string = "haider";
user = "abdullah"

let num: number = 5;
num = 7;

let isOff: boolean = true;
isOff = false;


function greet(userName: string): void {
    console.log(`Welcome ${userName}`);
}
greet(user)


function makeGreeting(userName: string, msg: string): string {
    return `${msg} ${userName}`;
}

let greetMsg: string = makeGreeting("haider", "How are you")
console.log(greetMsg)