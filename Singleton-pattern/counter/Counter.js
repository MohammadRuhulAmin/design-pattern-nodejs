class Counter{
    constructor(){
        if(Counter.instance){
            console.log('I am called')
            return this;
        }
        this.counter = 0;
    }
    increment(){
        this.counter += 1; 
    }

    print(){
        console.log(`counter :-> ${this.counter}`)
    }
}

module.exports = new Counter();