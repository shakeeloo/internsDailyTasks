// const addBtn= document.querySelector('#submitBtn');
// addBtn.addEventListener('click',function(){
//     const input =document.querySelector('#input')
//     if(input.value == ' '){

//     }
// });


 
// //   console.log(input);
// let ul = document.querySelector('#liarea')
// addBtn.addEventListener('click', onclick);




// console.log(addBtn);


const addbtn =document.querySelector('#submitBtn');
addbtn.addEventListener("click",function(){
    const input =document.querySelector('#input');
    console.log(input.value);
    if(input.value === ''){
        alert('field is empty');
    }
    else if(input.value ==='@'||input.value==='#'||input.value==='$'|| input.value==='%'|| input.value==='&'|| input.value ==='^'|| input.value=== '*'|| input.value=== '('|| input.value=== ')'|| input.value=== '-'|| input.value=== '='){
       alert('unexpected token');
       def
    }
    else{
     let create =`<li class="collection">${input.value}
        <a class="delete">
        <i href ="#" id ="icon" class="fa fa-remove"></i> 
        </a>  
        </li>`
        
        const ul =document.querySelector('#ul-list');
        ul.innerHTML += create;
        input.value ="";
        
    }
});




// const clearbtn =document.querySelector('#clear-item');
// let ul = document.querySelector('#ul-list');
// clearbtn.addEventListener("click", function(){
//     ul.innerHTML =" ";

// })
// console.log(clearbtn);


 document.querySelector('#clear-item').addEventListener('click', onclick);

 function onclick(e){
     let ul = document.querySelector('#ul-list');
     ul.innerHTML =" ";
    
    let val;
    val = e;
    e.target.innerHTML ='Data is Cleared';

 }

 document.querySelector('#submitBtn').addEventListener('click', clickme);

function clickme(e){
   let val;
   val = e;
   e.target.setAttribute('value', 'Enter Next Task');
}






//margin on ADD TASK 
let submit = document.querySelector('#submitBtn');
submit.style.marginTop ="30px";

//e.target
// const remove = document.querySelector('')






// mouse Events 

// Start 

const clear =document.querySelector('.clear-item');
const moniter =document.querySelector('.mousereading');
const card =document.querySelector('.container');

// console.log(clear);
card.addEventListener('mousemove', runEvent);    
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);
card.addEventListener('mouseup', runEvent);
card.addEventListener('mousedown', runEvent);
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
function runEvent(e){
    // to moniter the curser location
  moniter.textContent =`MoveX :${e.offsetX}, MoveY : ${e.offsetY}`;

  //set background rgb color with the control of cursor
document.body.style.backgroundColor =`rgb(${e.offsetX}, ${e.offsetY}, 70)`;


}




//keyboard Evenet
let inputval =document.getElementById('input');
let liss =document.getElementById('liarea')

// inputval.addEventListener('keyup', runkey);
// inputval.addEventListener('keydown', runkey);
inputval.addEventListener('keypress', runkey);
 function runkey(e){
    liss.innerText =e.target.value;
 }



//event bubbling and delegation


//event dalegation 

//get li and remove that

document.body.addEventListener('click', deletefun);

function deletefun(e){
    // console.log(e.target);
    if(e.target.parentElement.className ==='fa fa-remove'){
    console.log('fa fa-remove');
    //   e.target.parentElement.parentElement.remove();
    }
}

