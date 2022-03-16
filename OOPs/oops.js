//                         // Constructors
// constructors are object related properies which are used when certrain instances
// with different values are used in the program
// For Example: Signing Up to any website rewuires a code but it must be flexible to get
// different data of same type. Using constructors we dont need to repeate the same code 
// while dealing with objects, rather we use a single code for the entire data to Come
// using Constructors along with new keyword and this keyword
//It is cinvention to use upperCase while naming the constructor

// practicle

// function User(name, age, edu, dob){
//     this.name = name,
//     this.age = 22,
//     this.edu = edu,
//     this.dob = dob
// }

// const almas = new User('Almas',22, 'Web Development', new Date('3-14-2000') )

// document.write(`${almas.name} <br>`)
// document.write(`${almas.age} <br>`)
// document.write(`${almas.edu} <br>`)
// document.write(`${almas.dob}<br>`)

                //this key word

// let me = {
// name: "Almas",
// age: 40,
                  
// sayHello() {
// // "this" is the "current object"
// alert(` Hello ${this.name}`);               // if you don't mention this keyword here , you'll get nothing in output
// }
                  
// };
                  
// me.sayHello(); // Almas

//                         // Javascript Object Prototype

// // constructor function
// function Person (name) {
//     this.name = name,
//     this.age = 15
// }

// // creating objects
// let person_1 = new Person('Asma');
// let person_2 = new Person('Usra');

// // we can add new property to constructor function
// Person.prototype.relation = 'Sister';

// console.log(person_1.relation); 
// console.log(person_2.relation);   // the output for these codes will be 'male'              

// // Customer constructor

// function Todo(priority1, priority2) {
//     this.priority1 = priority1;
//     this.priority2 = priority2;
//   }
  

// function Routine(priority1, priority2, interest1, interest2) {
//     Todo.call(this, priority1, priority2);
  
//     this.interest1 = interest1;
//     this.interest2 = interest2;
//   }
  
//   // here we Inherit the Todo prototype methods
//   Routine.prototype = Object.create(Todo.prototype);
  
//   //  now we make routine.prototype return Routine()
//   Routine.prototype.constructor = Routine;
  
//   // Here we are creating a new routine using constructor
//   const rout1 = new Routine('studying', 'managing time', 'Skating', 'Cycling');
  
//   console.log(rout1);
  
//   // Showing Routine progress by making a new function
//   Routine.prototype.progress = function(){
//     return `Yeahooooo I am done with ${this.priority1}  and ${this.priority2} `;
//   }
  
//   console.log(rout1.progress());


            //Prototype not only adds new method or new property to the constructor but it
            // can manipulate the object also

function Visited(firstPlace,secondPlace,thirdPlace,fourthPlace){
    this.firstPlace = firstPlace;
    this.secondPlace = secondPlace;
    this.thirdPlace = thirdPlace;
    this.fourthPlace = fourthPlace;
}
// Get full name
Visited.prototype.startedJourney = function(){
    return new Date('3-14-2005')
  }
  
  // Gets Married
  Visited.prototype.changePlace = function(secondPlace){
    this.secondPlace = secondPlace;
  }
  
  const first = new Visited('Portugal', 'Paris', 'Morocow','indulusia');
  const second = new Visited('India', 'Singapore', 'Egypt','turkey');
  
  console.log(second);
  
  console.log(first.startedJourney());
  
  console.log(second.startedJourney());
  
  second.changePlace('Europe');
  
  console.log(second.startedJourney());