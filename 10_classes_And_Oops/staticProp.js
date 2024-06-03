class User {
    constructor(username){
        this.username = username ;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static CreateId(){
        return '123';
    }
}

const hitesh = new User("Hitesh");
// console.log(hitesh.CreateId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email ;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe()