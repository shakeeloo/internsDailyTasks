//add event listen
document.querySelector('#button1').addEventListener('click', gettext);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getExternal);

//get text

function gettext() {
fetch('taxt.txt')
.then(function(res){
    return res.text();
})
.then(function(data){
// console.log(data);
document.querySelector('#output').innerHTML = data;
})
.then(function(err){
 console.log('Error: something went wroung')
})
}


//get Json data

function getJson() {
    fetch('data.json')
    .then(function(res) {            //function ka andar respose (res) deya ha jo ke ak paramater ka toor pa deya gaya ha
       return res.json();         //is ma jo file mana fetch keya ha woo json type tha is leya mana res.json deya haj jo ke prototype ma save hoga aur run hoga
    })
    .then(function(data){
    //    console.log(data)
   let output= "";
   data.forEach(function(post){
     output +=`<li>* Title: ${post.title} <br>* body : ${post.body}</li>`;
   });
   document.querySelector('#output').innerHTML = output;
    })
    .then(function(err) {
        console.log("Error: something went wroung")
    })
}

function getExternal() {
     fetch('https://api.github.com/users')
     .then(function(res){
        return res.json();
     })
     .then(function(data){
    //   console.log(data);
    let output ="";
    data.forEach(function(post){
      output +=`<li>* Login : ${post.login} <bt>* Id: ${post.id}</li>`
    })
    document.querySelector("#output").innerHTML =output;
     })
     .then(function(err){
        console.log('Error: something went wroung')
     })
}
