document.getElementById('form_sec').addEventListener('submit' ,(e) =>{

 const food = document.getElementById('food_input').value;

let foods;

if (localStorage.getItem('foods') === null) {
    foods = [];
} else {
    foods = JSON.parse(localStorage.getItem('foods'))
}
const array = foods.push(food);

localStorage.setItem('Fav Cusines', JSON.stringify(foods))

    
alert(`Added to local storage`)

    e.preventDefault()

    console.log(array)
})

// localStorage.clear();