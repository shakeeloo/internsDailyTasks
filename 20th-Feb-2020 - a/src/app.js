



// const { all } = require("micromatch");

// simple maths 

// const num1 = 200;
// const num2 = 400;

// const addingNumbers = num1 + num2

// console.log(addingNumbers)

//         // Math object 


// Array 

// const fruits = ['balth','fasho','bichil','egasum balt', 'ximoo balth','kahwalum balth']

// let val;
// val = fruits.length
// val = fruits
// val = fruits[3].toUpperCase()
// val = fruits.includes('h')
// // val = Array.isArray(fruits)
// val = fruits[2] = 'number 2'
// val = fruits.push('adnan')
// val = fruits.reverse()
// val = fruits.sort()


// let styles = ["Jazz", "Blues"];


// styles.push('Rock and Roll')
// styles[1] = 'Classic'
// styles.shift()
// styles.unshift('Rap', 'Regge')





// IF ELSE AND TERNARY OPERATOR 


//  const ady = prompt()

//  if(ady === 'hunzai'){
//      alert('welcome hunzokux')
//  }else if(ady != 'hunzai'){
//         alret('ne lay thu ako')
//  }

// const name = 'Adnan'
// const age = 16

// if ( age > 14 && age < 18 ){
//     alert(`${name} your are a teenager`)
// }else if (age > 18 ){
//     alert(`${name} your are an adult`)
// }


// let a = 12
// let num1 = ( a > 10) ? true :false;
 // console.log(num1)

 
//  const value1 = 10;
//  const value2 = 30;
//  const addingValues = ( value1 + value2)
//  const displayValues = addingValues < 40 ? 'Number is lest then 40' : 'number is greater then 40'

// console.log(displayValues)



// Switches 

// let myAge = 20
    
// switch (myAge) {
//     case (20):
//         alert('age 20')
//         break;

//     default:
//         break;
// }

// const weekDay = 5

// switch (weekDay) {
//     case 1:
//         alert('Monday')
//         break;
//     case 2:
//         alert('Tuesday')
//         break;
//     case 3:
//         alert('Wednesday')
//         break;
//     case 4:
//         alert('Thrusday')
//         break;
//     case 5:
//         alert('Friday')
//         break;
//     case 6:
//         alert('Saturday')
//         break;
//     case 7:
//         alert('Sunday')
//         break;

//     default:
//         alert('Error')
//         break;
// }



// FUNCTIONS 

// function random(){
//     alert('function has benn run')
// }
// random()


// const name1= prompt()
// function yourName(firstName,lastName){
//     return firstName 
// }
// console.log(yourName(name1) )


// function checkAge(age){
//     if(age >= 18){
//         return true
//     }else{
//         confirm('Are you sure to go through')
//     }
// }

// let age = prompt( "confrim age")

// if (checkAge()){
//     alert('acess granted')
// }else{
//     alert('acess denied')
// }


// const addMe = ( val1, val2) =>{
//     const Result = val1 / val2
//         return Result
// }
// const numbers = addMe(30, 30)

// console.log(numbers)

// Loops 

const random =['adnanOne','adnanTwo', 'adnanThree', 'adnanFor']

for (let i = 0; i < random.length; i++) {
    if(i == 2){
        console.log('adnanTwo');
        break;
    }
    
    console.log(i)
}