            //Here is DOM Selection

const container = document.querySelector('.container1')
const one = container.querySelectorAll('.one')
const two = container.getElementsByClassName('two')
const three = container.getElementsByClassName('three')
// console.log(container)

let val;

val = container.childNodes;          //childNodes return you the spaces between the childeren and cocmments also
val= container.childNodes[4]
val = container.childNodes[1].nodeName;
val = container.childNodes[1].nodeType;

val = container.children                //children returns you children only skipping the spaces,comments

// console.log(val)

                    // Here is DOM Traversing

// Tarversing means travelling through something

val = container.firstChild;             //This returns you the first node whether it is comment 
val = container.firstElementChild        // Thi returns the element node not skipping spaces and comments etc


val = container.lastChild; 
val = container.lastElementChild      

// console.log(val)

                    // Events
//Event is the response to the user action

// container.addEventListener('click', ()=>{
//     alert(`You brought mouse near me!`)
// })

// one.addEventListener('mousedown', ()=>{
//     alert(` Here we ares `)
// })
                    // Event Bubling
// const parent_ = document.querySelector('.parent')

// console.log(parent_)

// parent_.addEventListener('click', ()=>{

// })


                //Event Delegation
                let table = document.getElementById('bagua-table');

                let selectedTd;
            
                table.onclick = function(event) {
                  let target = event.target;
            
                  while (target != this) {
                    if (target.tagName == 'TD') {
                      highlight(target);
                      return;
                    }
                    target = target.parentNode;
                  }
                }
            
                function highlight(node) {
                  if (selectedTd) {
                    selectedTd.classList.remove('highlight');
                  }
                  selectedTd = node;
                  selectedTd.classList.add('highlight');
                }