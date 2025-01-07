const logger = require('./Logger')
const Product = require('./Product')
const Customer = require('./Customer')
const Admin = require('./Admin')


logger.log('starting')
const p1 = new Product('Chips',[{'name':'potato','price':100}])
const c1 = new Customer('ruhul',888)
const a1 = new Admin('Md Ruhul Amin')
logger.log('ending')
console.log(`${logger.count}`)