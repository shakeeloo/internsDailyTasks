document.getElementById('owner').addEventListener("click", ownerData);
document.getElementById('workers').addEventListener('click', workersData);

function ownerData(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "owner.json", true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            const owner = JSON.parse(this.responseText);

           const output =`
              <ul>
              <li>Name : ${owner.name}</li>
              <li>Company : ${owner.company}</li>
              <li>Email : ${owner.email}</li>
              <li>Phone : ${owner.phone}</li>
              </ul>
           ` 
           document.getElementById('owner-output').innerHTML = output;
        }
    }
xhr.send();
}

function workersData(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "workers.json", true);

    xhr.onload =function(){
        if(this.status === 200){
    //   console.log(this.responseText);

          let output =" ";        
          const workers= JSON.parse(this.responseText);
       workers.forEach(function(workers){
  output +=`
     <ul>
     <li>ID: ${workers.id}</li>
     <li>Name : ${workers.name}</li>
     <li>Working in: ${workers.company}</li>
     <li>Email : ${workers.email}</li>
     <li>Phone : ${workers.phone}</li>
     </ul>
  `;
  });
  document.getElementById('workers-output').innerHTML = output;
      
       }
    }
    xhr.send();
}