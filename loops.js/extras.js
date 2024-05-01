//----------for of-----------

//array specific loops

const arr=[1,2,3,4]

for (const num of arr) {
 //   console.log(`${num}`);
}

const welcome="welcome to the world"

for (const welc of welcome) {
    //console.log(welc);
}

//-----MAPS---------
const map = new Map()
map.set('IN',"india")
map.set('FR',"france")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key ,':' ,value);
}

//for objects 'for-in' should be used 

const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for (const key in myobject) {
    //console.log(`${key} is shortcut for ${myobject[key]}`);
}

//for arrays also it works!
const myarr=[1,2,3,4]
for (const key in myarr) {
    //console.log(key);
}

//-----------for each--------------

const code=["js","ruby","c++","python"]
/*
code.forEach(function (value){
    console.log(value);
})*/

code.forEach((lol) => {
    console.log(lol);
})