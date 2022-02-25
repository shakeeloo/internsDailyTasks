
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


// document.write(`Below, I write what makes me humane<br>`)
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
//                 document.write(`${nmb}.  Stop here, Go no further... ;(<br>`);
//                 break;
//         }else if(nmb===7) {
//                 document.write(`${nmb}.  Empathy<br>`);
//         }else {
//                 document.write(`${nmb}.  Empathy<br>`);
//         }
        
// }

                        // ******** Using objects inside array and using them inside loops********

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

                        //.......Interaction: Alert, Prompt and Confirm..........

// These are the built in object helps user interaction. User interacts with the ______ via these built in functions
                        // **********Prompt**********
// Via prompt, user is asked to add some Input. if the user writes any value, the result is entered
// if the user presses cancel, the result is taken as null, while if the user presses ok without writing any value 
// the result is taken as undefined

// var val = prompt(`Enter any value`)

// if (typeof(val) == typeof(5)) {
//         console.log(`This one is number`)
// }else if (typeof(val) == typeof('Me String')) {
//         console.log(`This is surely a string`)
// } else {
//         console.log(`Enter any string or a number`)
// }

                        // ********** Alert***********
//Alert Prints a message in the mini window that pops up at the top of the browser.The pop up disapears as ok
// button is pressed

// var age = 45;

// if (age>20 && age<35) {
//         alert(`You are eligible for this post`)
// } else {
//         alert(`SORRY! You are not eligible for this post`)
// }

                        // ******** Confirm**********
// Confirm show a pop up at the top of the brower to ask a question of do a confirmation
// to the wuestion if the answer is right, ok button is pressed otherwise cancell is pressed

// var umr = 34;

// confirm(`Are you ${umr} years old`);



                

                        // .............REVISION STARTS HERE.............
//  Concepts related to console

// console.log(`Hello`);
// console.log(12345);
// console.log(true);
// var meetMe = 'Hi! How you doing?'
// console.log(meetMe)
// console.warn(`Beware! I am detective`)
// console.time(`Hi`)
// console.error(`Its your fault, all yours`)
// console.error(`Its your fault, all yours`)
// console.error(`Its your fault, all yours`)
// console.error(`Its your fault, all yours`)
// console.error(`Its your fault, all yours`)
// console.timeEnd(`Hi`)
// console.table({name: 'Almas', surname: 'Javed', age: 21, })
// console.clear()

//Concepts related to Var, Let and Const

// var greetings;                          //You can declare it without initializing
// greetings = 'Hey Hello';
// greetings = 'How u'                     // by var, Variables can be reassigned
// var greetings = 'Are you feeling well?'         //var can also be redeclared
// console.log(greetings)

// let nmbr;                                       //You can declare let without initializing it at first place
// nmbr = 39;

// nmbr = 89;                                      // let can be reassinged
// let nmbr = 34;                                  //With let the variable can't be redeclared
// console.log(nmbr)    

// const me;                                         //Const can not be only declared, it needs to be initialized
// me = 'almas';

// const me = 'My name is Almas';
// me = 'My surname is Javed';                         // with const keyword, a variable can't be reassigned
// const me = 'My full name is Almas Javed'            //nor can it be redeclared
// console.log(me)

// but if we use const for array or object, we can change any value inside them without changing the whole.

// const person = {
//         english : 35,
//         maths : 45,
//         computerSc : 56
// }
// person.english = 89;
// person.computerSc = 78;
// console.log(person)

// const series = ['English', 'Mathimatics', 'CompSc', 'Urdu']
// series[0] = 'PakStudies';
// series[3] = 'Coding';
// console.log(series)


// Concepts Related to DataTypes

// Premitive DataTypes

// integers
// let nmbr = 23;

// // strings
// let str = 'i am Luckiest';

// //boolean
// let bool = false;

// //null
// let nl = null                                   // in javascript null is always shown as obect

// //undefined
// let name;                              //not assigning any value to the variable showsits datatype as undeined

// //symbols
// const sym = Symbol()
// console.log(typeof(sym)

//Referencial DataType

//Array
// const interests = ['Coding', 'Skating', 'Cycling','Being Busy'];

// //Objects
// const me = {
//         love1: 'Skating',
//         love2: 'Stretching',
//         love3: 'Being Busy in something Productive'
// }

// //functions
// let date = new Date();
// console.log(date)
// console.log(typeof(date))

// Concepts Related to typeConversion

// let val1 = 56;
// let val2 = 9;

// let val3 = val2.toString();
// let bool = (true).toString();

// let any = {
//         brand: 'Nike',
//         nmbr: 37,
//         year: 2017
// }

// console.log(typeof(val1+val3))
// console.log(any)
// console.log(typeof(any))
// console.log(typeof(any.toString()))

// let aye = new Date();

// console.log(aye)
// console.log(typeof(aye))
// console.log(aye.toString())
// console.log(typeof(aye.toString()))

