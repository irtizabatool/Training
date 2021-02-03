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