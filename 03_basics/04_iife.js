// Immediately invoked function expression
// to eliminate the global scope pollution from unwanted variable , functions and other  declarations

(function chai (){
    // named IFFY
    console.log(`DB CONNECTED`);
})();

const name = "harsh";

((name = "Hitesh")=>{
    // Unnamed IFFY;
    console.log(`DB CONNECTED two ${name}`);
})();




