//Game values
let min = 1,
    max = 10,
    winNum = getRandomNum(min, max);
    gussesleft = 3;

// UI Elemets

const game =document.querySelector('#game'),
     minNum =document.querySelector('.min-num'),
     maxNum =document.querySelector('.max-num'),
     gusseInput =document.querySelector('#gusse-input'),
     submintBtn =document.querySelector('#submit-btn'),
     message =document.querySelector('.message');
 
//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;


//add play again
game.addEventListener('mousedown', function(e){
    if(e.target.className ==='play-again'){
        window.location.reload();
    }
})

//Add function

submintBtn.addEventListener('click', function(){
    let gusse = parseInt(gusseInput.value);
//conditions
 if(isNaN(gusse)||gusse < min ||gusse > max){
     setMessage(`Please Enter Your gusse between ${min} and ${max}`);
 }
if(gusse === winNum){
  //game over won
  gameOver(true, `${winNum} is Correct YOU WIN!`)    

 }
else{
    gussesleft -= 1   //same like this  (gusseleft = gessleft -1)
    if(gussesleft === 0){ 

        //game over lost
   gameOver(false,`Game Over! Your Are Lost! The Correct Number was ${winNum}`);

}else{ 
        //game continues answer wroung
        gusseInput.style.borderColor ='red';
        //clear input
        gusseInput.value ="";
        //message
      setMessage(`${gusse} is not Correct  and your have ${gussesleft} gusse left`, 'red');
    }
 }
})
function gameOver(won, msg){
   let color; 
   won === true ? color ="green" :color ="red";

    gusseInput.disabled =true;
    //style
    gusseInput.style.borderColor = color;
    //set text color
    message.style.color =color;
       // setMessage
    setMessage(msg); 
    //set value for submitbtn
    submintBtn.value ='Play Again';
    //set class name
    submintBtn.className +='play-again';
  
}
//get wining num
function getRandomNum(min, max){
    return(Math.floor(Math.random()*(max-min+1)+min)); 
}

function setMessage(msg, color){
    message.style.color = color;
   message.textContent = msg;
 
}