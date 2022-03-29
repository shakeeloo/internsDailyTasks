

// let val = document.getElementsByClassName('btn');
// // val = Array.from(val);
// val[0].style.color = 'red';
// val[0].style.background="blue";
// val[0].style.padding = "5px 50px"
// val[0].textContent = 'hi';
// val[1].style.padding ="30px";
// val[1].style.background = "#ccc";
// console.log(val);


// const btn=document.querySelector(".btn2");
//  btn.addEventListener('click',showdp);
//  function showdp(){
//      console.log("hello world")
//  }

// console.log(click);

// let html;
// html = document;
// html = document.all;
// html = document.all.length;
// html = document.all[28];
// html = document.URL;
// html = document.links;
// html = document.links[1];
// html = document.links[0].className;
// html = document.links[0].id;
// html = document.links[0].classList;
// html = document.images;
// html = document.scripts;
// html = document.scripts[0].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });
// console.log(html);



// DOM selectors for single Elements

// getElementById

// let val = document.getElementById('task-title');
// val.style.color = 'red';
// val.textContent = 'New Task';
// val.innerText = 'Task';
// val.innerHTML ='<span><h2>Hello</h2></span>';   //we can use innerHTMl to add tag in html flie

// console.log(val);


//querySelector

// byId
// console.log(document.querySelector('#clear-item'));
//byclassname
// console.log(document.querySelector('.clear'));
// bytagname
// console.log(document.querySelector('h1'));


// document.querySelector('#clear-item').style.color = 'yellow';
// document.querySelector('h1').style.background = '#fff';
// document.querySelector('h1').style.padding = '10px';
// document.querySelector('ul li').style.color = 'red';
// document.querySelector('li:nth-child(2)').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').style.color = 'green';
// document.querySelector('li:last-child').style.color = '#fff';






//convert HTML collection into array

// let lis =  document.getElementsByTagName('li');

// lis = Array.from(lis)

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Pakistan`;
//     // li.innerHTML = `${index}: List Items`;
// })
// console.log(lis);



//queryselectorall

// let lis = document.querySelectorAll('li');

// lis.forEach(function(li){
//     console.log(li.className);
//     li.style.color ="red";
// })
// console.log(lis);













//Eventlistener
let tag;
const btn  = document.getElementById("submitBtn");

btn.addEventListener("click",function(){
   const input = document.querySelector("#input");
   if(input.value === ''){
       alert("field is empty")
   }
   else{
        tag = `<li class="collection">${input.value}
       <a class="delete">
       <i href ="#" id ="icon" class="fa fa-remove"></i> 
       </a>  
       </li>`
  
       const ul  = document.querySelector(".list");
       ul.innerHTML += tag;
       input.value="";
       
   }
});

//clear task

const clearBtn = document.querySelector('#clear-item');
const ul = document.querySelector('.list');
const inputData = document.querySelector('#submitBtn');

clearBtn.addEventListener('click', function(){
    ul.innerHTML =' ';
});

// clear icon
const clearicon =document.querySelector('#icon');
const lis = document.querySelector('#liarea');

clearicon.addEventListener('click', function(){
  lis.innerHTML =" ";
});












//Traversing The DOM

// let val; 

// const list = document.querySelector('ul');
// const listItems = document.querySelector('li');

// val = list;
// val = listItems;

//Get element by cildnodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1].style.background ="red";
// val = list.childNodes[2];

//Get element by children
// val = list.children;
// list.children[2].children[0].id ="3rd";
// val = list.children[2].children[0].children[0].style.color ="black";



// console.log(val);

// create
let newheading = document.createElement('h2');
// id
newheading.id ='newh2';
//add text node
newheading.appendChild(document.createTextNode('Google'));
// call oldheading 
const oldheading =document.querySelector('#task-title');
//call parent
const newaction = document.querySelector('.snd-content');
//replace
newaction.replaceChild(newheading , oldheading);
console.log(newheading);
  



//ChildNode & children :
          //childnode where show the comments and extra spaces also but children can show the html element only it can't show the comments or extra spaces


// textContent and innerText  :
           //In javascript textContent and innerText is used to reassign the text on html ById or ByclassName

 //innerHTML :
      //In javascript we will used innerHTML to create or add tag on html file        

// style

let add = document.querySelector('#submitBtn');
add.style.marginTop ="20px";