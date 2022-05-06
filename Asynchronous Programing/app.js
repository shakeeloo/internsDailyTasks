// const output_ = document.getElementById('output')
// document.getElementById('button').addEventListener('click', laod)

// function laod(){
//     //  instantiating the class
//     const xhr = new XMLHttpRequest()

//     //open Method

//     xhr.open('GET', 'data(1).txt', true)

//     xhr.onload = function(){
//         console.log('READYSTATE', xhr,this.readyState)
//         if(this.status === 200){
//             output_.innerHTML = this.responseText;
//         }
//     }
//     //send method

//     xhr.send();

// }


// HTTP statuses

//200   "OK"
//403   "forbidden"
//404    "Not Found"

// ReadyState Values
//0: "request not initialized"
//1:  "Server connection established"
//2:  "Request Recieved"
//3:  "Processing Request"
//4:  "REquest is finished and reponse is ready"


                            //Here Goes Nanik wala Example
// const what_ = document.getElementById('what')

// document.getElementById('naniko_btn').addEventListener('click', loadHere)

// function loadHere(){

//     //instantiating the XHR

//     const xhr2 = new XMLHttpRequest();

//     //using open method to request for the data

//     xhr2.open('GET', 'exmpl(1).json', true)

//     //telling what happens whenxhr2 loads

//     xhr2.onload = function(){
//         if(this.status === 200){

//             const nan_ = JSON.parse(this.responseText); 

//             what_.innerHTML = `
//             <ul>
//             <li>Who I am writing anout is my ${nan_.id}</li>
//             <li>I call her ${nan_.call}</li>
//             <li>She is my ${nan_.is}</li>
//             </ul>
//             `;
//         }
//     }
//     xhr2.send();
// }

            // json with multiple values goes here

// const info_ = document.getElementById('info');
// document.getElementById('sis').addEventListener('click', abc)

// function abc(){
//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET', 'sisters.json', true);

//     xhttp.onload = function(){
//         if(this.status === 200){

//             const espchar = JSON.parse(this.responseText)
//             let output = '';
//             espchar.forEach(ma => {
//                 output += `
//                 <ul>
//                 <li>She is my ${ma.relation}</li>
//                 <li>Her Name is ${ma.name}</li>
//                 <li>She is ${ma.married} now</li>
//                 </ul>
//                 `;

//                 info_.innerHTML = output;
//             });


//         }
//     };

//     xhttp.send();
// }

                    //ChukNorris Jokes section goes here


// document.getElementById('form_button').addEventListener('click', cdf)

// function cdf(e){
//     const num = document.querySelector('#number');
//     num.type = "number";
   
//     const xhrjokes = new XMLHttpRequest();

//     xhrjokes.open('GET', `http://api.icndb.com/jokes/random/${num.value}`, true);

//     xhrjokes.onload = function(){
        
//       if(this.status === 200){
               
//         let output_ = '';

//         const latifa_res = JSON.parse(this.responseText);

//         if(latifa_res.type === 'success'){
//             latifa_res.value.forEach((latifaaa) => {
//                 output_ += `<li>${latifaaa.joke}</li>`;
//             });
//         }
//         }    
//           document.getElementById('latifa_sec').innerHTML = output_;
//     };

//     xhrjokes.send();
//      e.preventDefault();
// }

//                     // Call Back

