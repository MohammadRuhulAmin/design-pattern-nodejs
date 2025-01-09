function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function(){
    console.log(`Hi ${this.name} , ${this.age}`)
}

Person.prototype.bye = function(){
    console.log('Bye')
}

const person1 = new Person('Ruhul',23);
const person2 = new Person('Sakib',34);

person1.greet()
person2.greet()

console.log(Object.getPrototypeOf(person1))
// console.log(person1.__proto__)

console.log(Object.keys(person1)); // Output: ["name", "age", "job"]
Object.keys(person1).forEach(key =>{
    console.log(key)
})

console.log(Object.entries(person1))
console.log(Object.values(person1))