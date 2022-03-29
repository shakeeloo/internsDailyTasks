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

let newsubmit = document.querySelector('#subsubmit')
newsubmit.addEventListener('click', function(){
    const input = document.querySelector('#input');
    // console.log(`hello : ${input.value}`);  
    if(input.value === ""){
        alert('Enter is Empty');
    }else{
        let create =`<li class="collection">${input.value}
        <a class="delete">
        <i href ="#" id ="icon" class="fa fa-remove"></i> 
        </a>  
        </li>`

        const ull = document.querySelector('#sub-collection');
        ull.innerHTML += create;
        input.value ="";
        input.value.toUpperCase();
  
    }
})


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