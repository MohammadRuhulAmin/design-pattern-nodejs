const personBuilder = require('./Customer/customerBuilder')
const {log} = require('node:console')

const ruhul = new personBuilder().setName("Md. Ruhul Amin").setEmail("ruhul@ba-systems.com").setContact("01322-352864").build()
log(ruhul)