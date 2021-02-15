function sum(a, b){
    return a+b;
}

let sum2 = (a, b) => a + b;

function isPositive(number){
    return number >= 0;
}

let isPositive2 = number => number >= 0;

function randomNumber(){
    return Math.random();
}

let randomNumber2 = () => Math.random();

console.log(`Calling Normal function sum: ${ sum(3, 5)}
Calling Arrow function sum: ${ sum2(3, 5) }
Calling Normal Function isPositive: ${ isPositive(-6) }
Calling Arrow Function isPositive: ${ isPositive2(-6) }
Calling Normal function randomNumber: ${ randomNumber() }
Calling Arrow Funtion randomNumber: ${ randomNumber2() }`);