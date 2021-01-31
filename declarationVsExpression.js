function sum(num1, num2){
    console.log("Using simple functions");
    return(num1 + num2);
}
const num1 = 35;
const num2 = 10;
console.log(sum(num1, num2));
console.log("Using function as expression");
let fxnExpression = function (n1, n2) { return n1 + n2 } ;
console.log(fxnExpression(30, 4));