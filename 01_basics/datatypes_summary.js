// Primitive

// 7 types :  String, Number, Boolean , null, undefined, Symbol , BigInt

// Reference (Non Primitive)

// Array, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null


const id = Symbol('123')
const anotherId=  Symbol('123')

// console.log( id === anotherId)

// const bigNumber = 34567898765432n

// Refrerence (Non-Primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "Doga"];

let myObj = {
    name: "Harsh", 
    age : 22,    
}

 const myFunction = function (){
    console.log("Hello world");

 }
 console.log(typeof heros)


//  +++++++++++++++++++++++++++++++++++

// Stack(primitive), heap (non-primitive)

let name = "harshShah"
const repoCount = 50;

console.log(name + repoCount + "value" );

console.log('Hello my name is ${name} and my repo count is ${repoCount}')

const gameName = new String('HarshShah')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName)




