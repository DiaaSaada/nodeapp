const readline = require('readline');


const r1  =  readline.createInterface({input :  process.stdin,  output : process.stdout});


let num1 = Math.floor( ( Math.random()*10  +1 ) )  ; 
let num2 = Math.floor( ( Math.random()*10  +1 ) )  ; 
let answer =  num1 +  num2 ; 

r1.question(`what is  ${num1} + ${num2} ? :\n`, (userInput) => {
    if(userInput.trim() == answer){
        console.log('Correct')
        r1.close();
    }else{
        console.log('NOT Correct')
    }
});

r1.on('close' , () => {
    console.log('Correct Answer') ;
})


