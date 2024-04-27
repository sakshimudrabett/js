var c=300//global scope

if(true){
    let a=10
    var c=30
   // console.log("inner: ",c);//30//block scope
}
//console.log(c);//300


//++++++++++++
//closure 


function one() {
    const username="sakshi"
    function two(){
        const lastname="mudrabett"
        //console.log(`${username} ${lastname}`);
    }
    two()
}
one()