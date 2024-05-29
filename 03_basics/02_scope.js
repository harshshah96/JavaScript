    // global scope
    let a = 40
    var c = 30
    
    if(true){
        // block scope
        let a = 10
        // console.log("INNER",a);
        const b = 20
    }
    
    // console.log("OUTER",a);
    // console.log(b);
    // console.log(c);

    // (1)
    console.log(addTwo(-5))
    function addTwo(num){
        return num+2;
    }// no error
    
    // // (2)
    // console.log(addTwo(5));
    // const addTwo =function (num){
    //     return num+2;
    // } // gives error

    // ++++++++++++++ NOTES ++++++++++
    // You can access function before inititalization. (1)
    // You cannot access variable that has function, before initialization.(2)


    
    

