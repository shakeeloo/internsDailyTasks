// Variables var let and const


// var name = "Rasid Minhas";
// console.log(name);
//   // var will be reassign the value soo it is in secure variable in larg codes 
// name = "Alishar";
// console.log(name);


// let email;
//  email = "www.rashidminhas37@gmail.com";
// console.log(email);
// // let also reassign it value
// email = "www.rasidminhaswebuser37@gmail.com"; 
// console.log(email);


// const age = "30";
// console.log(age);
// //const will not not reassign it value soo that why const is called constant variable.
// // age = "40";
// // console.log(age);





//Type Conversion



// let val;

// number to string
// val = 5;                          // at that time typeof val is number 
// val = String(5);                    //string

//boolean in to string
// val  = true;                     //boolean
// val = String(true);              //string

// array object to string
// val = [name ="RashidMinhas", age = "20",gendar ="male"];            //object
// val = String([name ="RashidMinhas", age = "20",gendar ="male"]);   //string


//Date and time to string
// val = new Date();                           //object
// val = String(new Date());                 //string


// Another way to conversion 
//  val = (5).toString();
//  val = (false).toString();
//  val = (new Date()).toString();
//  val = ([1,2,3,4,5]).toString();


//Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);






//String Method $ concatenation



// const age = "20";
// const name = "RashidMinhas";
// const email = "www.rashidminhas37@gmil.com";

// let pro = name+age+email;

// console.log(pro);

// // concatenation

// pro = name+"   "+age+"   "+email;
// console.log(pro);

// sub additional info
// let nam;
//  const name ="rashid minhas";
// console.log(name);
// nam = name;
// nam = name.toUpperCase();
// console.log(nam);





// Template literals


// const name = "Rashid Minhas";
// const age = "20";
// const gendar = "male";
// const email = "www.rashidminhas37@gmail.com";

// let html;

// // here is

// html = `<ul>
//        <li>Name :${name}</li>
//        <li>Age :${age}</li>
//        <li>Gendar :${gendar}</li>
//        <li>Email :${email}</li>
//         </ul>`
// document.body.innerHTML = html;

//Anathor way for this program

// html= '<ul>'+
//        '<li> Name :' +name+'</li>'+
//        '<li> Age  :'+age +'</li>'+
//        '<li> Gendar :'+gendar+'</li>'+
//        '<li> Email :' +email+'</li>'+
//        '</ul>';
//        document.body.innerHTML = html;



// Array and Array Method

// const names = ["Rashid","Minhas","Sara","Malik"];
// console.log(names);


// Array Objects

// const mydata=[{firstname:"Rashid",lastname:"Minhas",age:"20",gendar:"male"},

//          ];

// console.log(mydata);






// Date and Time Method

// let val;
// const today = new Date();
// const birthday= new Date('november-9-2001 08:30:00');
// const event = new Date('12-13-1968')
// val = birthday+event;
// document.write(today);

// console.log(val);




//if statment and conparision operators


let  age = "20";

//equal to  (==)
// if(age == 20){
//     console.log(age);
// }else{
//     console.log('not equal to');
// };

//data type and equal too   (===)
// if(age === 20){
//     console.log(age);
// }else{
//     console.log('not equal to');
// };


//not qual to   (!=)
// if(age != 30){
//     console.log(age);
// }else{
//     console.log('not equal to');
// };


//data type and not equal to  (!==)
// if(age !== 20){
//     console.log(age);
// }else{
//     console.log('not equal to');
// };


//grater than (>)
// if(age > 13){
//     console.log(age);
// }else{
//     console.log('not equal to');
// };


// //less than (<)
// if(age < 23){
//     console.log(age);
// }else{
//     console.log('not equal to');
// };


//if - else if and else statment

// let marks = 900;

// if(marks == 400){
//  console.log('your are passed');
// }else if(marks == 500){
//     console.log('your gade is C');
// }else if(marks == 700){
//     console.log('your grade is B');
// }else if(marks == 800){
//     console.log('your grade is A');
// }else if(marks == 900){
//     console.log('your grade is A++');
// }else if(marks < 400){
//     console.log('your are been failed');
// }else{
//     console.log('Invalid marks');
// }



//Switches

// const color = "red";
//  switch(color){
//      case 'blue':
//          console.log('color is blue')
//          break;
//     case 'golden':
//         console.log('color is golden');
//         break;
//     case "yellow":
//         console.log('color is yellow')
//         break;
//     case 'red':
//         console.log('color is red');
//         break;
//     default:
//       console.log('color is not red');
//  }


// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "monday";
//         break;
//     case 2:
//        day = "tuesday";
//        break;
//     case 3:
//         day = "wednesday";
//         break;
//     case 4:
//         day = "thusday";
//         break;
//     case 5:
//         day = "friday";
//         break;
//     case 6:
//       day = "saturday";
//        break;
//        default:
//            day = "invalid day";
//            break;
// };console.log(day);






// funtion Deceleration Experesion and IIFE


// function Deceleration

// getname();         //agar ham function ko statment sa phala call karta han to is ko javascript ma hosting kaha jata ha 
// function getname(){
//     console.log('RashidMinhas');
//   };

// // Example 2:

//   function getage(){
//       console.log('20');
//   }getage();



// //Function Experesion
// let mydata = function(firstname,lastname, age){
//     console.log(firstname+" "+lastname+" "+age);
// }
// mydata("Rashid","Minhas","20");

// // IIFE function
// (function(){
//     console.log("Hello");
// })();

// // Example 2:

// (function(name ,age,email){
//     console.log(name+" "+age+" "+email);
// })("Rashid Minhas","20","www.rashidminhas37@gamil.com");





//General Loops

for(let i = 0; i < 10;i++){
    console.log(i);
    conso
}


 









