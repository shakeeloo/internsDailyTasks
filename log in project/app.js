

class Store{
  static getData(){
     const logindata= JSON.parse(localStorage.getItem('signupinfo'));
    return logindata;
  }
}


class UI {
   showAlert(message, className){
  const div = document.createElement('div');
  const a = document.createElement('a');
  const i = document.createElement('i');
  //class name                                it is vary important thing to show message
  div.className =`alert ${className}`;
  i.className ="fa-solid fa-triangle-exclamation";
  //append
  div.appendChild(i);
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.login-content');
  //get form
  const form = document.querySelector('.errorshower');
  //append
  container.insertBefore(div,form);

  setTimeout(function(){
      document.   querySelector('.alert').remove();
    }, 3000);
}

clearFields(){
  document.querySelector('#email').value ="",
  document.querySelector('#password').value= ""
}
}





// also by using of prototype

//UI 
// function UI() {}

//show  alert
// UI.prototype.showAlert = function(message , className) {
  
//     const div = document.createElement('div');
//     const a = document.createElement('a');
//     const i = document.createElement('i');
//     //class name                                it is vary important thing to show message
//     div.className =`alert ${className}`;
//     i.className ="fa-solid fa-triangle-exclamation";
//     //append
//     div.appendChild(i);
//     div.appendChild(document.createTextNode(message));
//     //get parent
//     const container = document.querySelector('.login-content');
//     //get form
//     const form = document.querySelector('.errorshower');
//     //append
//     container.insertBefore(div,form);

//     setTimeout(function(){
//         document.   querySelector('.alert').remove();
//       }, 3000);
// }

// signup error viwer

// //field is empty
// UI.prototype.clearFields = function(){
//   document.querySelector('#email').value ="",
//   document.querySelector('#password').value= ""

// }

// prototype end here




//event listener
const error = document.querySelector('#submit-Btn').addEventListener('click',
function(e){
  //get values
    const email=document.querySelector('#email').value,
         password =document.querySelector('#password').value

 
const ui = new UI();


    // if(email === "" || password=== ""){
    // ui.showAlert('Enter your email or password', 'error');
    // }else{
    //     ui.showAlert('Wellcome', 'success');
    // }\


    const storeData = Store.getData();
    if(storeData.some((v)=>{
        return v.email === email
    })&&storeData.some((v)=>{
        return v.password === password
    })){
       ui.showAlert('Login success full', 'success');
        setTimeout(() => {
            window.location.href = "./after.html";
            
        }, 4000);

    } else if(storeData.some((v)=>{
        return v.email != email
    })||storeData.some((v)=>{
        return v.password != password
    })){
      ui.showAlert('Icorrect email or password','error');
    }
   

    // instantiate UI
   ui.clearFields();
  

    e.preventDefault();
});


// window.onload = function() {
//   document.querySelector('.')
// }


// const me = JSON.parse(localStorage.getItem('signupinfo'));
// console.log(me);




//using callback function on login project for slide some after some time

const slides =[
  {content :"Thanku"}
];

function createslide(slide, callback){
  setTimeout(function(){
   slides.push(slide);
   callback();
   console.log('create function run');
  }, 5000);
}

function getslide(){
  setTimeout(function(){
   let output =" ";
 slides.forEach(function(slide){
   output = `<h3>${slide.content}</h3>`;
 })
  document.getElementById('slide-shower').innerHTML = output;
  console.log('get function run');
  }, 100);
}
let newslide ={content :"Wellcome to our webside! create an account to sign in and enjoy our side!"}

createslide(newslide, getslide);

// createslide();
// getslide();