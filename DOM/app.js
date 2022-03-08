// var element;

// element = document.baseURI;
//         //extracting element from HTML document through varios ways
// // element = document.getElementById("section");
// // element = document.getElementsByClassName("container")[0];
// // element = document.getElementsByTagName("p")[8];
// // element = document.getElementsByName("opinion");
// // element = document.getElementsByName("opinion")[0]

//                 // Extracting the HTML,text and attributes from the document

// element = document.getElementById("section").innerText
// element = document.getElementById("section").innerHTML
// element = document.getElementById("section").getAttribute("id")
// element = document.getElementById("section").getAttributeNode("class")
// element = document.getElementById("section").getAttributeNode("style").value
// element = document.getElementById("section").attributes;
// element = document.getElementById("section").attributes[2].value;
// element = document.getElementById("section").attributes[2].name;     
 
//                 //Setting innerText, innerHTML, Attributes and removing the attributes
// //This property changes the text but desn't consider the html tag e.g h1 or h2
// //we use innerHTML for that purpose

// element = document.getElementById("header").innerText =  "Capitals"        
// element = document.getElementById("header").innerHTML = "<h1>Capitals</h1>"   
//                 //Setting Attributes
// element = document.getElementById("header").setAttribute("class","paragraph")
// element = document.getElementById("header").getAttribute("class")

// element = document.getElementById("header").setAttribute("style","color:yellow")
// element = document.getElementById("header").getAttribute("style")
// element = document.getElementById("header").setAttribute("style","background-color : blue")
// element = document.getElementById("header").getAttribute("style")

// element = document.getElementById("header").attributes;
// element = document.getElementById("header").attributes[2].value = "font-family : sen-serif"
// element = document.getElementById("header").attributes[1].value = "intro"
// element = document.getElementById("header").attributes[1].value


// element = document.getElementById("header").getAttribute("style")
// element = document.getElementById("header").removeAttribute("style")

//                         // querySelector and and querySelectorAll
                        
// //querySelector and querySelectorAll are shorthand for all the methods we used above
// //if you use querySelector and querySelectorAll, means u can use them for class,id or tag whatever you wish
// //to get, only need to put# if getting id and . if class

// //querySelector always returns the first element it gets, while querySelectorAll returns all the vlaues 
// // found in th form of array

// element = document.querySelector("#footer")
// element = document.querySelector("h3")
// element = document.querySelectorAll("h3")
// // element = document.querySelectorAll("h3")[3].innerHTML
// element = document.querySelectorAll(".tehreer")
// element = document.querySelectorAll(".tehreer")[0].innerHTML
// // if we intend to get any tag inside any class or ID, we can mention that like this

// element = document.querySelectorAll("#section h1")[0].innerHTML
// // we can get any element from HTML page cia this method

//                         //styling CSS via DOM methods

                         
//  document.querySelector("#section").style.color = "orange";  //this is used for styling the lement through
// element = document.querySelector("#section").style.color;     //Javascript

// document.querySelector("#section").className = "fine"           //THis is used for creating a new class fir
// element = document.querySelector("#section").className;         //the element and 

// document.querySelector("#section").classList = "that";     //here list of classes have been created for 
// element = document.querySelector("#section").classList[1];      //a same element

// //we can add or remove class in and from the list

// document.querySelector("#section").classList.add("them","this")      
// element = document.querySelector("#section").classList; 

// document.querySelector("#section").classList.remove("that")      
// element = document.querySelector("#section").classList; 

// // console.log(element)
//                 //Copying Bard to Understand the concepts used in his code

// // document.getElementsByClassName 

// const items = document.getElementById('header')

// console.log(items)
// // console.log(items[0])
// items.style.color = 'tan';
// items.innerText = "I Love these Cities";               // You can use both methods to change the content
// items.textContent = "My Favourit Cities"
// items.innerHTML = "<span>I Like Writting About Historical Cities</span>"
// items.style.fontWeight = "bold";
// items.style.padding = "1.5rem";
// //items.style.display = "none"                    //Display None will disappear the selected element

//                 // QuerySelector
// // var goesHere = document.querySelector('#footer');
// goesHere = document.querySelectorAll('li')

// goesHere.style.color = 'red'

// // console.log(goesHere)

                //EventListnerMethods
//Mouse Events: onClick, ondblClick, onmouseleave, onmouseout, onmouseup, onmouseenter, onrightClick, 
//onmouseHover
//Keyboard Events: Keypress, Keyup
//window Events : load, unload, resize, scroll

// var eVent = document.querySelector("#footer")
// var eVent2 = document.querySelector("#section")
// var eVent3 = document.querySelector("#nav")

