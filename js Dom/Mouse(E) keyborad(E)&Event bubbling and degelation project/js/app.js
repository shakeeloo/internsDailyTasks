// style 
//set background color on mouse event
const card =document.querySelector('.container')
card.addEventListener('mousemove', runEvent);
function runEvent(e) {
document.body.style.backgroundColor =`rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

//work on name input
const submit = document.querySelector('#submitbtn');
submit.addEventListener('click', onclick);
function onclick(e){
   const name =document.querySelector('#name');
   const email =document.querySelector('#email');
   const countery =document.querySelector('#countery-sec');
   const phone =document.querySelector('#phone');
   const message =document.querySelector('#message');
   if(name.value === ""){
      alert('Name is undefine')
   }else if(email.value ===""){
      alert('invalied Email')
   }else if(phone.value ===""){
      alert('insert your phone No');
   }else if(message.value ===""){
      alert('say something about your self?')
   }  
   else{
       let createname =` Name : ${name.value}`

     const entername =document.querySelector('#enter');
     entername.innerHTML = createname;
     name.value = "";
     name.value.toUpperCase();
     
     let createemail =`Eamil : ${email.value}`
     const enteremail =document.querySelector('#enter-email');
     enteremail.innerHTML =createemail;
     email.value = "";
   

     let createcountery =`Countery : ${countery.value}`
     const entercountery =document.querySelector('#enter-countery');
     entercountery.innerHTML = createcountery;

   let createphone =`Phone No : ${phone.value}`
   const enterphone =document.querySelector('#enter-phone');
   enterphone.innerHTML = createphone;
   phone.value ="";

   let createmessage =`Message : ${message.value}`
   const entermessage =document.querySelector('#enter-message');
   entermessage.innerHTML = createmessage;
   message.value ="";
   }


   e.preventDefault();
}

const clear =document.querySelector('#clearbtn');
clear.addEventListener('click', function(e){
   const clearmain =document.querySelector('#clear-output');
     
   if(confirm('Are you sure')){
      const heading = document.querySelector('#confirm');
       heading.innerHTML ="output has been clear";
       clearmain.innerHTML ="";
   }else{
      const hint = document.querySelector('#confirmit');
      hint.innerHTML ="thanks for stay with has";
   }
})


