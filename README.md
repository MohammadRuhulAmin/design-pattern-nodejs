# Design Pattern with Node.js

1. Singleton Pattern:
Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.


Here’s a complete example of the Singleton pattern in JavaScript:
Example: Singleton Counter Class 
```javascript
class Counter {
    constructor() {
        if (Counter.instance) {
            return Counter.instance; // Return the existing instance if already created
        }
        this.counter = 0; // Initialize the counter
        Counter.instance = this; // Cache the instance
    }
    increment() {this.counter += 1;}
    decrement() {this.counter -= 1;}

    getCount() {return this.counter;}
}

module.exports = new Counter(); // Export the Singleton instance


```

class index.js

```javascript
const counter1 = require('./Counter'); // Import Singleton Counter
const counter2 = require('./Counter'); // Import Singleton Counter again
// Increment using counter1
counter1.increment();
console.log('Counter 1:', counter1.getCount()); // Counter 1: 1
// Increment using counter2 (same instance as counter1)
counter2.increment();
console.log('Counter 2:', counter2.getCount()); // Counter 2: 2
// Decrement using counter1
counter1.decrement();
console.log('Counter 1 after decrement:', counter1.getCount()); // Counter 1 after decrement: 1
console.log('Are counter1 and counter2 the same instance?', counter1 === counter2); // true


```

- The Singleton class ensures only one instance is created by ``` caching the instance ```. 

- The Shared instance  maintains a single counter value, which is updated regardless of which reference is used. 

- The singleton ensures that state is consistent across your application and avoids multiple instances unnecessarily consuming resources.


2. Prototype pattern:

Before learning prototype-pattern, we need to learn what is prototype.
Every javaScript object has an internal property callad `[[Prototype]]`. Which points to 
another object or null. the prototype property is used primarily with constructor functions to define properties and methods that should be shared by all instances of objects created using that constructor. 

```javaScript
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
/** also we can modify the method */
Vehicle.prototype.startEngine = function(){
    console.log('Modified Text')
}
console.log(car1.getDetails())
car1.startEngine()
car1.honk()
console.log(car1.sound())
console.log(car1.speed())


```
But using class, The prototype is managed behind the scenes, but the concept remains same.
Prototype is useful for performance optimization. 
Methods are shared across instances, reducing memory usage. Secondly the prototype can be extended or modified dynamically.
Promotes reuse of methods and properties for similar objects.  


3. Factory Pattern:

Using Factory pattern we can easily manage multiple import statements to on single file and using that one file we can return the new instance 
of the necessary class.

Example:

```javascript

const Customer = require("./Customer");
const Admin = require("./Admin");
const Student = require("./Student")


const personFactory = (name, email, type) =>{
    if(type === 'Admin')return new Admin(name,email)
    else if (type === 'Customer') return new Customer(name, email)
    return new Student(name,email)

}

module.exports = personFactory;

```