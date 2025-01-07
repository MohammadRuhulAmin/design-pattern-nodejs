const Product = require('./Product');
const Client = require('./Client')
const counter = require('./Counter'); // Singleton Counter instance

// Create product instances
const product1 = new Product('Product A', 10);
const product2 = new Product('Product B', 20);
const product3 = new Product('Product B', 20);

const client1  = new Client('ruhul','r-x.ok');
const client2  = new Client('Sakib','skx-cc');
counter.print()