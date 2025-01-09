const Customer = require('./Customer')

class personBuilder{
    constructor(){
        if(personBuilder.instance){return this;}
    }
    setName(name){
        this.name = name;
        return this; 
    }
    setEmail(email){
        this.email = email;
        return this;
    }
    setContact(contact){
        this.contact = contact;
        return this;
    }
    build(){return new Customer(this);}
}

module.exports = personBuilder;

