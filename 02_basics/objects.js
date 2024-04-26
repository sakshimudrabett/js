//singleton(constructor)
//object.create()

//object literals
 //const jsuser={
 //   name:"sakshi",
 //   age:21
 //}
 //console.log(jsuser["name"]);//this is how you need to access the objects
 //console.log(jsuser["age"]);

 //jsuser.age=15//you can overwrite the changes like this
 //console.log(jsuser);
 //Object.freeze(jsuser)//if you do not want to change any of the values you can freeze the object like this
 //jsuser.age=18
 //console.log(jsuser);

 //jsuser.greeting=function(){
    //console.log("welcome");
 //}
 //jsuser.greetingtwo=function(){
    //console.log(`welcome ${this.name}`);//welcome sakshi
 //}

// console.log(jsuser.greeting());
 //console.log(jsuser.greetingtwo());

 //+++++++++++++++++++++++++++++++++++++

 const tinderuser={}
 tinderuser.id="123abc"
 tinderuser.name="sam"
 tinderuser.isLoggedIn=false
 //console.log(tinderuser);

 const regularuser={
    email:"sam@google.com",
    fullname:{
        userfullname:{
            firstname:"sakshi",
            lastname:"mudrabett"
        }
    }
 }
 //console.log(regularuser.fullname.userfullname.firstname);

 const obj1={ 1:'a',2:'b',3:'c'}
 const obj2={5:'d',6:'e'}
 //const obj3=Object.assign({},obj1,obj2)//combines the objects
 //console.log(obj3);

 const obj3={...obj1,...obj2}//spread property * easy and best*
 //console.log(obj3);


 //console.log(Object.keys(regularuser));
 //console.log(Object.values(regularuser));
 //console.log(Object.entries(regularuser));

 //+++++++destructuring+++++++++

 const course={
   coursename:"javascript",
   price:"999",
   courseinstructor:"sakshi"
 }
 const{courseinstructor: ci}=course // destructor concept , you can give simle names to access the object elements
 console.log(ci);