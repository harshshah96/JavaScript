// Dates


let  myDate = new Date()
// console.log(myDate.toString())   // Thu May 02 2024 08:12:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString())  // 2024-05-02T08:12:58.640Z
// console.log(myDate.toDateString()) // Thu May 02 2024
// console.log(myDate.toJSON())    // 2024-05-02T08:12:58.640Z
// console.log(myDate.toLocaleDateString()) // 5/2/2024
// console.log(myDate.toLocaleString())  // 5/2/2024, 8:12:58 AM
// console.log(typeof myDate) // 5/2/2024, 8:12:58 AM


let myCreatedDate = new Date (2024,0,23)
let myCreatedDatAndTime = new Date (2024,0,23,5,3,45)
let myCreatedDatAndTime1 = new Date ("02-05-2024")
console.log(myCreatedDatAndTime1.toLocaleString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())


// console.log(Math.floor(Date.now()/1000))

let newDate =  new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long",
    // timeZone: ''
})
