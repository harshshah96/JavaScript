// let myName = "Harsh     ";
// let channelName = "chai     ";

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.hitesh = function (){
    console.log(`Hitesh is present in all objects`);
}

// myHeros.hitesh();
// heroPower.hitesh();




// Inheritance

const User = {
    name : "chai",
    email: "chai@gmail.com"
}

const teacher = {
    makeVideo : true

}

const TeachingSupport = {
    isAvailable : false 
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport,

}


teacher.__proto__ = User;


// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength();
// "hitesh".trueLength();
"icetea".trueLength();