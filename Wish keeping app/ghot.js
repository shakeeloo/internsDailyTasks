const container = document.getElementById('container')
const whole_container = document.getElementById('whole_container')
// const wish_list = document.getElementById('wish_list')
// const wish = document.getElementsByClassName('wish');
// const todo = document.getElementsByClassName('todo');
// const amend = document.getElementsByTagName('button')[0];
// const fulfilled = document.getElementsByTagName('button')[1];
const write = document.getElementById('write');
const submit = document.getElementById('sub');
// const rec_here = document.getElementsByClassName('rec_here');
// const filled = document.getElementById('filled')
// const ul = document.getElementsByTagName('ul')
// const li = document.getElementsByTagName('li')

// console.log(amend.innerHTML)

submit.addEventListener('click', abc)

    
function abc(){

    const val = write.value;
    if(!val){
        alert('Gini says, Say your Wish')
        return;
    }
}

const wish_sec = document.createElement('div')
wish_sec.classList.add('wish_sec')

const wish_list = document.createElement('div')
wish_list.classList.add('wish_list')

const wish = document.createElement('div')
wish.classList.add('wish')

const rec_here = document.createElement('input')
rec_here.classList.add('rec_here');
rec_here.type = 'text';
rec_here.value = val;
rec_here.setAttribute.placeholder = 'Our list of Wishes'


wish.appendChild(rec_here)

const todo = document.createElement('div')
todo.classList.add('todo')

const amend = document.createElement('button')
amend.classList.add('amend')

const fulfilled = document.createElement('button')
fulfilled.classList.add('fulfilled')

todo.appendChild(amend)
todo.appendChild(fulfilled)

wish_list.appendChild(wish)
wish_list.appendChild(todo)

wish_sec.appendChild(wish_list)

const filled = document.createElement('div')
filled.classList.add('filled')

const uList = document.createElement('ul')
const list = document.createElement('li')

uList.appendChild(list)
filled.appendChild(uList)

whole_container.appendChild(wish_sec)
whole_container.appendChild(filled);

input.value = "";