// var greetings = 'Hello';

// console.log(greetings)
// console.log(Number(greetings))

// var z = Number('6.90')
// console.log(z)
// console.log(typeof(z))
// console.log(z.toFixed())


// var value = 50;

// console.log(Math.sqrt(value))
// console.log(Math.abs(-7))
// console.log(Math.pow(2, 3))
// console.log(Math.min(23,34,17,20,4,67))
// console.log(Math.max(23,34,17,20,4,67))
// console.log(Math.ceil(2.1))
// console.log(Math.round(6.6))
// console.log(Math.floor(2.8))
// console.log(Math.PI) 
// console.log(Math.E)
// console.log(Math.floor(Math.random()*20 + 1))                         //if you want it to be greater then 1 and less than 20 
//                                                 //Then multipy it with 20 and add 1 to it 

// Concepts Related to String methods

 // // concatination
// var pehlaName = 'asma ';
// var muxaName = 'Ul';
// var akherName = 'HUSNA';
// var ray = 'i am more than happy today'

// name = pehlaName + ' ' + muxaName + ' ' + akherName;
// //Append

// pehlaName +=  muxaName + ' ' + akherName;
// console.log(pehlaName);
// //Escap

// var sen = 'it\'s very exciting let\'s wait for it'            //to disable the strength of single qoute here we use backslash before single qoutes
// sen = "it's very exciting let's wait for it"                 // another way is to use double qoutes

// let main = muxaName.concat(` ${akherName}`)
// console.log(pehlaName.concat(`${main}`))

// console.log(pehlaName.indexOf('s'))
// console.log(pehlaName.lastIndexOf('a'))
// console.log(pehlaName.toUpperCase());
// console.log(akherName.toLowerCase());
// console.log(muxaName.charAt(0));
// console.log(pehlaName.substring(0,3))                     //will show letters upto 3rd index nut not 3rd index
// console.log(pehlaName.slice(-4))                //the difference between slice and substring is that slice doen't accept negatove values
// console.log(pehlaName.slice(0,3))
// console.log(ray.split(' '))
// console.log(ray.replace('happy', 'excited'))

//concepts related to array Methods

let fruits, nmbr, intrests, subjects, saman;

// fruits = ['Apple', 'Orange', 'Guava', 'Pear', 'Mango'];
// nmbr = [45,23,26,13,1,35,56,9,0];
// intrests = ['observing', 'writting', 'sports', 'physical fitness']

//Array Methods find and filter
subjects = [
        {id : 1, name : 'Maths', marks : 89},
        {id : 2, name : 'English', marks : 58},
        {id : 3, name : 'computer Sciences', marks : 90},
        {id : 4, name : 'urdu', marks : 67},
        {id : 5, name : 'G-Studies', marks : 78},
]
// let val = subjects.find((item)=>item.id === 1)          //Array find Method
// val = subjects.filter((item)=>item.id <== 4)            //Array filter Method

// console.log(val)

//forEah Method
// forEach method executes the fucntion for each item individally.
subjects.forEach((item)=>{
        // console.log(`i love ${item.name} subject`)
        console.log(`i got ${item.marks} in ${item.name}`)
})


//map method of array

 saman = ['grocery', 'toys', 'stationay']
val = saman.map((item)=>item.length)

alert(val);

val = subjects.map((item)=>item.name.length)

alert(val)


// // inserting somwthing to array
// fruits[3] = 'Banana';

// console.log(fruits)


// //Finding out if is array
// let val = Array.isArray(nmbr);

// //Finding out the value
// val = fruits[4];

// //Finding the indexOF
// val = intrests.indexOf('sports')

// console.log(val)
// //Add at the end
// intrests.push('Skating')

// //Addong at front
// intrests.unshift('Stretching')

// //Removing from end
// intrests.pop();

// //Removing from front
// intrests.shift();

// console.log(intrests)

// //splice
// // nmbr.splice(1,5)                //wil delete values fro index 1 to 4 leaving 5.
// // nmbr.splice(0,2)
// nmbr.splice(-3)                        //will delete last three

// console.log(nmbr)

// //Replacing
// fruits.reverse();

// console.log(fruits)

// //Concating 
// val = nmbr.concat(fruits)

// //sorting the array
// val = intrests.sort();                          //its sorrted the array in alphabetical order.
// val = nmbr.sort();                              // it sorts according to the first digit

// console.log(val)

// Concepts related to Date object

// let date = new Date();
// let birthday = new Date('March 14 2000')                      //These are how you can mentions the date
// birthday = new Date('3/14/2000 11:23:34')
// birthday = new Date('3-14-2000 12:34:56')

