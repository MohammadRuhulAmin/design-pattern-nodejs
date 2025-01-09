const {log} = require('node:console')

const personFactory = require('./personFactory');
const ruhul = personFactory('ruhul amin','ruhul@gmail.com', 'Admin');
const sakib = personFactory('sakib hasan','sakib@gmail-xx.com','Student')
const sajid = personFactory('Sajid Hasan','sajid@hotmail.com','Customer')


log(ruhul)
log(sakib)
log(sajid)


