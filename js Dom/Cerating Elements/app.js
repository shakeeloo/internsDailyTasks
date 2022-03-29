const li = document.createElement('li');

// class for li

li.className ="collection";

//id for li 
li.id ="list-collection";

// add attribute to li 
li.setAttribute('title', 'New Task');

// add text by append
li.appendChild(document.createTextNode('Hello facebook'));

// create a tag in li
const link = document.createElement('a');
//class
link.className ='delete';
//add icon
link.innerHTML ='<i class ="fa fa-facebook"></i>';
// append link into li
li.appendChild(link);
//add li in to ul
document.querySelector('ul').appendChild(li);


console.log(link)
console.log(li);


//..................................................................................

// const heading = document.createElement('h1');
// heading.className ="heading";
// heading.style.fontSize ="2rem";
// heading.style.textAlign ="center";
// heading.style.padding ="3   0px 0px 0px 0px"
// heading.innerHTML ="THAT IS MY FIRST PICTURE In JS";
// heading.style.color ="#e47911";
// document.querySelector('body').appendChild(heading);
// let picture=document.createElement('img');
// picture.className ='image';
// picture.setAttribute('src','images/13.jpg');
// picture.setAttribute('value','This is my first js img');
// picture.style.height='30vh';
// picture.style.width ="95%";
// picture.style.backgroundPosition ="center";
// picture.style.backgroundSize ="cover";
// picture.style.outline ="10px solid #e47911";
// picture.style.margin ="30px";
// document.querySelector('body').appendChild(picture);

// console.log(heading);
// console.log(picture);



//.................................................................................


// const div = document.createElement('div');
// div.className ='content';

// const h2 =document.createElement('h2');
// h2.className ='heading';
// h2.innerText ="Hello Google";
// h2.style.textAlign ='center';

// const img = document.createElement('img');
// img.className ='picture';
// img.setAttribute('src','images/3.jpg');


// document.querySelector('#test').appendChild(div);
// div.appendChild(h2);
// div.appendChild(img);
// console.log(div);
// console.log(h2);
// console.log(img);







 