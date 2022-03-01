// const getUl = document.querySelector('ul')

// const childernCheck = getUl.children

// childernCheck[3].textContent = 'Hello Boy'
// childernCheck[3].id = 'more'
// // console.log(childernCheck[3].);
// // console.log(getUl.firstChild);
// console.log(getUl.childElementCount);




// const li = document.createElement('li');

// li.className = 'listItem';
// li.id = 'liID';
// li.setAttribute('title','ListItems');
// li.appendChild(document.createTextNode('Hi i am Adnan'))

// document.querySelector('#ul-list').appendChild(li)


const newLi = document.createElement('li');
newLi.setAttribute('title','New title');
newLi.appendChild(document.createTextNode('Adnan Here'));
newLi.className = 'relative block border bg-gray-600 rounded-xl p-4 border-grey';
document.querySelector('#ul-list').appendChild(newLi);


console.log(newLi);
