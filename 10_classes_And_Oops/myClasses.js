// class User {
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptyPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`

//     }
// }

// const chai = new User ("Chai", "chai@google.com","123");
// console.log(chai.encryptyPassword());
// console.log(chai.changeUsername());


// behind the scene


function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;

}

User.prototype.encryptyPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User ("tea", "tea@google.com","123");

console.log(tea.encryptyPassword());
console.log(tea.changeUsername());