const number = 2;
//Using if..else
console.log("Using if..else...");
if (number>0) {
  console.log("The number is positive");
}
else {
  console.log("The number is either negative or 0");
}
//Using if..else if
console.log("Using if..else if...");
if (number > 0) {
  console.log("The number is positive");
}
else if (number === 0) {
  console.log("The number is 0");
}
else {
  console.log("The number is negative");
}
//Using Ternary operator
console.log("Using ternary operator");
let result = (number>0) ? "The number is positive" : (number == 0) ? "The number is zero" : "The number is negative";
console.log(result);