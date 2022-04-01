
const students =[
    {name :"Rashid Minhas", email :"www.rashidminhas@gmail.com"},
    {name :"sara Malik", email: "saramalik@gamil.com"}
]

function createstudent(student, callback) {
   setTimeout(function(){
     students.push(student);
     callback();
   }, 100);
}
 

function getStudent() {
   setTimeout(function(){
       let output =" ";
       students.forEach(function(student){
     output += `<li>Name :${student.name} Eamil : ${student.email}</li>`;
       })
   document.body.innerHTML = output;
   }, 1000);
}

let newStudent = {name:"rubba", email:"rubba@gamil.com"};

createstudent(newStudent, getStudent);