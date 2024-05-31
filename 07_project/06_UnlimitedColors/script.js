

const randomColor = function (){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;

};


let intervalId; // Variable to store interval ID

const StartChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(ChangeBgColor,500);
    }
    
    function ChangeBgColor(){

        document.body.style.backgroundColor = randomColor();
    } 
};

const stopChangingColor = function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
        document.body.style.backgroundColor = "#212121"; // restore to default color
    }
};

document.querySelector('#start').addEventListener('click', StartChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
