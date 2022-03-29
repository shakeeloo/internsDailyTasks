// class person{   
//     constructor(firstName, lastName){
//         this.firstName =firstName;
//         this.lastName =lastName;
//     }
//     greeting(){
//         return`Hello there ${this.firstName} ${this.lastName}`;
//     }
// }

// //sub class

// class customer extends person{                             //in this line customer is sub class and person is extends class which is extend the uper person class  
//     constructor(firstName,lastName,phone,membership){
//         super(firstName,lastName);                      //super keyword are calls the uper fname and lname which is located in person class

//         this.phone = phone;
//         this.membership =membership;
//     }
// }

// const sara = new customer('sara','malik','0992-535-353-4','standard');

// console.log(sara);
// console.log(sara.greeting());





// next Example

class carData{
    constructor(name, modal){
        this.name =name;
        this.modal =modal;
    }
    greeting(){
        return `${this.name} is the best car in the world`;
    }
}
//sub classes

class car extends carData{
    constructor(name,modal,owner,price){
        super(name, modal);
        this.owner =owner;
        this.price =price;
    }
}

//create a user
const data1 = new car('mastang','2022','Rashid Minhas','50000000');
const data2 =new car('marcides','2009','Rubba','400004040');

//soo the output is
//data1
console.log(data1);
console.log(data1.greeting());

//data2
console.log(data2);
console.log(data2.greeting());