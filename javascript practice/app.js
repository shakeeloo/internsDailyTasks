
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

                // .............funtion inside an Object........

//When an function is used inside an object that is called method. we can get that by 'objectName.propertyName()'
// Next topc will be about what exactly the function is, and the relevent topics/

// let me, awa;
// me = {
//         name : 'Almas Javed',
//         says : function (){
//                 return "Hello";
//         }
// }
// // awa = me.name;
// console.log(`${me.name} says ${me.says()}`)

                // .............Function(declaration and expression)............

//Function is used when same line of code has to be repeated. To avoid code redundancy, funtion is used
//Function can be either function declaration or function expression.The difference is that function expression 
//works only if it is defined, While Function decalartion does not need definition, both need to be called for use. Function declaration goes first in the example.

// function myName() {
//         document.write(`My name is Almas Javed, and i am genius :) <br>`)
// }
// myName();
// myName();
// myName();

// var dadyName = function(){
//         document.write(`My Dady's name is Javed Hayat, and he's genius too :)<br>`)
// }
// dadyName();
// dadyName();
// dadyName();
// dadyName();

// If we need a specific line of code to be repeated but with different values, we use the concept of parameter and arguement for that
//parameters are the variable to which arguments are provided or the default values.


// function sisters(Fsister = 'Asma', Ssister = 'Yusra') {
//         document.write(`${Fsister} and ${Ssister} are my Sisters Yoooo`)
// }                                                                              //if we do not pass any argument, the default values will be run
// sisters('Fariha','Shagufa');


// The most useful way of using functions is to use it with return values, which return you the value which u use whatever you wants to use that for

// var a,b;

// function sum(a=8,b=9) {
//         return a + b;
// }

// document.write(sum())


//              ..............METHODS OF PRIMITIVE DATA TYPE............
// Methods are usually refered as to be for referencial data types. But Primitive data type also got some 
// methods for having different features. There are few bulit-in functions which perform specific task e.g., new Date(), error(), time()and timeEnd() etc.
//below are Methods of string, Numbers and arrayss.

                        // *******String Methods*******

// var str1, str2, str3, str4, sTring1, sTring2;
// str1 = 'I am';
// str2 = 'Lucky'; 
// str3 =  'How';
// str4 = 'It\'s not exactly what it looks like'           //to disable the function of \' here we use back-slash wich we used in the comment also.

// sTring1 = str3.concat(` ${str2}`)
// sTring2 = sTring1.concat(` ${str1}`)
// document.write(sTring2)

// document.write(str2.charAt('3'))
// document.write(str3.indexOf('w'))
// document.write(str4.substring(0,16))                 //substring and slice are simmilar with the only difference that
// document.write(str4.slice(-12,-2))                   // substring doen't accept negative values and slice does,and shows the characters form reverse
//document.write(str4.split(' '))                         // split shows the words in the string in array form
//document.write(str4.replace('exactly', 'actually'))       //it replaces the specific word


                        // ............Arryas and Array methods...........
// Array basically a container which stores series of Data, for example fruit names, numbers etc
//Array has got method, using them we can do manipulation in array.
                        // ********** Array Declaration**********

// var fruits = ['Banana','Guava','Mango','Palmgranet','Strawberry'];      //simply using brackcets
// var nmbrs = new Array(34,56,2,45,90,4)                                  //using the object
                        // ********* Array Methods*********
// var x;
//x = fruits.length;                                                      //tells how many values the array has got
//x = Array.isArray(nmbrs);
//x = Array.isArray(banana) ;                                              //tells if the value in the paranthesis is arrar or not
// x = nmbrs[5];                                                              //prints the value in the given index
// x = fruits.indexOf('Palmgranet')                                           //shows the index of the value
//docuemnt.write(x)

// fruits[1] = 'Harmit';                                                      //replaced the value in index[1] with hermit                                                                          

