document.getElementById('cardHead').innerHTML = `Learning JS`
// Splice 

// const aString = 'MY name is adnan'

// const toArray = aString.split(' ')

// console.log(toArray)


//Arrany or to string  

// const anArray =['name1','name2','name3']

// const toString = anArray.toString()

// console.log(toString);




// Number to string

// const aNumber = 20

// const toString = aNumber.toString()
// console.log(toString);




// Working with Numbers 



// const aNumber = 30.29

// // if we want to ignore decimals we use 
//  const decimalIgnore = parseInt()

//  console.log();




// const randomNumber = 40.300

// console.log(parseInt(randomNumber));



// const anyThing = 30.5
// // console.log(Math.round(anyThing));
// console.log(Math.sqrt(anyThing))


// toUperCase ChrAt ........... 

// const demoPara = 'Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book.'




// const finalCheck = demoPara.toUpperCase() -----------------changing to uper case 
// const finalCheck = demoPara.indexOf('Eos')---------------- Finding index of certain words
// const finalCheck = demoPara.charAt(10) ----------------- Finding words through index number

// const finalCheck = demoPara.split(' ')

// for(i = 0; i < finalCheck.length; i++)
// if(finalCheck[i] === 'is'){
// }
// console.log(finalCheck[i]);


// const finalCheck = demoPara.replace('day','gunx')
// const finalCheck= demoPara.includes('my demo')




// array and arryMethods


// const anArray = new Array('name1','name2','name3','name4','name5')
// const anArray = ['name1','name2','name3','name4','name5']   

// const finalCheck = anArray  
// const finalCheck = Array.isArray(anArray)
// const finalCheck = [anArray[3]]
// const finalCheck = anArray[4] = 'changed'
// const arrayPush = anArray.push('adnan')
// const arrayPush = anArray.shift()
// const arrayPush = anArray.pop()
// const arrayPush = anArray.unshift('local')
// const arrayPush = anArray.splice(2,4)
// const arrayPush = anArray.reverse()
// const finalCheck = anArray





// If else 

// const gettingData = prompt('enter any Number')

//         if(gettingData > 0 && gettingData <= 10){
//             alert('Number is greater then 0 and less then 10')
//             document.getElementById('workSpace').innerHTML = `and The actual number is ${}`
//         }else if (gettingData >= 10 || gettingData <= 20){
//             alert('Number is greater then 10 and less then 20')
//             document.getElementById('workSpace').innerHTML = `Number is greater then 10 and less then 20` 
//         }else if (gettingData >= 20 || gettingData <= 30){
//             document.getElementById('workSpace').innerHTML = `Number is greater then 20 and less then 30`
//             alert('Number is greater then 20 and less then 30') 
//         }


// const numberOne = parseInt(prompt('Entre a first number to add'))
// const numberTwo = parseInt(prompt('Enter secound number to add'))

// const addingNumbers = numberOne + numberTwo


// document.getElementById('workSpace').innerHTML = `${addingNumbers}`



// document.getElementById('workSpace').innerHTML = `${addingNumbers}`





        
        
// const gernalObj =[
//         {name : 'adnan',
//         location : ' hunza',
//         class : ' FED'   
//         },
//         {name : 'adnan2',
//         location : ' hunza2',
//         class : ' FED2'   
//         },
//         {name : 'adnan3',
//         location : ' hunza3',
//         class : ' FED3'   
//         },
//         {name : 'adnan4',
//         location : ' hunza4',
//         class : ' FED4'   
//         },

// ]

// const obj  = {
//     users: [
//         {name : 'adnan',
//         location : ' hunza',
//         class : ' FED'   
//         },
//         {name : 'adnan1',
//         location : ' hunza1',
//         class : ' FED1'   
//         }
//     ],
//     admin: [
//         {name : 'adnan',
//         location : ' hunza',
//         class : ' FED'   
//         }
//     ]
// }
    
// console.log(obj.users[1].location)
// // for (let i = 0; i < gernalObj.length; i++) {
    
// //  if(i==2){
// //      console.log(gernalObj[i])
// //  }
    
// // }


// for(let data of gernalObj){
//     console.log(data)
// }

// for(let i in gernalObj){
//     console.log(gernalObj[i])
// }


// FUNCTIONS 

// function calingYou(){
//     console.log('hi');
// }
// calingYou()



// const callingMe = function(){
//         return 'local'
// }
// console.log(callingMe());


// function myFunction(numbera, numberb){
//     return numbera + numberb
// }

// console.log(myFunction(20,40));