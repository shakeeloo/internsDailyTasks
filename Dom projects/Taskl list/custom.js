//calling
const form = document.querySelector('#task-form');
const tasklist =document.querySelector('.collection');
const clearbtn =document.querySelector('.clear-tasks');
const filter =document.querySelector('#filter');
const taskinput =document.querySelector('#task');

//load all event listeners
loadEventlisteners();

//load all event listeners
function loadEventlisteners(){
  // Dom Load event
  document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addtask);
    // remove event
    tasklist.addEventListener('click', removeTask);
    //remove event
    clearbtn.addEventListener('click', removeUl);
  //filter event
  filter.addEventListener('keyup', filterTask);

}

//get tasks form LS
// function getTasks(){
//   let tasks;
//   if(lacalStorage.getItem('tasks')=== null){
//     tasks =[];
//   }else{
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }
// //for each loop
//   tasks.forEach(function(task){
//  //create li
//  const li =document.createElement('li');
//  //Add class
//  li.className ='collection-item';
//  //append
//  li.appendChild(document.createTextNode(task));
//  //create a
//  const link =document.createElement('a');
//  //add class
//  link.className ='delete-item secondary-content';
//  //Add iocn in html
//  link.innerHTML =`<i class ="fa fa-remove"></i>`;
//  //style

//  //append to parrent (li)
//  li.appendChild(link)
// //append to parrent (ul)
// tasklist.appendChild(li);
//   })
    
// }


//Add task
function addtask(e){
    if(taskinput.value === ""){
        alert('Add Task')
    }

    //create li
    const li =document.createElement('li');
    //Add class
    li.className ='collection-item';
    //append
    li.appendChild(document.createTextNode(taskinput.value));
    //create a
    const link =document.createElement('a');
    //add class
    link.className ='delete-item secondary-content';
    //Add iocn in html
    link.innerHTML =`<i class ="fa fa-remove"></i>`;
    //append to parrent (li)
    li.appendChild(link)
  //append to parrent (ul)
  tasklist.appendChild(li);

  // store  task in ls
  storeTaskInLocalStorage(taskinput.value);
  
  //clear input
  taskinput.value =' ';  

  e.preventDefault();
}

// store  task
function storeTaskInLocalStorage(task){
  let tasks;
  if(lacalStorage.getItem('tasks')=== null){
    tasks =[];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.getItem('tasks', JSON.stringify(tasks));
}



//Task remove
function removeTask(e){
 if(e.target.parentElement.classList.contains('delete-item')){
   e.target.parentElement.parentElement.remove();
 }

}

//task remove from ul
function removeUl(e){

//  tasklist.innerHTML =" ";

//send way for remove          //while sa agar remove karta han to remove fast hoga baqi dono function ma koi farage nai ha dono da karsakhta han
while(tasklist.firstChild){
 tasklist.removeChild(tasklist.firstChild);
}
}


//filter 

function filterTask(e){
 const text =e.target.value;
document.querySelectorAll('.collection-item').forEach(function(task){
 const item = task.firstChild.textContent;
 if(item.toLowerCase().indexOf(text)!=-1){
    task.style.display ='block';
 }
 else{
    task.style.display ="none";
 }
})

}









// function filterTask(e){
//     const text =e.target.value;
//    document.querySelectorAll('.collection-item').forEach
//    (function(task){
//        const item= task.firstChild.textContent;
//        if(item.toLowerCase().indexOf(text) != -1){
//            task.style.display ="block";
//        }else{
//            task.style.display ="none";
//        }
       
//    })
//    }







