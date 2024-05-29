const userLoggedIN = true;
const debitCard = true ; 
const LoggedInfromGoogle = true;
const LoggedInfromEmail = false;


if(userLoggedIN && debitCard){
    console.log("Allow to buy course");
}

if(LoggedInfromEmail || LoggedInfromGoogle){
    console.log("User Logged IN");
}



