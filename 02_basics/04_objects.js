// const tinderUser = new Object()  // Singleton object
const tinderUser = {}  // Non-singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIN = false;


// console.log(tinderUser);

const regularUser = {
    email : "sammy123abc.com",
    fullname : {
        username : {
            firstName : "Harsh",
            lastname: "Shah"
        }
    }
}

// console.log(regularUser.fullname.username.firstName);


// Objects Combining
// const obj1 ={1:"a", 2:"b"};
// const obj2 = {3:"a", 4:"b"};
// const obj5 = {5:"a", 6:"b"};


// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

// const obj4 = Object.assign( obj1 , obj2, obj5);  // Object.assign(target, source-1,...,source-N);
// console.log(obj4);
// // console.log(obj1);

// const  obj4 = { ...obj1,...obj2,...obj3,...obj5}; 
// // here obj3 = obj1+obj2 .
// // Hence obj3 will overwrite obj1+obj3
// // hence will appear only once
// console.log(obj4);

const users = [
    {
        id:1,
        email : "h@gmail.com"
    },{
        id:2,
        email : "a@gmail.com"
    },{
        id:3,
        email : "b@gmail.com"
    },{
        id:4,
        email : "c@gmail.com"
    },{
        id:5,
        email : "e@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIN'));
