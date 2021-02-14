class Car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log(`Engine started for: ${ this.name }`);
    }

    stopEngine(){
        console.log(`Engine stopped for: ${ this.name}`);
    }
}

class Ford extends Car{

    topSpeed(speed){
        console.log(`Top speed for ${ this.name} is ${ speed }`);
    }
}

let myCar = new Ford();
myCar.setName('Fiesta');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);