// let show = date.getFullYear();
// show = date.getDay();                   //it shows days in index form which start from sunday as zero, thus 
//                                         //5 as friday
// show = date.getDate();                   //Shows date
// show = date.getMonth();                 //shows month in index form where 2 means Feburary
// show = date.getHours();                  //Shows the exact hour
// show = date.getMinutes();       
// show = date.getSeconds();               //it changes with each refresh as the second keeps on changing
// show = date.getTime();
// show = date.getMilliseconds()                 //it also keeps on changing with each refresh              

// console.log(date);
// console.log(show);
// console.log(birthday)


// Concepts Related to Object Literals

// const khoshRoy = {
//         kainat : 'Nanik',
//         dunya : 'Mam',
//         khosh : 'Ghot',
//         ONE : 'Self',
//         age : 21,
//         // getBirthyear: function(){
//         //         return 2000
//         // }
//         getBirthyear: function(){
//              return 2022 - this.age;
//          }

// }
// khoshRoy.ONE = "ME"                             //this is how you change the value of a property
// let ye = khoshRoy['dunya']                      //this is the other way of getting a specific property
//     ye = khoshRoy.getBirthyear()        

// console.log(khoshRoy)
//  console.log(khoshRoy.khosh)
//  console.log(ye)


// Concepts Related to if Statements

// If Statement
// let marks = +prompt(`Enter your intermediate marks to confirm your position.`)

// if (marks >= 65 && marks <= 100) {
//         document.write(`You are in`)
// }


// // If else Statement
// let marks = +prompt(`Enter your intermediate marks to confirm your position.`)

// if (marks >= 65 && marks <= 100) {
//         document.write(`You are in`)
// }else{
//         document.write(`SORRY! You are off`)
// }


// else if statement

// let grade = +prompt(`Enter your grade`)

// if (grade >=90 && grade <=100) {
//         console.log(`Bravo! You are Brilliant`)
// } else if(grade >=80 && grade <=89) {
//         console.log(`Excellent`)
// } else if(grade >=70 && grade <=79) {
//         console.log(`You are in Merit`)
// } else if(grade >=60 && grade <=69) {
//         console.log(`You are in, but work harder`)
// } else if(grade >=50 && grade <=59) {
//         console.log(`You will be Considered`)
// } else if(grade >=40 && grade <=49) {
//         console.log(`Apply next time with improved grades`)
// }else{
//         console.log(`SORRY! You are off`)
// }


// Switch Statement
// let day = +prompt(`Enter a numbe upto 6`)

// switch (day) {
//         case 0: 
//                alert(`Today is Sunday`) 
//         break;
//         case 1: 
//                 alert(`Today is Monday`) 
//         break;
//         case 2: 
//                 alert(`Today is Tuesday`) 
//         break;
//         case 3: 
//                 alert(`Today is Wednesday`) 
//         break;
//         case 4: 
//                 alert(`Today is Thursday`) 
//         break;
//         case 5: 
//                 alert(`Today is Friday`) 
//         break;
//         case 6: 
//                 alert(`Today is Saturday`) 
//         break;
//         default:
//                 alert(`Enter a Valid Number`)
//         break;
// }


// Concepts related to Function

// Function Declaration

// function saying() {
//         document.write(`I say "Hello"`)
// }

// saying();

                                                // ......OR......
// function saying() {
//         return 'I say "Hello"'
// }                                               
// let valGoes = saying();
// document.write(valGoes)

                                                //......OR........
// var a, b, c;
// function sumIt(a = 34, b = 23) {
//         return a + b;
// }
// c = sumIt(89, 90);                      //if you don't pass any value it will take the default values

// document.write(`The sum of a and b is ${c}`)


// Function Expression 
// var greeting = function () {
//         return "Nice to meetcha"
// }                                          //First declared the variable, then it is initialized by assigning function to it as a value
// let write = greeting();

// document.write(write)

// (
//         function(){
//                 console.log("welome............") 
//         }
//         ()
// )
 

// Concepts related to Arrow function
// Arrow Function is a concise form of arrow function, syntax is below
// you don't need to  wite function keyword, fucntion name and put the braces, just use arrow sign instead of return

// let pro = (a, b)=>a * b;

// console.log(pro(4, 6))

// Concepts related to foreach method of array

// let names = ["sara","ali","irfan"]

// names.forEach((item)=>{
//         console.log(`This is ${item}`)
// })

// let hobbies = ["Coding", "Running", "Sleeping", "Waking up"]

// hobbies.forEach((see)=>{
//         console.log(`I Love ${see}`) 
//         }
// )


// concepts Related to CallBack Fucntion
//CallBack function is the fucntion that is passed to another function as an argument.
// let a, b;
// let here = (a = 3, b = 5)=> (b + a);

// let sum, dig, pig;
// let now = function (dig, pig){
//       sum = dig * pig;
//       return `${pro} is the value you get after calculation`;  
// }

// console.log(3,here())






















// array helper methods
// Map,forEach,filter,reduce,sort()



 




































































