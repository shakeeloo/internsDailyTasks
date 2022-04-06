
const form_ = document.getElementById('form_sec')
// const wish_sec_ = document.getElementsByClassName('wish_sec')
form_.addEventListener('submit', function(e){
    
    const input = document.getElementById('write');
          
     if(!(input.value)){
        alert(`Say Something`)
     }
     const whole_container = document.getElementById('whole-container')

     const wish_sec_ = document.createElement("div")
     wish_sec_.classList.add("wish_sec")
     const wish_list_ = document.createElement("div"); 
     wish_list_.classList.add("wish_list")
     const wish_ = document.createElement("div");
     wish_.classList.add("wish")
     const input_ = document.createElement("input");
     input_.type = "text";
     input_.value = input.value;
     input_.size ="35"
     input_.classList.add("rec_here");
     input_.setAttribute("readonly","readonly")

     wish_sec_.appendChild(wish_list_)
     wish_list_.appendChild(wish_)
     wish_.appendChild(input_)
    

     const todo_ = document.createElement("div");
     todo_.classList.add("todo")

     const amend_ = document.createElement("button");
     amend_.classList.add("amend");
     amend_.innerHTML = 'Amend'
     const fulfilled_ = document.createElement("button");
     fulfilled_.classList.add("fulfilled");
     fulfilled_.innerHTML = 'Fulfilled'

     todo_.appendChild(amend_)
     todo_.appendChild(fulfilled_)
    
     wish_sec_.appendChild(todo_)
     whole_container.appendChild(wish_sec_)
    
     input.value = "";

     fulfilled_.addEventListener('click', function(){

        const filled_ = document.createElement("div")
        filled_.classList.add("filled")
        filled_.innerHTML = "<h3>Accomplished</h3>"

        const ul_ = document.createElement("ul")

        const li_ = document.createElement("li")
        li_.innerHTML = input_.value;
        li_.classList.add("list"); 

        ul_.appendChild(li_)
        filled_.appendChild(ul_)

        whole_container.appendChild(filled_)
     })

     
        amend_.addEventListener('click', function() {
        if(amend_.classList.innerText.toLowerCase() ==
         "amend"){
            input_.removeAttribute("readonly");
            input_.focus();
            input_.innerText = "Save"
        }else{
            input_.setAttribute("readonly","readonly");
            input_.innerText = "Amend"
        }
    })

    
    e.preventDefault()
})