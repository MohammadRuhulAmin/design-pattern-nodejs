const counter = require('./Counter')
class Client{
    constructor(name,email){
        this.name = name;
        this.email = email;
        counter.increment()
    }
}

module.exports = Client; 