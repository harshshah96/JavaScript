class User {
    constructor(username ){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email, password){
        super(username);            // IMP

        this.email=email;
        this.password=password;
    }

    addCourse (){
        console.log(`ADDING COURSE FOR ${this.username.toUpperCase()}`);
    }
}

const chai = new Teacher("chai", "chai@meta.com", "123@");
chai.addCourse();
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof User)

