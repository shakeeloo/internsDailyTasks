const container = document.querySelector('#container');
const inputAll = document.querySelector('#container').children;
const input_div = document.querySelector('#container').children[3];
const message = document.querySelector('#container').children[4];
const enteredValue = input_div.querySelector('input');
const btn = document.querySelector('button')


// console.log(input_div)

let winning_number = Math.floor(Math.random()*10);
let guesses = 4;

container.addEventListener('mousedown', efg)

function efg(e){
    if(e.target.className === 'play_again'){
        window.location.reload();
    }
}

btn.addEventListener('click', abc)

function abc(){
        let value = parseInt(enteredValue.value)
 
        if(isNaN(value) || value > 10 || value <0){
            setMessage('Please enter a valid value', 'red')
        }else if(value === winning_number){
            resultMsg('won','green');
            setMessage('Congratulations! You won', 'green' );
        }else {
         let guessesLeft = --guesses;
            if(guessesLeft === 0){
                resultMsg('lost','red')
               setMessage('Sorry! You lost','red')
       }else{
           setMessage(`${value} is not correct, you have ${guessesLeft} guesses leftt`,'red')
       }
       btn.innerHTML = "Play Again";
       btn.className += "play_again";
   }
}

function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}

function resultMsg(result,colorR,){
    if(result=== 'won'){
        enteredValue.disabled = true;
        enteredValue.style.borderColor = colorR;
        
    }else if(result === 'lost'){
        enteredValue.disabled = true;
        enteredValue.style.borderColor = colorR;
    }
}



