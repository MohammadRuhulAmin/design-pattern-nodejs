const logger = require('./Logger')

class Admin{
    constructor(name){
        this.name = name 
        logger.log(`Admin: ${name}`)
    }



}

module.exports = Admin

