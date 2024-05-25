// singleton
// object.create
 
// if made with constructurs, Singleton banta hai
// agar literals se hoga to singleton nahi banta hai

// object literals

const mySym = Symbol("Key1");
const JsUser = {
    name : "Harsh",
    "full name":"Harsh Shah",
    age : 18,
    [mySym] : "myKey1",
    location : "Ahmedabad",
    email : "shahharsh.5603@google.com",
    isloggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}


// console.log(JsUser["full name"]);
// // console.log(JsUser["mySym"])
// console.log(JsUser[mySym])
// // console.log(typeof JsUser["mySym"])
// console.log(JsUser)
JsUser["email"] = "shahharsh987656@gmail.com";
// console.log(JsUser)
// Object.freeze(JsUser);
JsUser["email"] = "shahharsh987656@google.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS USER");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS USER, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





