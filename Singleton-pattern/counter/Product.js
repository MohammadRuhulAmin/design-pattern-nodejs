const counter = require('./Counter')

class Product{
    constructor(name,amount){
        this.name = name 
        this.amount = amount
        counter.increment()
        
    }
}


module.exports = Product;






