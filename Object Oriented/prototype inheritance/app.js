//person constructor

function person(firstname, lastname){
    this.firstname =firstname;
    this.lastname =lastname;
}

//Greeting 
person.prototype.greeting = function(){
    return `Hello there ${this.firstname} ${this.lastname}`;
}


//create person

const person1 = new person('Rashid', 'Minhas');
const person2 =new person('Rubba', 'Ghulam');


//output
 console.log(person1.greeting());
console.log(person2.greeting());



//create a customer

function customer(firstname,lastname,phone,membership){
    person.call(this, firstname, lastname);

 this.phone =phone;
 this.membership =membership;
}

// for getting of customer fullName;
customer.prototype.getFullName =function(){
    return`${this.firstname} ${this.lastname}`;
}



//inherit the person prototype methods
customer.prototype = Object.create(person.prototype);
customer.prototype.constructor = customer;
//create customer;
const customer1 = new customer('Rashid','Minhas','3434334-34-34-34','standerd');

//create greeting for customer
customer.prototype.greeting =function(){
    return`Hello there ${this.firstname} ${this.lastname} wellcome to over Company`;
}

//get full details
customer.prototype.getDetails =function(){
    return`Hello there ${this.firstname} ${this.lastname} your phone number is ${this.phone} and your membership are ${this.membership}`;
}

//output

console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.getDetails());