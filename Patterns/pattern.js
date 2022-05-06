                    //Javascript Patterns

//a/c Brad traversy, patterns are re-usable methods used for the solution of js code
// Let's see if that's truee

                            // Catagories
//                       =>Module Patterns
//                       =>Rvealing Module Patterns
//                       =>Singleton Patterns
//                       =>Factory Patterns
//                       =>Observer Patterns
//                       =>Mediator Patterns
//                       => State Patterns

                    // Basic Structure of Pattern

// (function(){
//     //The variables and funcitons we declare here are private
//                                                                     //This is imidiatly envoking funciton expression
//     return {                                                        // with anonymous function
//         //While the variables and functions we declare here are public
//     }
// })();       


                    //Module Pattern

// const Modulee = (function(){

//     let intro = 'Hi! I am Pretty Almas';
//     const writeName = function(){
//         return console.log(intro)
//     }

//     return{ 
//          getName:writeName()
//         }
//     })();  
//     console.log(Modulee.getName)

//     // Example#2
//     var Genie = (function(){
//         var onWake = function (){
//             return 'Who dares to disturb my slumber?';
//         };
     
//         return{
//             Wake: onWake()
//         }
//     })();
//     console.log(Genie.Wake);



                                //Revealing Module

// const FavFruits = (function(){
//         let fruits = [];

//        function plus(item){
//             fruits.push(item);
//             console.log(`Your Fruit Added...... `)
//             console.log(fruits)
//         }
//         function get(id){
//             return fruits.find(item =>{
//                 return item.id;
//             })
//         }
//         return {
//             plus: plus,
//             get: get,
//         }
// })();

// FavFruits.plus({fav1: 1, name: 'Guava'})
//     FavFruits.plus({fav1: 2, name: 'Mango'})
//     // FavFruits.plus({fav1: 3, name: 'Apple'})

//     console.log(FavFruits.get(2))

                            //Singletn Pattern

// These patterns are basically creational patterns
//they create single objects


                        //Factory Patterns 
//These Patterns are used to create bunch of objects
//for Example we use this pattern while instantiatong objects for Sign Ups

// function SignUp() {
//     this.newMember = function(name, dep,email) {
//       let member;
  
//       if(dep === 'Front End Development') {
//         member = new WebSignUp(name,dep,email);
//       } else if (dep === 'Back End Development') {
//         member = new BackEndSignUp(name,dep,email);
//       } else if (dep === 'Digital Marketing') {
//         member = new DigitalSignUp(name,dep,email);
//       }
  
//       member.define =  function() {
//         console.log(`${this.name} signs up for ${this.dep} with adress ${this.email} and the cost for the program is ${this.fee}`);
//       }
  
//       return member;
//     }
//   }
  
//   const WebSignUp = function(name,dep,email) {
//     this.name = name;
//     this.dep = dep;
//     this.email = email;
//     this.fee = '$100';
// }
  
//   const BackEndSignUp = function(name,dep,email) {
//     this.name = name;
//     this.dep = dep;
//     this.email = email;
//     this.fee = '$95';
// }
  
//   const DigitalSignUp = function(name,dep,email) {
//     this.name = name;
//     this.dep = dep;
//     this.email = email;
//     this.fee = '$105';  
// }
  
//   const members = [];
//   const user = new SignUp();
  
//   members.push(user.newMember('Almas','Front End Development','almashayatjaved@gmail.com'));
//   members.push(user.newMember('Husna','Back End Development','asmajaved@gmail.com'));
//   members.push(user.newMember('Usra','Digital Marketing','yusra2005@gmail.com'));
//   members.push(user.newMember('Fari','Front End Development','farihaZahir2003gmail.com'));

  
//   // console.log(members);
  
//   members.forEach(function(member) {
//     member.define();
//   })


                        //Observer Pattern

//This pattern is basically used when when the actions of one object depends on the actions of other objects
//Subscrubing and unSubscribing is the most important use of it
                

// function JamesCharles() {
//   this.subscribers = [];
// }

// JamesCharles.prototype = {
//   subscribe: function(fn) {
//     this.subscribers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   },
//   unsubscribe: function(fn) {
//     // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
//     this.subscribers = this.subscribers.filter(function(item){
//       if(item !== fn) {
//         return item;
//       }
//     });
//     console.log(`You are now unsubscribed from ${fn.name}`);
//   },
//   fire: function() {
//     this.subscribers.forEach(function(item) {
//       item.call();
//     });
//   }
// }

// const click = new JamesCharles();

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//   click.subscribe(getTheStatement);
// });

// document.querySelector('.unsub-ms').addEventListener('click', function() {
//   click.unsubscribe(getTheStatement);
// });

// document.querySelector('.sub-s').addEventListener('click', function() {
//   click.subscribe(getAgain);
// });

// document.querySelector('.unsub-s').addEventListener('click', function() {
//   click.unsubscribe(getAgain);
// });

// document.querySelector('.fire').addEventListener('click', function() {
//   click.fire();
// });

// // Click Handler
// const getTheStatement = function() {
//   console.log(`Current Statement: Hi Sisters!`);
// }

// const getAgain = function() {
//   console.log(`Statement Afterwards: James Charles here!`);
// }


                        //Suppsose My Own Yotube Channel


                        const PageState = function() {
                          let currentState = new homeState(this);
                        
                          this.init = function() {
                            this.change(new homeState);
                          }
                        
                          this.change = function(state) {
                            currentState = state;
                          }
                        };
                        
                        // Home State
                        const homeState = function(page) {
                          document.querySelector('#heading').textContent = null;
                          document.querySelector('#content').innerHTML = `
                            <div class="jumbotron">
                            <h1 class="display-3">Hello, world!</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr class="my-4">
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p class="lead">
                              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </p>
                          </div>
                          `;
                        };
                        
                        // About State
                        const aboutState = function(page) {
                          document.querySelector('#heading').textContent = 'About Us';
                          document.querySelector('#content').innerHTML = `
                            <p>This is the about page</p>
                        `;
                        };
                        
                        // Contact State
                        const contactState = function(page) {
                          document.querySelector('#heading').textContent = 'Contact Us';
                          document.querySelector('#content').innerHTML = `
                          <form>
                            <div class="form-group">
                              <label>Name</label>
                              <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                            <label>Email address</label>
                            <input type="email" class="form-control">
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                          </form>
                        `;
                        };
                        
                        // Instantiate pageState
                        const page = new PageState();
                        
                        // Init the first state
                        page.init();
                        
                        // UI Vars
                        const  = document.getElementById('qahr'),
                              aout = document.getElementById('kruik'),
                              contact = document.getElementById('hosik');
                        
                        // Home
                        home.addEventListener('click', (e) => {
                          page.change(new homeState);
                        
                          e.preventDefault();
                        });
                        
                        // About
                        about.addEventListener('click', (e) => {
                          page.change(new aboutState);
                        
                          e.preventDefault();
                        });
                        
                        // Contact
                        contact.addEventListener('click', (e) => {
                          page.change(new contactState);
                        
                          e.preventDefault();
                        });