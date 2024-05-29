const user = {
    username : "Harsh Shah",
    height: 5.5,

    welcomeMessage : function(){
        console.log(`${this.username}, You are Welcome!`);
        // console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "Hitesh Chaudhary";
// user.welcomeMessage();

// console.log(this);


// function chai (){
//     let username = "Hitesh";
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "Hitesh";
//     console.log(this.username);
// }
// chai();



//NOTES
// `this` keyword cannot be used in neither in direct funtions nor in variable functions.
//  Only Objects can use `this` Keyword


// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// // `this` keyword cannot be used in arrow functions too.


// ++++++++++++++++ ARROW  FUNCTIONS ++++++++++++++++++

const addTwo = (num1,num2) =>(num1 + num2);

console.log(addTwo(2,3));