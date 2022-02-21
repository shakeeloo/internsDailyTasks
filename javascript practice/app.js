
                        // Commented till Objject Literals

//         // Fundamental of JS code
// // alert('Hi World')
// // document.write('Its a New Begining for the World')  //to show the executed coed in the browser
// console.clear()
// console.warn('There is something wrong there!')    // to show the code in the console portion
// console.log([1,2,3,4,5,6])
// console.log({age:20, name: 'husna', toMe: 'sister'})
// var say = 'What is this'
// console.log(say)
// console.table({age:20, name: 'husna', toMe: 'sister'})

// console.error('There is an error in the connection')
// console.time('Hi')
// console.log('Its a New Begining for the World');
// console.log('Its a New Begining for the World');
// console.log('Its a New Begining for the World');
// console.log('Its a New Begining for the World');
// console.log('Its a New Begining for the World');
// console.timeEnd('Hi')

//             // Var, Const and Let

//             //Conv: The name does not start with number
//             // can have numbers,letters,$ and _
// var naMe = 'Almas Javed'
// console.log(naMe)
//             // for var to have multiple names 
// var myName = 'almas javed'    // Camel Case and recommended
// var her_name = 'yusra javed'     // UnderScore, can be used
// var HerName = 'Asma Ul Husna'       // PascalCase

//             //DATA TYPES premitive

//           //STRING
// const doesWhat = 'M a student'
//         //NUMBERS
// const age = 21
//         // BOOLEAN
// const doesJob = false;
//         //NULL
// const kids = null;
//         //UNDEFINED     // if the variable is not assigned a value it will be refered to as undefined
// // const Me1;
//          // SYMBOL
// const smbl = Symbol();

// // document.write(typeof smbl)

//                 // REFERENCIAL DATA TYPES

//             // ARRAY
// const singleDig = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const interests = ['chess', 'Bdancing', 'playingGuitar'];
//             //Literal Objects
// const awa = {
//         country: 'Pakistan',
//         city: 'Islamabad'

// }
// const today = new Date();
// document.write(today)
// // document.write(awa);
// document.write(typeof obj)

                        // Commented till

        // let var and const

// var x = 2;
// var x = 4;                     //redeclaration is allowed with var so is reassigning, value is overrided
// x = 8;

// let x = 3;
// x = 6;                          //reassigning is allowed with let but redeclaration is not, the value is overrided
// let x = 9;

// const x = 15;
// x = 34;                            // neither reassiging nor redeclaration is allowed with const keyword
// const x =79;

// document.write(x);

                        // REVISING DATA TYPES

            // PREMITIVE DATATYPE: The type that deals with basic values

// var name, number1, khur, hayaKiagh;

// name = 'almas';
// number1 = 3;
// khur = true;
// khur = null;
// hayaKiagh;


// document.write(typeof(hayaKiagh))

        // REFERENCIAL DATATYPE: The tyoe that deals with the complex values like objects and ararys which store complex daata

// var fruit = ['apple', 'mango', 'orange', 'guava'];


// console.log(fruit[3]);

// var inst;

// inst = {
//         name:'uConnect',
//         you:'intern',
//         where:'gilgit',
// }
// let that;

// that = inst.name
// console.log(that);

                // ASSIGNMENT OPERATORS
// var val1, val2;

// val1 = 36;
// val2 = 6;

// val1 **= val2;
// val1 += val2;
// val1 -= val2;
// val1 *= val2;
// val1 /= val2;
// val1 %= val2;
// console.log(val1);

// val2++;
// val1--;

// console.log(val1)

                // .........CONSOLE PROPERTIES...........

// var fruit = ['apple', 'mango', 'orange', 'guava'];
// // console.time();                 to check how much time the statement took to execute(from here to timeEnd, statement must be in between)
// // console.log(fruit);                 to show the statement in console
// // console.table(fruit);               to show the data stored in the variable in a table in console
// // console.error(`There could be an error here`);           to show error in console
// // console.warn(`i tell you to leave this habbit consol`);      to show warning in console
// console.warn(`You tease me alot you Know!`);
// console.warn(`Everyday i wait till 1am, do you know that!`);
// console.timeEnd();

            // ..........switch statement.....................

