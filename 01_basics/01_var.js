const accountId=145642
let accountEmail="sakshi1@google.com"
var accountPassword="12345"
accountCity="bangalore"
//accountId=2//not allowed
console.log(accountId);
/* try to avoid var because it might cause problem in block scope and functional scope*/
console.table([accountEmail,accountId,accountPassword,accountCity])