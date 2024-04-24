//+++ARRAY++++
//array is an object 
// in javascript array is resizeable

//const myarr=[0,1,2,3,4]
//const myheros=["batman","superman","spiderman"]

//console.log(myarr[2]);
//console.log(myheros[1]);

//+++ARRAY METHODS++++

//myarr.push(5)//adds value to the array at the last
//console.log(myarr);
//myarr.pop();//no value to be mentioned , it removes the last element
//console.log(myarr);

//myarr.unshift(17)//the element added gets placed at the first
//console.log(myarr);
//myarr.shift()//its just like pop...no element to be mentioned but it deletes the unshifted element
//console.log(myarr);

//console.log(myarr.includes(2));//which gives an output in boolean form(t/f)
//console.log(myarr.indexOf(1));//it gives you the index no of the element

//const newarr= myarr.join()
//console.log(myarr);//[0,1,2,3,4]
//console.log(newarr);//0,1,2,3,4
//console.log(typeof(newarr));//string

//slice,splice

//const myarr=[1,2,3,4,5]

//const myn1=myarr.slice(1,3)
//console.log(myarr);//[1,2,3,4,5]
//console.log("A",myn1);//A [2,3]
//const myn2=myarr.splice(1,3)
//console.log(myarr);[1,5]
//console.log("B",myn2);//B [2,3,4]

//differnece btwn slice and splice is .... splice array changes ,slice array does not change

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman"]

//marvel_heros.push(dc_heros)
//console.log((marvel_heros));

//const al_heros=marvel_heros.concat(dc_heros)//concat(* we need to have a new variable for concatenation)
//console.log(al_heros);

//const super_heros=[...marvel_heros,...dc_heros]//spread
//console.log(super_heros);

const another_array=[1,2,3,[4,5],4,5,[1,2,3],[7,8,[6,7,8]],9]
const real_array=another_array.flat(Infinity)//flat--> adds all the sub arrays into one single array
//console.log(real_array);

console.log(Array.isArray("sakshi"));
console.log(Array.from("sakshi"));
console.log(Array.from({name:"sakshi"}));//gives you an epty array as it cant identify whether to consider key/values

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));