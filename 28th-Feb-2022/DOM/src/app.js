// // Styling 

// const anArray = [
//     {name : 'Adnan', location : 'hunza', age : 30},
//     {name : 'Adnan2', location : 'hunza2', age : 300},
//     {name : 'Adnan3', location : 'hunza3', age : 60},
//     {name : 'Adnan4', location : 'hunza4', age : 10}
// ]

// const checkFilter =anArray.filter((item)=>{
//     return item.age <= 50
// })

// console.log(checkFilter)

// // document.getElementById('main-box').style.background = '#333'

// const getValue = document.getElementById('input').value;

// const btn = document.getElementById('press')

// btn.addEventListener('click',function(e){
//     e.preventDefault()
//         // document.getElementById('main-box').style.background = '#333'
//         // document.getElementById('main-box').style.display = 'none'
//         // document.getElementById('listArea').textContent = 'Task List Here'
//         // document.getElementById('listArea').innerText = 'Task List Here'
//         // document.getElementById('listArea').innerHTML = `<h2 style = " color: red" > Hello i am adnan </h2>`
//         /

//         console.log(getValue.value);





// })


// function getInputValue(e){

//         e.preventDefult()
//         var inputVal = document.getElementById('input').value;

//             console.log(inputVal);

// }




// const gettingValue = document.getElementById('input').value;

// const clickButton = document.addEventListener('click',(e) => {
//     e.preventDefault()
//     const gettingValue = document.getElementById('input').value;    
//     document.getElementById('listArea').innerText = gettingValue

// })




// const clickBtn = document.getElementById('press')
// let getData = document.getElementById('input');
    
// clickBtn.addEventListener('click', (e) => {
//     e.preventDefault()
   
//     if (getData.value !== '') {
//         document.getElementById('textArea').innerHTML += `<h2 id="listArea" class="appearance-none bg-gray-400 border rounded-lg py-2 px-3 text-grey-darker shadow-lg shadow-gray-500 mt-6"  placeholder="Enter Deails "> ${getData.value}</h2>`
//         getData.value = ''
//     } else{
//         alert('filed input section')
//     }

// })

// const switchBtn = document.getElementById('Switch')




// const arrayObj = [
//     {name:'name1', location : 'Hunza', Area:300},
//     {name:'name1', location : 'Hunza', Area:200},
//     {name:'name1', location : 'Hunza', Area:150},
//     {name:'name1', location : 'Hunz2', Area:400},
//     {name:'name1', location : 'Hunza', Area:250},
//     {name:'name1', location : 'Hunza', Area:302},
// ]


// filter 

// const filterArray = arrayObj.filter(function(e){
//         // return e.Area >= 150
//         return e.location  == 'Hunza'
// })   


// Map

// const arrayMap = arrayObj.map(function(e){
    //     return e.location      
// })
// console.log(arrayMap)



// find

// const arrayFind = arrayObj.find(function(e){
//    return e.location === 'Hunz2'
// })



// for each 

// const forEachArray = arrayObj.forEach(function(e){
//     console.log(e.Area);
            
// })

// const anArray = ['adnanOne','adnanTwo','adnanThree','adnanFour']
//         // anArray.forEach(alert)

//     anArray.forEach(function(item,index){
//             alert(`this is ${item} and his index No is ${index}`)
//     })


// const arrayObj = [
//     {name:'name1', location : 'Hunza', Area:300},
//     {name:'name1', location : 'Hunza', Area:200},
//     {name:'name1', location : 'Hunza', Area:150},
//     {name:'name1', location : 'Hunz2', Area:400},
//     {name:'name1', location : 'Hunza', Area:250},
//     {name:'name1', location : 'Hunza', Area:302},
// ]


// arraySome 

// const areaCheck = arrayObj.some(function(e){
//     return e.Area >= 200
// })
// console.log(areaCheck);



// every

// const areaCheck = arrayObj.every(function(e){
//     return e.Area >= 200
// })
// console.log(areaCheck);


// reduce 

// const reduceJason = arrayObj.reduce(function(totalArea,item){
//             return item.Area + totalArea;
// },0)

// console.log(reduceJason);
 

