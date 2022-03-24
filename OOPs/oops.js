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

// // Todo constructor

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

// function Visited(firstPlace,secondPlace,thirdPlace,fourthPlace){
//     this.firstPlace = firstPlace;
//     this.secondPlace = secondPlace;
//     this.thirdPlace = thirdPlace;
//     this.fourthPlace = fourthPlace;
// }
// // getting the date when the journey started
// Visited.prototype.startedJourney = function(){
//     return new Date('3-14-2005')
//   }
  
//   // Manipulation in site name
//   Visited.prototype.changePlace = function(secondPlace){
//     this.secondPlace = secondPlace;
//   }
  
//   const first = new Visited('Portugal', 'Paris', 'Morocow','indulusia');
//   const second = new Visited('India', 'Singapore', 'Egypt','turkey');
  
//   console.log(second);
  
//   console.log(first.startedJourney());
  
//   console.log(second.startedJourney());
  
//   second.changePlace('Europe');
  
//   console.log(second.startedJourney());

            //Creating object using Object.create() method

//Method#1


// const way1 = {
//   loveDoing : function(){
//     return(`I Love going to ${this.like1} and ${this.like2} the most`)
//   },
//   other : 'Going to BshqarGol',
//   likeDoing : function(){
//     return(`I like doing ${this.like3} and ${this.like4} also`)
//   },
//   maryAfter : function(like1, like2){
//     this.like1 =like1;
//     this.like2 = like2
//   }
// }

// const hob = Object.create(way1);
// hob.like1 = 'Bashqargol';
// hob.like2 = 'hiking with Ghot';
// hob.like3 =  'travelling';
// hob.like4 = 'cycling';


//  console.log(hob.loveDoing())

//  console.log('<br>Mary After <br>')

//  hob.maryAfter('Nowhere','Stayin')

//  console.log(hob.loveDoing())

 //Method#2

//  const myHob = Object.create(way1, {
//    like1 : {value: 'Golaghmuli'},
//    like2 : {value: 'Enjoying the nature'}
//  })

//  console.log(myHob.loveDoing())




                    // Once again Starting from the very begining

// function SignIn(fullName,email,dob,password){
//   this.fullName = fullName,
//   this.email = email,
//   this.dob = dob,
//   this.password = password
// }

// const almas = new SignIn('Almas Javed','almashayatjaved@gmail.com',new Date('3-14-2000'),'maGhot')
// const khesraw = new SignIn('Khesraw Hayat', 'gurzain.5000@gmail.com', new Date('1-31-1993'),'maMass','male')


// SignIn.prototype.feild = 'Fun';

// console.log(almas)
// console.log(khesraw)
// console.log(khesraw.feild )

                                    // Prototype
  
//Protoypes can be used to add new methods and new property to the object

// function ToGo(place1,place2,place3,place4,place5){
//   this.place1 = place1,
//   this.place2 = place2,
//   this.place3 = place3,
//   this.place4 = place4,
//   this.place5 = place5
// }

// const ghot = new ToGo('Bashqargol','Hiking','Mountaneering','Qaqlasht','Boroghul')

// ToGo.prototype.getPlace = function(){
//   return `MaDur`
// }

// console.log(ghot.getPlace())

//               //Prototype can also be used for manipulation in Object Literal

// ToGo.prototype.afterWDNG = function(placeNew){
//   this.place1 = placeNew
// }

// ghot.afterWDNG('Golaghmuli')

// console.log(ghot)


              // Prototype Inheritance

// Prototype inheritance means the methods and properties of a certain object can be inherited by another object.

// let almas = {
//   likes : 'Learning New Things',
//   loves : 'Almonds',
//   somehow : 'slower in making new stuff entering the mind',
//   overcome : function(){
//     return `I can start eating more ${this.loves} to make my mind ready to ${this.likes}`
//   }
// }

// let usra = {
//   does : 'study all the time',
//   __proto__: almas
// }

