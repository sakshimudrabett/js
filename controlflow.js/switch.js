//-----------switch-------------
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

//falsy values

// false, 0,,-0,BigInt 0n ,"",null,undefined,NaN

//truthy values
//"0","false"," ",[],{},function(){}

//-------nullish coalescing operator(??):null undefined ------------

//let val1;
//val1=5??10//5
//val1=null??10//10
//val1=undefined??15//15
//val1=null??10??20
//console.log(val1);

//-----------TERNARY OPERATOR----------

//   CONDITION? TRUE : FALSE

const val1=250;
val1<249 ? console.log("lesser") : console.log("greater");  //greater