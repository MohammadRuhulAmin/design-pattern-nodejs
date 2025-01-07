const logger = require('./Logger.js')


class Product{
    constructor(name, inventory = []){
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Product: ${name} has ${inventory.length} items is stock`)
    }
}

module.exports = Product