// eVent.onclick = abc;

// function abc(){
//         eVent.style.color = "blue"
// }

// eVent2.onmouseleave = xyz;

// function xyz(){
//         eVent2.style.backgroundColor = "crimson"
// }

                // addEventListener

//This is more usefull in dealing with Events, through which you can use more Events at a time, this is the 
// useful way of using Events

//eVent.addEventListener(event, function, useCapture)........ this is the syntax
//fucntion can be called or declared right where it has to be used

// eVent2.addEventListener("dblclick", jkl);

// function jkl(){
//         eVent2.style.border = "3px solid yellow"
// };

// eVent3.addEventListener("keypress", function(){
//         eVent3.style.bakgroundColor = "green"           //by default the useCapture is false and the first
// },true)                                                      // and Event will be called for the first called function
// eVent3.addEventListener("keypress", function(){         // By adding true, Event will be called for the parent 
//         eVent3.style.border = "10px solid yellow"       //and then for the child
// },true)

//Methods for removing EvnetListner

// eVent3.addEventListener("mouseleave", mno)
// eVent3.addEventListener("onclick",pqr)


// function mno(){
//         eVent3.style.bakgroundColor = "purple"
// };
// function pqr(){
//         eVent3.removeEventListener("mouseleave")
// }


// One General Example'

// let val;

// const uOrdered = document.querySelector("ul.list")
// const listItem = document.querySelector("li.hobbies")

// val = uOrdered;
// val = listItem
// //Get ChildNodes

// val = uOrdered.childNodes             //childNodes return everything it founds in the HTML whether it is line 
// val = uOrdered.childNodes[5]           // or comment
// val = uOrdered.childNodes[5].nodeName;
// val = uOrdered.childNodes[5].nodeType;    //nodeType has seperate value for each type e.g. comment,text etc
                    
// //Get Childeren 
//  val = uOrdered.children;             
// val = uOrdered.children[5]   
// console.log(val)

                //Creating HTML element by Javascript
//Creating li
// const li = document.createElement('li')

// //Adding Class
// li.className = 'hobbies';

// //Adding Id 
// li.id = 'iede'

// //Adding an attribute
// li.setAttribute("style", "color : white")

// li.appendChild(document.createTextNode("Night"))

// document.querySelector(".list").appendChild(li)



                //...............Replacing a DOM element.............

// const extisting = document.querySelector('li.hobbies')

// const newHob = document.createElement("li")
// newHob.appendChild(document.createTextNode("Learning"))

// const list = document.querySelector('ul.list')
// list.replaceChild(newHob, extisting)

                //...........Again (Correct this ).........
const parent = document.querySelectorAll('#new')[1]

const oldOne = parent.querySelector('ul.list:first-child')

const newOne = document.createElement('li')
newOne.appendChild(document.createTextNode('Taking the medicines'))

parent.replaceChild(newOne, oldOne)

console.log(parent)
console.log(oldOne)

                //...........Removing DOM element..............

// const parent = document.querySelector('#new')

// const toRem = parent.children[0];

// parent.removeChild(toRem)

// console.log(toRem)
                    //...........Again

// const exis = document.querySelector('.list')
// const rem = exis.children[1];
// exis.removeChild(rem)

// console.log(exis)
// console.log(rem)
// console.log(exis.children)


                //...........Inserting a new value to the DOM value...........







                //..............Dealing with Classes abd Attributes...........

// const lis = document.querySelector('li.hobbies:first-child')
// link = lis.innerHTML = document.createElement('a')
// link.setAttribute('href','https://gilgit.app/')
// link.className = 'flex items-center py-3 hover:curser';
// link.setAttribute('title','gilgitApp')
// let val;
// val = link.hasAttribute('title')
// link.removeAttribute('title')
// link.classList.add('task')
// link.classList.remove('flex')



// console.log(lis)
// console.log(link)
// console.log(val)
// console.log(link.classList)
                            //...........AGIAN...............

// const makeIt = document.querySelector('div.city-portion:first-child')
// head = makeIt.querySelector('h1')
// nogh = head.innerHTML = document.createElement('span')
// nogh.appendChild(document.createTextNode('...........Capital City of Britain'))
// nogh.setAttribute("style", "color : blue")
// nogh.setAttribute('href','https://www.lesmills.com/ae/')
// let val;
// val = nogh.hasAttribute('style');
// val = nogh.hasAttribute('class')
// nogh.classList.add('this')
// nogh.className = " that their them"
// nogh.removeAttribute('href')
// nogh.classList.remove('their')


// // console.log(makeIt)
// // console.log(head)
// console.log(nogh)
// console.log(val)
// console.log(nogh.classList)

