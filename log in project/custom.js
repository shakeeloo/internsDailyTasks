
let signupinfo;


//by using ES6 class
class Data{
    constructor(firstName, lastName,email, password, confirmps,dob,gendar) {
       this.firstName = firstName;
       this.lastName  = lastName;
       this.email = email;
       this.password = password;
       this.confirmps = confirmps;
       this.dob =dob;
       this.gendar =gendar;
    }
}

class UI{
    showAlertsup(message, className){
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
    const container = document.querySelector('.showerror');
    //get form
    const form = document.querySelector('.errorshower');
    //append
    container.insertBefore(div,form);
    setTimeout(function(){
        document.   querySelector('.alert').remove();
      }, 3000);
    }

   clearFields(){
    document.querySelector('#fname').value = "",
        document.querySelector('#lname').value = "",
        document.querySelector('#email').value ="",
        document.querySelector('#password').value = "",
        document.querySelector('#confirm-ps').value = "",
        document.querySelector('#date').value = "",
        document.querySelector('#gendar').value = ""
   } 
}

class Store{
    static getData(){
 if(localStorage.getItem('signupinfo')===null){
    signupinfo = [];
 }else{
     signupinfo = JSON.parse(localStorage.getItem('signupinfo'))
 }
 return signupinfo;
  }
    static addData(data){
  const signupinfo = Store.getData();
  signupinfo.push(data);
  localStorage.setItem('signupinfo', JSON.stringify(signupinfo));
    }
}



//UI                            by using of prototype 

// function UI(){}

// UI.prototype.clearFields = function(){
//     document.querySelector('#fname').value = "",
//     document.querySelector('#lname').value = "",
//     document.querySelector('#email').value ="",
//     document.querySelector('#password').value = "",
//     document.querySelector('#confirm-ps').value = "",
//     document.querySelector('#date').value = "",
//     document.querySelector('#gendar').value = ""
// }

// UI.prototype.showAlertsup = function(message , className) {
  
//     const div = document.createElement('div');
//     //class name                                it is vary important thing to show message
//     div.className =`alert ${className}`;
//     //append
//     div.appendChild(document.createTextNode(message));
//     //get parent
//     const container = document.querySelector('.showerror');
//     //get form
//     const form = document.querySelector('.errorshower');
//     //append
//     container.insertBefore(div,form);

//     setTimeout(function(){
//         document.   querySelector('.alert').remove();
//       }, 3000);
// }
 
// end here


//event listener
const error2 = document.querySelector('#submitbtn').addEventListener('click',
function(e){
  //get values
        const fname=document.querySelector('#fname').value,
            lname =document.querySelector('#lname').value,
            email = document.querySelector('#email').value,
            password = document.querySelector('#password').value,
            confirm = document.querySelector('#confirm-ps').value,
            dob =document.querySelector('#date').value,
            gendar =document.querySelector('#gendar').value
 
           const data = new Data(fname,lname,email,password,confirm,dob,gendar);
    
           const exist = Store.getData();

     const ui = new UI();
     
    if(fname === ""){
    ui.showAlertsup('Enter your FirstName', 'error');
    }else if(lname === ""){
      ui.showAlertsup('Enter your lastName', 'error');
    }else if(email === ""){
        ui.showAlertsup('Enter your Email', 'error');
    }else if(password === ""){
        ui.showAlertsup('Enter your password', 'error');
    }else if(confirm === ""){
        ui.showAlertsup('confirm your Password', 'error');
    }else if(password !=confirm){
        ui.showAlertsup('your Enter password is not mach please check and try again', 'error');
    }
    else if(dob === ""){
        ui.showAlertsup('Enter your Date of Birth', 'error');
    }else if(gendar === ""){
        ui.showAlertsup('select your gendar', 'error');
    }else if(exist.some((v)=>{
        return v.email === email;
    })){
        ui.showAlertsup('Email is already exist','error');
    }else if(exist.some((v)=>{
        return v.firstName === fname;
    })){
        ui.showAlertsup('FirstName is already exist','error');
    }else if(exist.some((v)=>{
        return v.lastName === lname;
    })){
        ui.showAlertsup('LastName is already exist','error');
    }
    else{
        ui.showAlertsup('Your Account has been created', 'success');

        Store.addData(data);      
        
setTimeout(()=>{
    window.location.href ="./index.html";
},2000);
    }

  
    // instantiate UI
   ui.clearFields();
   
   Store.getItem();

//    Store.getItem();

    e.preventDefault();
});



//by using window event to create annimation for page

window.onload = function(){
    document.getElementById('saport').style.opacity = '1'
}