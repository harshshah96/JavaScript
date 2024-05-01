const accountId = 144553
let accountEmail= "shahharsh.5603@gmail.com"
var acccountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId=2      //not allowed

accountEmail = "hc@hc.com"
acccountPassword = "121212121"
accountCity = "Ahmedabad"

/*
Never use "var" because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,acccountPassword,accountCity, acc]);
console.log(accountId);

