function Car (type, color, capacity) {
   this.type = type;
   this.color = color;
   this.capacity = capacity;
}
let car1 = new Car('Minivan', 'red', 7);
let car2 = new Car('Cabrio', 'black', 2);
console.log(car1.type);
console.log(car1.capacity);
console.log(car2.type);
console.log(car2.capacity);
const keys = Object.keys(car1);
console.log(keys);
const length = Object.keys(car1).length;
console.log(`The car object has ${length} properties`);
const values = Object.values(car1);
console.log(`The values of Car1 are : ${values}`);