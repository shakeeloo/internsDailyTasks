class person{
    constructor(firstName, lastName,dob){
        this.firstName =firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting(){
        return`Hello there ${this.firstName} ${this.lastName}`;
    }
    getsmarried(newlastName){
    this.lastName = newlastName;
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const rashid = new person('Rashid','Minhas','11/09/2001');

//get married
rashid.getsmarried('Rubba');
//output
 console.log(rashid);        
 console.log(rashid.greeting());  //greeting
 