//                     const activities = [
//                         {id: 'About today', body: 'Started with something new'},
//                         {id: 'About yesterday', body: 'took usra to the test'}
//                       ];
                      
                    //   function createActivity(activity) {
                    //     setTimeout(function() {
                    //         activities.push(activity);
                    //     }, 5000);
                    //   }
                      
                      
                    //   function getActivities() {
                    //     setTimeout(function() {
                    //       let output = '';
                    //       activities.forEach(function(activity){
                    //         output += `<li>${activity.id}</li>`;
                    //       });
                    //       document.body.innerHTML = output;
                    //     }, 3000);
                    //   }
                      
                    //   createActivity({id: 'About Day before yesterday', body: 'At Hostel the whole day'});
                      
                    //   getActivities();
                      
                      
                    //   function createActivity(activity, callback) {
                    //     setTimeout(function() {
                    //       activities.push(activity);
                    //       callback();
                    //     }, 6000);
                    //   }
                      
                      
                    //   function getActivities() {
                    //     setTimeout(function() {
                    //       let output = '';
                    //       activities.forEach(function(activity){
                    //         output += `<li>${activity.id}</li>`;
                    //       });
                    //       document.body.innerHTML = output;
                    //     }, 1000);
                    //   }
                      
                    //   createActivity({id: 'About Day before yesterday', body: 'At Hostel the whole day'}, getActivities); 


                    //   function createActivity(activity) {
                    //       return new Promise(function(resolve, reject) {
                    //           setTimeout(function() { 
                    //       activities.push(activity);
                          
                    //         const error = true;

                    //         if(!error){
                    //             resolve()
                    //         }else{
                    //             reject(`Error: There is an error somewhere here`)
                    //         }
                    //     }, 6000);
                    //   })
                      
                      
                    //   function getActivities() {
                    //     setTimeout(function() {
                    //       let output = '';
                    //       activities.forEach(function(activity){
                    //         output += `<li>${activity.id}</li>`;
                    //       });
                    //       document.body.innerHTML = output;
                    //     }, 1000);
                    //       }
                        
                    //   }
                      
                    //   createActivity({id: 'About Day before yesterday', body: 'At Hostel the whole day'}).then(getActivities).catch(function(error) {
                    //     console.log(error)
                    //   }); 



                    // Promises

                    // function pro(a,b){
                    //     return new Promise(function(resolve,reject){

                    //         var c = a*b;
                            
                    //         if(c){
                    //             resolve(`The value is ${c}`);
                    //         }else{
                    //             reject(`Operation Failed`);
                    //         }
                    //     })
                    // //    success = (result) => console.log(result);
                    // //    fail = (error) => console.log(error);
                    // }
                    // pro(5,10).then((result)=>console.log(result)).catch((error=>console.log(error)))

                    //          if the operation is inpending we use setTimeOut

                    //          function pro(a,b){
                    //             return new Promise(function(resolve,reject){
                    //                 console.log(`Operation is in process!`)
                    //                 var c = a*b;
                    //                setTimeout(()=>{
                    //                 if(c){
                    //                     resolve(`The value is ${c}`);
                    //                 }else{
                    //                     reject(`Operation Failed`);
                    //                 }
                    //                }, 5000) 
                                   
                    //             })
                    //         //    success = (result) => console.log(result);
                    //         //    fail = (error) => console.log(error);
                    //         }
                    //         pro(5,0).then((result)=>console.log(result)).catch((error=>console.log(error)))


  // Fetch API
  // Fetch API is the alternative method of AJAX for getting data from local File, json file or External API


//             // From Local File
//   document.getElementById('button1').addEventListener('click', localFile)

//   function localFile(){
//     fetch('data(1).txt')
//     .then(function(res){
//       return res.text();
//     })
//     .then(function(data){
//       document.getElementById('result').innerHTML = data;
//     })
//   }

//           // Fetching from json file

//  document.getElementById('button2').addEventListener('click', localJson)

// function localJson(){
//   fetch('sisters.json')
//   .then(function(res){
//   return res.json();
//   })
//  .then(function(data){
//   console.log(data)

//   let output ='';

//   data.forEach(function(item) {
//     output += `<li>${item.name}</li>`
//   });
//   document.getElementById('result').innerHTML = output;
  
//   // console.log(output)
//   })
    
//   }

//             // Fetching from external API

// document.getElementById('button3').addEventListener('click', ExternalJson)
// function ExternalJson(){
// fetch('https://api.github.com/users')
// .then(function(res){
// return res.json();
//  })
// .then(function(data){
//  console.log(data)
       
//  let output ='';
           
// data.forEach(function(mem) {
// output += `<li>${mem.avatar_url}</li>`
//  });
// document.getElementById('result').innerHTML = output;
              
// // console.log(output)
//  })
               
// }


                  // Callback, Promises, async and await
                  //callBack

// const friends = [
//       { catg : 1,
//         name : "Mustansir",
//         belongs : "Chitral",
//         does : "Wild-life Officer"
//       },
//       { catg : 2,
//         name : "Fozia",
//         belongs : "Ishkoman",
//         does : "Banking"
//       },
//       { catg : 3,
//         name : "Atiq",
//         belongs : "Chitral",
//         does : "Student(QAU)"
//       }
// ]

// function addFriend(friend, callback){
//   setTimeout(() => {
//     friends.push(friend);
//     callback();
//   }, 4000);
// }

// function getName(){
//   setTimeout(() => {
//     let output ='';

//     friends.forEach((item)=>{
//       output += `<li>${item.name}</li>`
//     })
//     document.getElementById('here').innerHTML = output;
//   }, 2000);
// }

