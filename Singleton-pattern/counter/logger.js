class Logger{
   constructor(){
    if(Logger.instance){
        console.log('I am called')
        return this;
    }
    
   }



}