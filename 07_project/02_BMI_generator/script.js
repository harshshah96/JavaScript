const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);
// this usecase will give empty

//

form.addEventListener('submit',function(e){

    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);

    if(height === '' || height < 0 || isNaN(height)){
        results.innrHTML = `Please give a valid Height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innrHTML = `Please give a valid weight ${weight}`;
    }else{
        results.innerHTML = `<snap>${bmi}</span>`;
    }

    const under = document.querySelector('#underWeight');
    const normal = document.querySelector('#normalWeight');
    const over = document.querySelector('#overWeight');
    if(bmi<=18.6){
        
        under.style.color = "yellow";
        normal.style.color = "black";
        over.style.color = "black";

    }else if(bmi>18.6 && bmi<25){
       
        under.style.color = "black";
        normal.style.color = "green";
        over.style.color = "black";

    }else if(bmi>=25){
        
        under.style.color = "black";
        normal.style.color = "black";
        over.style.color = "red";

    }



});

