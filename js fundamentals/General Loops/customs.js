// FOR LOOP

// for(let x =0; x <= 10; x++){
//    if(x === 3){
//        console.log('3 is my lucky number')
//        continue;     //continue lagana sa is progrem ma 3 skip hojaya ge aur is ka jagha paa yaa program run hoge
  //  }
//    else if(x === 7){
//        console.log('Stop program from here')
//        break;  // break lagana sa program yahan sa aaga run nai hoge 7 number pa program break hoge
//    }
//    console.log('Number'+''+x);
// };

//  for loop on Array
// let cars = ["Marsadies","Honda","toyota","Buzurg gadi"];
// //  console.log(cars.length)

//  for(let i = 0; i < cars.length; i++){   // (intialize) (condition) (increment)
// //    if(i === 0){
// //        console.log('Marsadies is the best cars in the world')
//        console.log(cars[i])
//    }
//    console.log(cars[i])
//    else if(i===2)
//    {
 //        console.log(i)
//    }else{
 //        console.log("left over")
 //    }
 //    console.log(cars);
 //  }


// let arr = ["Rashid","Minhas","Malik","Sara","Jhon","Due"];
// console.log(arr);
// for( let i=0;1 < arr.length; i++){
//   if(i === 3){
//       console.log(arr[i])
//   }
// }


// While Loop
// let i = 0;
// while(i <= 10){
//    console.log('Number'+i);
//    i++;
// }

// // Example2 : 

// let a = 0;
// while(a <= 10){
//   console.log(a)
//   a++;
// }






// how Array object in Console 

// const mydata =[{name:"rashid",age:25},
//  {name:"waseem",age:28} ,
//  {name:"akaram",age:30} ];
// for(let i in mydata){
//   // console.log(`Name : ${mydata[i].name} age : ${mydata[i].age}`);
//   console.log(mydata[i].age+ " "+mydata[i].name);
// }



// const cars = [{name:"Honda", modal:"1980"}, 
// {name:"Marsadies", modal:"2022"},
// {name:"toyota", modal:"1660"}]

// for(let i in cars){   // in hamesha program ma index ko run karwata ha 
//   // console.log(cars[i].name+" "+cars[i].modal );
//   console.log(`Name : ${cars[i].name}   Model : ${cars[i].modal}`)
// }

// for(let i of cars){   // (of) hamesh pura object ko run karwata haa

// console.log(i.name +" "+i.modal);
 
// };


// Do while loop

// let i=0;
// do{                                     //do ma koi condtion nai lagti condition do loop ka bad while loop ma lagti ha 
//   console.log('Number'+ i);
//    i++;
// }
// while(i < 10);

// Example2:
// let i=100;
// do{                                     //condition agar wroung hoto bee condition ak bar run hoge
//   console.log('Number'+ i);
//    i++;
// }
// while(i < 10);


// use do while loop on Array

// let mydata =[
//   {firstname :"Rashid",lastname:"minhas",age:"20",email:"www.rashidminhas37@gmail.com"},
//   {firstname :"sara",lastname:"abdul",age:"18",email:"www.rashidminhas37@gmail.com"},
//   {firstname :"malik",lastname:"shah",age:"24",email:"www.rashidminhas37@gmail.com"},
//   {firstname :"jhon",lastname:"Due",age:"29",email:"www.rashidminhas37@gmail.com"}
// ];
// let i=0;
// do{
//   // console.log(mydata[i]);
//   console.log(`firstname:${mydata[i].firstname}/lastname:${mydata[i].lastname}/Age:${mydata[i].age}/Email:${mydata[i].email}`)
//   i++;
// }
//  while(i < mydata.length);


// if the conditon is wroung than

// let content =[
//   {firstname :"Rashid",lastname:"minhas",age:"20",email:"www.rashidminhas37@gmail.com"},
//   {firstname :"sara",lastname:"abdul",age:"18",email:"www.rashidminhas37@gmail.com"},
//   {firstname :"malik",lastname:"shah",age:"24",email:"www.rashidminhas37@gmail.com"},
//   {firstname :"jhon",lastname:"Due",age:"29",email:"www.rashidminhas37@gmail.com"}
// ];
// let i = 0;

// do{
//    console.log(`firstname:${content[i].firstname}/lastname:${content[i].lastname}/Age:${content[i].age}/Email:${content[i].email}`);
//    i++;
// }
// while(i > content.length);    // condition chayha wroung be hoo do loop ma condition ak bar run hote ha, "always remember that"

