const logger = require('./Logger')

class Customer{
    constructor(name,fund){
        this.name = name;
        this.fund = fund;
        logger.log(`Customer name: ${this.name}, fund: ${this.fund}`)
    }
    
}

module.exports = Customer

