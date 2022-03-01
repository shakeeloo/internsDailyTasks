// FUNCTION 



// function addingNumbers(number1,number2) {
        
//         if(Number(number1) && (number2)){
//             document.getElementById('textArea').innerHTML = number1 + number2
            
//         }else{
//             document.getElementById('textArea').innerHTML = 'Not a number'
            
//         }
// }


// const Num1 = parseInt(prompt('Write first Number')) 

// const Num2 = parseInt(prompt('Write Secound Number'))   

// addingNumbers(Num1,Num2)


// function addingNumbers() {
        
//     if(Number(Num1) && (Num2)){
//         document.getElementById('textArea').innerHTML = Num1 + Num2
        
//     }else{
//         document.getElementById('textArea').innerHTML = 'Not a number'
        
//     }
// }   
// const Num1 = parseInt(prompt('Write first Number')) 

// const Num2 = parseInt(prompt('Write Secound Number'))   



// addingNumbers(Num1,Num2)   


// Function Expression 


// const myFunction = function(num1,num2){
//           return num1 + num2   

// }

// const local = myFunction(30,30)

//             document.getElementById('textArea').innerHTML = `adition of num1 and num2  will be ${local}`
        


// iiFE

// (function(){
//     console.log('i am ady')
// })()


// (function(name,gender,location){
//     console.log((`Your name is ${name} and you are a ${gender} and your location is ${location}`))
// })('adnan','male','hunza')




// Loops 

const anArray = [
    {
        id: 0,
        name:'adnan',
        location: 'hunza'   
    },
    {
        id: 1,
        name:'adnan2',
        location: 'hunza2'   
    },
    {
        id: 2,
        name:'adnan2',
        location: 'hunza2'   
    },
    {
        id: 3,
        name:'adnan3',
        location: 'hunza3'   
    },
]

for (let i = 0; i < anArray.length; i++) {

        console.log(anArray[i].location);
    
}


