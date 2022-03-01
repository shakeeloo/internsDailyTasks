// const users = [
//     {
//         id : 1,
//         name : 'adnan1',
//         location : 'Hunza1'
//     },
//     {
//         id : 2,
//         name : 'adnan2',
//         location : 'Hunza2'
//     },
//     {
//         id : 3,
//         name : 'adnan3',
//         location : 'Hunza3'
//     },
// ]

// const ids = users.map(function(user){
//         return user.location
// })

// console.log(ids);


// const userData = [
//     {
//         id : 1,
//         detail : 'picture of a white car',
//         Url : 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBjYXJ8ZW58MHx8MHx8&w=1000&q=80' 
//     },
//     {
//         id : 2,
//         detail : 'picture of a white car',
//         Url : 'https://www.usedvwaudi.com/media/blog/az1001/images/featured-image-2885.jpg' 
//     },
//     {
//         id : 3,
//         detail : 'picture of a white car',
//         Url : 'https://hdwallsource.com/img/2014/7/orange-car-pictures-32757-33509-hd-wallpapers.jpg' 
//     },
// ]
 

// const gettingData = userData.map(function(user){
//     return user.Url;
// }) 
// // console.log(userData)



// const myData = gettingData

// for (let i = 0; i < gettingData.length; i++) {
//     // console.log(gettingData[i]);
//     if(i == 0){
//         // console.log(gettingData[i]);
//         const img = document.getElementById('displayArea')
//             img.setAttribute("src", gettingData[i])
//     }
//     else if(i == 1){
//         // console.log(gettingData[i]);
//         const img = document.getElementById('displayArea2')
//             img.setAttribute("src", gettingData[i])
//     }
// }



// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     },
//     {
//       "color": "red",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 3
//     },
//     {
//       "color": "white",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 10
//     }
// ]

// const newArray = 
//     {
//         "color": "brown",
//       "type": "VXR",
//       "registration": new Date('2018-03-03'),
//       "capacity": 4
//     }
 

// const pushingArray = cars.unshift(newArray)


// const newArray2 = 
//     {

//         "color": "black",
//       "type": "Benz",
//       "registration": new Date('2018-03-03'),
//       "capacity": 2

//     }

// const pushingArray2 = cars.push(newArray2)

// const gettingType = cars.map(function(getType){
//     return getType.type
// })

// const arrayToString = gettingType.toString()



    
// document.getElementById('textarea').innerText = `${arrayToString}`

// const anArray = ['name1','name2','name3','name4']

// for(let key of anArray){
//         console.log(key);
// }



// x = 0

// while(x < 20){
//     x++
//     console.log(x)
// }
        


// let x = 20

// do{
//     console.log(`Number ${x}`)
//     x++
// }while( x < 10)




// const array = ['name1','name2','name3','name4']

// array.forEach(function(name,index){

//     console.log(`${name} : Index is ${index}`);

// })



// const name1 = 'adnan'

// const change = parseInt(name1)

// console.log(typeof(change));


// const number = 20.2

// const check = Math.ceil(number)
// const check = Math.round(number)
// const check = Math.sqrt(number)
// const check = Math.pow(30,2)


// console.log(check);



const anyAray  