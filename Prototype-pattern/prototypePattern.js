class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails(){return `${this.year} has ${this.make} ${this.model}`}
    startEngine(){console.log(`${this.make} ${this.model}'s engine has started.`);}
    
    honk(){console.log(`${this.make} ${this.model} says "Honk! Honk!"`);}
}

Vehicle.prototype.speed = function(){return 123.4;}
const car1 = new Vehicle("Toyota", "Corolla", 2020);
Vehicle.prototype.sound =  function(){return "Hammbaaaa!"}
console.log(car1.getDetails())
car1.startEngine()
car1.honk()
console.log(car1.sound())
console.log(car1.speed())

