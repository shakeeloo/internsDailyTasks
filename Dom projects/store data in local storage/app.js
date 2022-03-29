let studentsData ={
  name :'Rashid Minhas',
  age :'20',
  status :'web Developer'
};

let user ={
    name : 'alishar',
    age : '30',
    working : 'with DOM'
}

let convert = JSON.stringify(studentsData);

localStorage.setItem("studentsData", convert);
// console.log(convert);

// console.log(studentsData);


let conuser =JSON.stringify(user);

// store data in localStorage
localStorage.setItem('user', conuser);
// console.log(user)

//get data form local storage
let user1 = localStorage.getItem('user');

let user2 =localStorage.getItem('studentsData');
//function
const btn =document.querySelector('#button');

btn.addEventListener("click", runEvent);

function runEvent(e){

    if(confirm() ===true){
        document.write("User1"+user1+"<br>");  
    }else{
        document.write('sorry')
    }
//   confirm(document.write("User1"+user1+"<br>")); 
//   document.write("User2"+user2);
//   alert(user1);
//   alert(user2);
    e.preventDefault();
}
console.log(btn);
