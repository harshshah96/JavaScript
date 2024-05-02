const name = "harshShah"
const repoCount = 50;

console.log(name + repoCount + "value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Harsh-Shah-01')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))

const newString= gameName.substring(-2,4) // will not accept negative values and convert it to 0 by default
console.log(newString)

const newString1= gameName.slice(-8,4)
console.log(newString1)

const newStringOne = " Hitesh "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://hite%20sh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url)

console.log(gameName.split('-'))