class Admin {
    constructor(name,email){
        this.name = name;
        this.email = email;
        console.log(`${name}, ${email}`)
    }
}

module.exports = Admin;