// x = fruits.sort()                                               //sort them alphabetically,capitalized come first
// fruits.push('almond')                                           //add this value at the end
// fruits.unshift('Pear')                                          //add this value at front
// fruits.pop();                                                   //Removes end wala value
// fruits.shift();                                                 //Removes front wala value;
// fruits.reverse();                                               //Shows the whole array putting them in reverse
// document.write(x)


                        // ...........LOOPS............

// To deal with the codes that involve itrations with icremented or decremented values, we use Loops
// Loop has three parts 
                                        // initialization          (of the variable that stores the value to be decremnted or incremented)
                                           // |
                                           // |
                                   //    (Conditions) -----------if false, the execution terminates there
                                           // |
                                           // |
                                // if true,   (increment/decrement)    the condtions will be checked again and itration will continue until the condition is false

                                // ********WHILE LOOP*******
//variable is initialized, condition is set and line of statement is written, the value is incremented or decremented
// then the condition is checked, if true the line of statement is run again, if not loop is terminated                             
// var a;
// a = 1
// while (a<10) {
//         document.write(`${a} Print whatever appears<br>`)
//         a++;
// }

// a = 20;
// while (a>=5) {
//         document.write(`The line of the statement is getting decremented now from ${a}<br>`)
//         a--;
// }

                                // ********* Do While Loop********

// in DoWhile loop, the block of statement runs once regardless of  the condition, 
// for the second run it goes for checking the condition,if the condition is true, the value is incemented
// or decremented according to the requirement and run again. 

// var tro;
// tro = 4;

// do {
//         document.write(`My Goal for each day i wake up is, to stay positive till i go back to bed<br><br>`)
//         tro--;                             //this will run five times
// } while (tro>=0);

                                // ********** For Loop*********
                
// In for loop, initialization, condition and icrement/decrement wale options come in the same line.
//According to everyone i listened to, This loop is the mostly used loop by developers,
//Below is the application of the loop.

// for (let pt= 1; pt <= 7; pt++) {
        
//         document.write(`The point icreased to ${pt}<br>`)
// }

                                // ********Continue********
//If we want ot print something other than the sequence wala code and we don want the same code to run which
//normally DOMParser, we use continue for that. Break is used when we desire to terminate the loop before the condition is 
// Fulfilled. Example is below


// document.write(`Below, I write what make me humane<br>`)
// for (let nmb = 1; nmb <=7; nmb++) {
//         if (nmb===1) {
//                 document.write(`${nmb}.  Empathy<br>`);
//                 continue;
//         } else if(nmb===2) {
//                 document.write(`${nmb}.  Empathy<br>`);
//                 continue;
//         }else if(nmb===3) {
//                 document.write(`${nmb}.  Empathy<br>`);
//                 continue;
//         }else if(nmb===4) {
//                 document.write(`${nmb}.  Empathy<br>`);
//                 continue;
//         }else if(nmb===5) {
//                 document.write(`${nmb}.  Empathy<br>`);
//                 continue;
//         }else if(nmb===6) {
//                 document.write(`${nmb}.  Stop here, Go further... ;(<br>`);
//                 break;
//         }else if(nmb===7) {
//                 document.write(`${nmb}.  Empathy<br>`);
//         }else {
//                 document.write(`${nmb}.  Empathy<br>`);
//         }
        
// }


// const mydata = [{name:"akbar",age : 30, education:"BSCS"},
// {name :"almas", age : 20, education:"mcs"},
// {name:"kashif",age: 23, education:"BCOM"},
// {name: 'Fariha', age: 19, education:'FSc'}
// ];
// console.log(mydata[0].name);

// for(let i of mydata){                   //i represents each object in the Array, using this syntax with of
//     console.log(i);                     //gets the entire object.
// }

//for(let i of mydata){                   //i represents each object in the Array, using this syntax with of
//    console.log(i.education);           // and by using the property name we can get that specific property.
//}

// for(let i in mydata){                       //i represents each object in the Array, using this syntax with in
//         console.log(i);                     //gets the the indeces only
//     }