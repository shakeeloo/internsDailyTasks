const http = new easyHTTP;
//get post

// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts){
//     if(err){
//         console.log(err)
//     }else(
//         console.log(posts)
//     )    
// });

//single post
//this is a function for a create or showing of sepacific post;
// http.get('https://jsonplaceholder.typicode.com/posts/10',
//  function(err, post) {                  
//    if(err){
//        console.log(err);
//    }else{
//        console.log(post);
//    }
// })



//create post
 const data =[{
    title:'custom post',
    body:'this is a user create post by Rashid Minhas'
},
{
    title:'custom post',
    body:'this is a user create post by Rashid Minhas'
}
];

http.post('https://jsonplaceholder.typicode.com/posts', data, 
function(err, post) {
  if(err){
      console.log(err);
  }else{
      console.log(post);
  }
})



//update post

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
// function(err, post){
// if(err){
//     console.log(err);

// }else{
//     console.log(post);
// }
// });



// http.delete('https://jsonplaceholder.typicode.com/posts/1',
// function(err, Response){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(Response);
//   }
// });