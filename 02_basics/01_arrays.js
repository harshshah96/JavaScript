// arrays

const myArr = [0,1,2,3,4,5]
// console.log(myArr)

// ++++++++++++++++++++ Array Methods ++++++++++++++++++++++

myArr.push(6)
// myArr.push(7)
// console.log(myArr)
myArr.pop()
// console.log(myArr)

myArr.unshift(9)
myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

const newArr = myArr.join();

// console.log(myArr)

// +++++++++++++++++++++++ splice slice +++++++++++++++++++++++++++

console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2)

 // +++++++++++++++++    NOTES    +++++++++++++++++++++

    // slice(a,b) will print from index a upto index b , excluding the element at b
    // slice(a,b) will not modify the array
    // splice(a,b) will print from index a to index b , including the element at b.
    // splice (a,b) will modify the original array, i.e will remove all element from a to b including a & b index elements.