// addFriend({catg : 4,name : "Anjuman",belongs : "Golaghmuli",does : "Studying"}, getName);


            //Promises



// function addFriend(friend){
//     return new Promise((resolve, reject)=>{
//    setTimeout(() => {
//   friends.push(friend);

//     const error = true;
//     if(!error){
//          resolve();
//     }else{
//        reject("Something definetly went Wrong!");
//     }
//   }, 4000);
//     })

  
//   }
    
//   function getName(){
//   setTimeout(() => {
//   let output ='';
     
//   friends.forEach((item)=>{
//   output += `<li>${item.name}</li>`
//   })
//   document.getElementById('here').innerHTML = output;
//   }, 2000);
//   }
            
//  addFriend({catg : 4,name : "Anjuman",belongs : "Golaghmuli",does : "Studying"}).then(getName).catch((error)=>console.log(error));


                  //Async and await

//  async function addFriend(friend){
//   setTimeout(() => {
//     friends.push(friend);
    
//   }, 4000);
// }

// function getName(){
//   const wait = await setTimeout(() => {
//     let output ='';

//     friends.forEach((item)=>{
//       output += `<li>${item.name}</li>`
//     })
//     document.getElementById('here').innerHTML = output;
//   }, 2000);
// }

// addFriend({catg : 4,name : "Anjuman",belongs : "Golaghmuli",does : "Studying"});

//  getName();


// async function testing(){
//       const data = await fetch('sisters.json');
//       const response_ = await data.json();

//       return response_
// }

// testing().then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })

// function makeRangeItrator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   const rangeIterator = {
//      next() {
//          let result;
//          if (nextIndex < end) {
//              result = { value: nextIndex, done: false }
//              nextIndex += step;
//              iterationCount++;
//              return result;
//          }
//          return { value: iterationCount, done: true }
//      }
//   };
//   return rangeIterator;
// }

// const it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 3 5 7 9
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value);



                //Destructuring

// Destructuring means unpacking the values from arrays or objects and putting them in a separate variable
// 'rest' is destructuring assignment
// let a, b, rest;
// [a, b] = ['cow', 'hen',];

// console.log(a);
// // expected output: cow

// console.log(b);
// // expected output: hen

// const mal = [a, b, ...rest] = ['cow','hen', 'duck','gordogh','istor','keli','pai'];

// console.log(mal);
// // expected output: Array [ 'duck','gordogh','istor','keli','pai']

// mal.push('chani')
// console.log(mal)
// // expected output: Array [ 'duck','gordogh','istor','keli','pai','chani]


// let a,b,rest;
// ({a,b} = {a:'cow', b:'hen'})

// console.log(a)
// // expected output: cow

// console.log(b)
// // expected output: hen

// ({a, b, ...rest} = {a: 'cow', b: 'hen', c: 'gordogh', d: 'keli'});

// console.log(rest)

// try{
// // // expected  ReferenceError
// // belong();

// //TypeError is expected here
// this.belong();

// //Syntaz Error is Expected here
// console.log{`I am here`}

// }catch(error){
//   console.log(error)
//   console.log(error.message)
//   // console.log(error.name)
//   // console.log(error instanceof ReferenceError)
//   // console.log(error instanceof TypeError)
// }
// console.log(`I am here!`)       //Script interpretation deosn't stop while the error is handled
//                                   // The program goes on smoothly.


                //Regular Expression

          //Below we will be doing few jucntions related to regular Expression

var regE = /key/i;  // add i after / to make it case insensitive
var regE = /key/g;    //Makes it available for global search

// //exec() method
// //returns an array if the regular Ex matches any value in the string 
// // and null if no values is matches

// let result = regE.exec('key function')
// console.log(result);
// console.log(result[0]); //the index where the key starts
// console.log(result.input)     // the input where the value is matched

// // test() method returns boolean value
// //true if the value matches and false if the value doesn't match

// let result = regE.test('key function')
// let result2 = regE.test('check here')

// console.log(result)
// console.log(result2)


// // match() : for this method to work we give additional string to compare with
// //if matches, return will be an array otherwise/ null

// let string1 = "Hi there!";
// let string2 = "Key there"   
// let result = string1.match(regE)
// let result2 = string2.match(regE)     // Gives null if i is not added in the regE

// console.log(result2)

// // search()  This method returns the index of where it found the regE

// let str = " Your Key is there" ;

// let result = str.search(regE)

// console.log(result)

// //replace() method replaces the value with the new one

// let str = "Your Key is there" ;

// let result = str.search(regE, 'keys')

// console.log(result)