// // usra.__proto__ = almas;  //Here usra is protptypically inheriting the poroperties of allmas,
// //object(getting).__proto__ = object(giving) outside the object or __proto__ as property and object(giving) inside the
// //object(giving), both of these methods are applicable to prototypically inherit the properties and method from other 
// //object

// console.log(usra.somehow)
// console.log(usra.overcome())


              //Prototype Chain 

  //Protptype Chain is the extented form of this whole thing

//   let almas = {
//   likes : 'Learning New Things',
//   loves : 'Almonds',
//   somehow : 'slower in making new stuff entering the mind',
//   overcome : function(){
//     return `I can start eating more ${this.loves} to make my mind ready to ${this.likes}`
//   }
// }

// let usra = {
//   does : 'studies all the time',
//   __proto__: almas
// }

// let husna = {
//   always : 'Stresses',
//   __proto__ :usra    , 
//   spentsTime : function(){
//       return `She ${does}`
//   }    
// }
//this will inherit what's inside 'usra' and 'almas', as usra has already inherited the properties
                          // and methods of almas

// console.log(husna.somehow)
// console.log(husna.does)
// console.log(husna.spentsTime())


                    //Creating an Object Using Object.create() method

// const person = Object.create({
//   firstName : {value : "Hasnain"},
//   lastName : {value : "Hussain"},
//   fatherName : {value : "Shaiq Hussain"},
//   age : {value : 3},
// })

// console.log(person)

                      //Classes with constructors
//Classes are basically there to create objects

            //Defining classes

// class Arthmatic{
//   constructor(x,y){
//     this.x = x,
//     this.y = y
//   }
//   get add(){            //the functions with get keywords are used to get the a certi
//     return this.sum();  //element inside the class
//   }
//   get mul(){
//     return this.pro();
//   }
//   sum(){
//     return (this.x + this.y);     // fucntions inside class can't be use without getter
    
//   }
//   pro(){
//     return (this.x*this.y);
//   }
// }

// const together = new Arthmatic(22,17)

// console.log("The sum of my age and usra age is " + together.add)
// console.log("While the product of our age is " + together.mul)

          //Another Example for this goes here

// class Gaderii{
//   constructor(hab1,hab2){
//     this.hab1 = hab1,
//     this.hab2 = hab2
//   }
//   //Getter
//   get khosh(){
//     return this.like()
//   }
//   get dish(){
//     return this.dislike()
//   }
//   //Methods
//   like(){
//     return `${this.hab1} is the habbit i don't like about Gaderiiiii!`
//   }
//   dislike(){
//     return `${this.hab2} is the habbit i love about Gaderiiiii!`
//   }

// }
// // console and calling part will always be from ouside the class otherwise error will be shown

// const tell = new Gaderii('Being Annoying','Maturity')

// console.log(tell.khosh)
// console.log(tell.dish)


                  // Sub Classes
//Sub Classes are known as the class which children to another class
// Classes are made children to another class using keyword extend

// class Papa{
//   constructor(daughter){
//     this.daughter = daughter;
//   }
//   says(){
//     return `I've got the cutest doll named ${this.daughter}`
//   }
// }

// class Me extends Papa {
//   constructor(daughter){
//     super(daughter);
//   }
//   says(){
//     return `My Papa is prooud that ${this.daughter} is his daughter`
//   }
// }

// let xur = new Me('Mass')

// console.log(xur.says())




//     const Almas = {
//       speaks(){
//         return `Almas speaks ${this.lang} language`
//       }
//     };

//     class Language{
//       constructor(lang){      //You can use classes with outside constructors
//         this.lang = lang;
//       }
//     }

//   Object.setPrototypeOf(Language.prototype, Almas)
//  let l = new Language('Khowar')
 
//  console.log(l.speaks())

// const Read = {
//   grade(){
//     return` I read in grade ${this.which}`
//   }
// }

// class Class{
//   constructor(which){
//     this.which = which
//   }
// }
// Object.setPrototypeOf(Class.prototype,Read)//Here we set Read constructor as a prototype of Class

//  const b = new Class('12')

//  console.log(b.grade())