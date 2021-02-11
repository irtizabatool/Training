function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;

    let calculateSalary = function() {
        let finalSalary = baseSalary + monthlyBonus;
        console.log(`The final salary is: ${ finalSalary }`);
    }

    this.getEmployeeDetails = function() {
        console.log(`Name: ${ this.name } | Age: ${ this.age }`);
        calculateSalary();
    }
}

let employee1 = new Employee("Bob", 32, 25000);
employee1.getEmployeeDetails();