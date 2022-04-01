document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //create xhr 
  const xhr = new XMLHttpRequest();

  //open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
      // console.log('READYSTATE', xhr.readyState);
      if(this.status === 200){
        // console.log(this.responseText);
       const output = document.getElementById('output');
       output.innerHTML =`<h1>${this.responseText}</h1>`;
      }
  }

  xhr.onprogress = function(){
    // console.log('EADYSTATE', xhr.responseText);
  }
  xhr.onerror =function(){
      console.log('error is found',xhr.responseText);
  } 
  
  
  //readystate values
  //0. request not initialized
  //1. server connection  established
  //2. request received
  //3. processing request
  //4. request finished and response is ready

  //HTTP statues
  //200. "OK";
  //403. "forbidden";
  //404. "Not found";
xhr.send();
}
