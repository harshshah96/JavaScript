const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
let intervalId; // Variable to store interval ID



btn.addEventListener('click',function(){

    const randomNumber = randomColor();
    console.log(randomNumber)
    color.innerHTML = randomColor();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = colors[randomNumber];

})

const randomColor = function (){
    // const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;

};

let flag = false

const StartChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(ChangeBgColor,250);
    }
    
    function ChangeBgColor(){

        document.body.style.backgroundColor = randomColor();
        color.textContent = randomColor();
    } 
    flag = true;
    console.log(flag);
};

const stopChangingColor = function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
        document.body.style.backgroundColor = "hsl(210, 36%, 96%)"; // restore to default color
        color.textContent = "F7F5F2";
    }
    flag = false;
    console.log(flag);
};

function change(){
    if(flag === false) StartChangingColor();
    else stopChangingColor();
}



document.querySelector('#btn').addEventListener('click', change);
// document.querySelector('#btn').addEventListener('click', change);
