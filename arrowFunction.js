const calculateSquares = num => num ** 2;
 let numbers = [1,2,3,4];
 console.log(numbers.map(calculateSquares));
 let numbers2 = [5,6,7,8];
 console.log(numbers2.map(calculateSquares));

 // Arrow functions using this keyword
console.log("Example: Arrow function using THIS keyword");
class  Person {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100)
    }
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100)
    }
}

let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();