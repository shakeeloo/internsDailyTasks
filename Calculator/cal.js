// const display = document.querySelector('.result');
// const numbers = document.querySelectorAll('.number');


// numbers.forEach(number=> {
//     number.addEventListener('click',function(){
//      let inputNum= document.querySelector('#input-value');
//        inputNum.value+= number.innetText;
//     });
   
// });


const display = document.querySelector('.result');
const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.number');
const buttons = document.querySelectorAll('button');
const num =  document.querySelectorAll('.number');
const oper =  document.querySelectorAll('.operator');
const out = document.querySelector('.output')

// numbers.forEach(number=> {
//     number.addEventListener('click',function(){
//      let inputNum= document.querySelector('#input-value');
//        inputNum.value+= number.innerHTML;
//     });
   
// });

// operators.forEach(operator=> {
//     operator.addEventListener('click',function(){
//      let inputOp= document.querySelector('#input-value');
//        inputOp.value+= numbers.innerHTML;
//     });
   
// });
let item = buttons.value;

buttons.forEach(item=> {
    item.addEventListener('click',function(){
     let input= document.querySelector('#input-value');
       

       if(item == oper.innerHTML || item == num.innerHTML ){
            input.value+= item.innerText;
       }
       else if (item.id == "clear") {
           display.innerText = "";
       } else if(item.id == "back"){
           let string = display.innerText.toString();
           display.innerText = string.substr(0,string.length - 1);
       }else if(display.innerText != "" && item.id == "="){
          display.innerText = eval(display.innerText);
       }else if(display.innerText == "" && item.id == "="){
           display.innerText = "Error"
       }else{
           display.innerText+= item.id
      }
    });
    
});




                //...........Requires Little Manipulation.....
