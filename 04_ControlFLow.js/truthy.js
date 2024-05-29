const userEmail = [];

// if(userEmail){
//     console.log("Got the user Email");
// }else{
//     console.log("Dont have the user email")
// }

// +++++++++++  Falsy values  ++++++++++++

    // false
    // 0
    // -0
    // BigInt 0n
    // ""
    // null
    // undefined
    // NaN


// +++++++++++   Truthy Values   +++++++++++

    // "0"
    // 'false'
    // " "
    // []
    // {}
    // function (){}

    // if(userEmail.length == 0){
    //     console.log("Empty Array");
    // }

    // const emptyObj = {}

    // if(Object.keys(emptyObj).length === 0){
    //     console.log("Empty Object");
    // }

 
// ++ Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 5;
console.log(val1);
val1 = undefined ?? 10;
console.log(val1);
val1 = null ?? undefined ?? null ?? 15 ;
console.log(val1);

// Nullish Coalescing Operator assignes the first value other than null or undefined.
