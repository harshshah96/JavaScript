const user = {
    username : "Harsh",
    loginCount : 10, 
    signedIN : true,
    getUserDetails : function (){
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIN ){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIN = isLoggedIN;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return 0;
}

const userOne = new User("Harsh Shah", 12, true);
const userTwo = new User("Chai Aur Code", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);