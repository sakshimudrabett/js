//console.log(2>1); -> true;
console.log(null>0);
console.log(null==0);//avoid conversions like these
console.log(null>=0);

// in javascript == works differently 
//here null is been assigned as 0 itself during comparision, it is been changed automatically

console.log(undefined==0);

//strict check!
//=== -> it does strict check , it checks whether they have the same datatype or not
// == -> double equals to just checks and converts 