//immediately invoked function expressins (iife)
//global scope pollution can be avoided by iife
(function chai(){
    console.log(`welcome !`);
})();//if two ife's are to be used the first one has to ended with ;

( (name)=>{
    console.log(`welcome ${name}`);
})('sakshi')