// var n;

// n = prompt('Enter any number upto 6 which represent a week day');

// switch(n){
//     case 0: document.write(`Today is Monday`)
//     break;
//     case 1: document.write(`Today is Tuesday`)
//     break;
//     case 2: document.write(`Today is Wednesday`)
//     break;
//     case 3: document.write(`Today is Thursday`)             switch statement can be used as the substitute of else if statement
//     break;
//     case 4: document.write(`Today is Friday`)
//     break;
//     case 5: document.write(`Today is Saturday`)
//     break;
//     case 6: document.write(`Today is Sunday`)
//     break;
//     default: `Enter a valid Number!`
//     break;
// }

            // Ternary Operator

        // Ternary operator is basically used as a shorthand for if-else statement
// Syntax
        // (Condition)? TRUE : FALSE; ...... 
        // if he condition is true, 'TRUE' will run while if the condition is not true 'FALSE' will run

// let age = 21;

// (age>=18)? document.write('You are eligible') : document.write('Sorry! You are not eligible');

            // Another Way

// let per = 65;
// let b;

// b = (per>=70)? 'You fall in merit' : 'Sorry! You do not fall in merit';

// document.write(b);
//if the condition is true, the statement inside curly braces will beexecuted    
 // Otherwise the whole pprogarm will be terminated 


// let n, rem;

// n = 3;
// rem = n%2;

// if (rem = 1) {                          
//         console.log(`${n} is an odd number`)    
// }

                //IF ELSE STATEMENT
// if the condition is true, first statement will be executed, otherwise, the second will be executed   

// let per = 70;

// if (per>80) {
//         console.log(`You Merit made you eligible to apply for the post`)
// } else {
//         console.log(`SORRY! You didn't make it`) 
// }
//
//                 //ELSE IF STATEMENT
//Compiler checks the conditions, if the condition is falsecompiler will go for chechking for true condition
//As it gets the true value, execution will be terminated
//if none of the condition is true, else wala statment will definitely run 

                // **********Example**********

// /*let day = +prompt(`Enter a number from 0 upto 6`);                      

// if (day===0) {                                                          
//         console.log(`The number represents Monday`)
// }                                                                        
// else if (day===1) {
//         console.log(`The number represents Tuesday`)                                                 
// }
// else if (day===2) {
//         console.log(`The number represents Wednesday`)
// }
// else if (day===3) {
//         console.log(`The number represents Thursday`)
// }
// else if (day===4) {
//         console.log(`The number represents Friday`)
// }
// else if (day===5) {
//         console.log(`The number represents Saturday`) 
// }
// else if (da===6) {
//         console.log(`The number represents Sunday`)
// }else{
//         console.log(`Enter a Valid Number!`)
//   }


//                 LOGICAL OPERATORS

// Logical operators are usually used in statements like if statement,if else, else if and switch statement
// These are also widely used operators elsewhere in JS
// For the final result to be true for AND operator,
// both of the conditions must be true, i.e., AND operator looks for first falsy value

                        // *********AND Operator**********
// /*let n, minder;
// n = 30;

// if (n>=30 && n<=45) {                                        // 
//         console.log(`Has Barely Passed`)                     // 
// // }
//                         *********************
//                          *********OR Operator********** 
//For the final result to be true for OR operator
 //One of the condition must be true, i.e., OR operator looks for first truthy value

// n = 50;
                       
// /*if (n>=75 || n<=45) {
//         console.log(`Congrates You have Passed`)
// } else {                                                          
//        console.log(`You are not in the Range`)                   
                        // *******************                                      
//                         *******NOT Operator**********

//The Final result of NOT operator is the reverse of the obtained result
// i.e., it reverses the obtained boolean result

// n = +prompt(`Enter a number`)
// minder = n%2;

// if (minder !==0) {                                      
//         console.log(`${n} is an odd number`)            
// } else if(minder == 0) {
//         console.log(`${n} is an even number`)
// }else{
//         console.log(`Enter an Integer`)
// }










