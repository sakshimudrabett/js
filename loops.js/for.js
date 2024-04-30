//---for-----------

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

let myarray=[1,2,3,4,5]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

//---break and continue----------

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("end!");
        break;
    }
    console.log(`value of i is = ${i}`);
}

for (let i= 1; i<10 ; i++) {
    if(i==7){
        console.log("sorry just continue !");
        continue
    }
    console.log(i);
    
}