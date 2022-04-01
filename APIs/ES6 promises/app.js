const posts =[
{ title: "post one is here", body :" hello developers"},
{title : "post two is here", body :" hello users"}
];

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
           
        const error = false;
        if(!error){
            resolve();
        }else{
          reject('Error : something went wroung');
        }
        }, 1000);
    })
}

function getPost()  {
    setTimeout(function(){
        let output ="";
        posts.forEach(function(post) {
      output +=`<li>title : ${post.title} <br>body : ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

createPost({title:"post three is here", body :"hello everyone"},)
.then(getPost)
.catch(function(err){
console.log(err);
})

