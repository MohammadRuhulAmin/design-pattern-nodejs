const Customer = require("./Customer");
const Admin = require("./Admin");
const Student = require("./Student")


const personFactory = (name, email, type) =>{
    if(type === 'Admin')return new Admin(name,email)
    else if (type === 'Customer') return new Customer(name, email)
    return new Student(name,email)
    

}


module.exports = personFactory;