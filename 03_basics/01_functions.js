function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

function addTwoNumbers(number1, number2){
    return number1+number2;
}

const result = addTwoNumbers(3,7);
// console.log("Result :", result)

function loginUserMessage (Username = "Sameer"){
    if (!Username) {
        console.log("Please enter the username");
        return;
    }
    return `${Username} just logged in.`
}

// take in string variable;
const Message = loginUserMessage("Harsh");
// console.log(Message);

//Direct print using console.log()
// console.log(loginUserMessage()); // Same Output


function calculateCartPrice(val1 , val2,...num1){
    return num1;
}

// console.log(calculateCartPrice(200,100,10, 500, 300));

const user = {
    username : "hitesh",
    price : 199

}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} . `)
}

// handleObject(user); 

handleObject({
    username : "Sam",
    price : 450
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue (getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray)) 
console.log(returnSecondValue([200 , 400 , 100 , 600]))








