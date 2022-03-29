//this is simply object 
// const user ={
//     name :'Rashid Minhas',
//     age :"30",
// }
// console.log(user);



//Now we can use this keyword on this object 

function person(name, age, from){
    this.name = name;
    this.age = age;
    this.from = from;
}
                                          //hama agar ak he object ka andar like different name yaa same value chaheya to ham this keyword ko use kar sakhta han
const rashid = new person('rashid','30','Hunza');
const minhas = new person('Minhas', '40', 'Hunza');

console.log(minhas);
console.log(rashid);



 
