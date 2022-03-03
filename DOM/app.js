var element;

element = document.baseURI;
        //extracting element from HTML document through varios ways
// element = document.getElementById("section");
// element = document.getElementsByClassName("container")[0];
// element = document.getElementsByTagName("p")[8];
// element = document.getElementsByName("opinion");
// element = document.getElementsByName("opinion")[0]

                // Extracting the HTML,text and attributes from the document

element = document.getElementById("section").innerText
element = document.getElementById("section").innerHTML
element = document.getElementById("section").getAttribute("id")
element = document.getElementById("section").getAttributeNode("class")
element = document.getElementById("section").getAttributeNode("style").value
element = document.getElementById("section").attributes;
element = document.getElementById("section").attributes[2].value;
element = document.getElementById("section").attributes[2].name;     
 
                //Setting innerText, innerHTML, Attributes and removing the attributes
//This property changes the text but desn't consider the html tag e.g h1 or h2
//we use innerHTML for that purpose

element = document.getElementById("header").innerText =  "Capitals"        
element = document.getElementById("header").innerHTML = "<h1>Capitals</h1>"   
                //Setting Attributes
element = document.getElementById("header").setAttribute("class","paragraph")
element = document.getElementById("header").getAttribute("class")

element = document.getElementById("header").setAttribute("style","color:yellow")
element = document.getElementById("header").getAttribute("style")
element = document.getElementById("header").setAttribute("style","background-color : blue")
element = document.getElementById("header").getAttribute("style")

element = document.getElementById("header").attributes;
element = document.getElementById("header").attributes[2].value = "font-family : sen-serif"
element = document.getElementById("header").attributes[1].value = "intro"
element = document.getElementById("header").attributes[1].value


element = document.getElementById("header").getAttribute("style")
element = document.getElementById("header").removeAttribute("style")

                        // querySelector and and querySelectorAll
                        
//querySelector and querySelectorAll are shorthand for all the methods we used above
//if you use querySelector and querySelectorAll, means u can use them for class,id or tag whatever you wish
//to get, only need to put# if getting id and . if class

//querySelector always returns the first element it gets, while querySelectorAll returns all the vlaues 
// found in th form of array

element = document.querySelector("#footer")
element = document.querySelector("h3")
element = document.querySelectorAll("h3")
// element = document.querySelectorAll("h3")[3].innerHTML
element = document.querySelectorAll(".tehreer")
element = document.querySelectorAll(".tehreer")[0].innerHTML
// if we intend to get any tag inside any class or ID, we can mention that like this

element = document.querySelectorAll("#section h1")[0].innerHTML
// we can get any element from HTML page cia this method

                        //styling CSS via DOM methods

                         
 document.querySelector("#section").style.color = "orange";  //this is used for styling the lement through
element = document.querySelector("#section").style.color;     //Javascript

document.querySelector("#section").className = "fine"           //THis is used for creating a new class fir
element = document.querySelector("#section").className;         //the element and 

document.querySelector("#section").classList = "that";     //here list of classes have been created for 
element = document.querySelector("#section").classList[1];      //a same element

//we can add or remove class in and from the list

document.querySelector("#section").classList.add("them","this")      
element = document.querySelector("#section").classList; 

document.querySelector("#section").classList.remove("that")      
element = document.querySelector("#section").classList; 

// console.log(element)
                //Copying Bard to Understand the concepts used in his code

// document.getElementsByClassName 

const items = document.getElementById('header')

console.log(items)
// console.log(items[0])
items.style.color = 'tan';
items.innerText = "I Love these Cities";               // You can use both methods to change the content
items.textContent = "My Favourit Cities"
items.innerHTML = "<span>I Like Writting About Historical Cities</span>"
items.style.fontWeight = "bold";
items.style.padding = "1.5rem";
//items.style.display = "none"                    //Display None will disappear the selected element

                // QuerySelector
// var goesHere = document.querySelector('#footer');
goesHere = document.querySelectorAll('li')

goesHere.style.color = 'red'


console.log(goesHere)






