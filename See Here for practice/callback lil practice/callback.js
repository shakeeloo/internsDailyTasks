let friends = [
    {id: 1, name: 'Mustansir'},
    {id: 2, name: 'Fozia'}
];

function findfr(){
    setTimeout(() => {
        friends.forEach((friend)=>{
            console.log(`${friend.name} is my Friend.....`)
        })
    }, 3000);
}

function addFriend(add, callback){
    setTimeout(() => {
        friends.push(add)
        callback();
    }, 4000);
}

addFriend({id: 3,name:'Fariha'},findfr)