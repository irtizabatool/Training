class Animal{

    constructor(name){
        this.name = name;
    }

    eats(){
        console.log(`${ this.name } eats Food`);
    }
}

class Alligator extends Animal{

    constructor(name){
        super(name);
    }
    eats(){
        super.eats();
        console.log(`${ this.name } eats fish`);
    }
}

let ally = new Alligator('Ally');
ally.eats();