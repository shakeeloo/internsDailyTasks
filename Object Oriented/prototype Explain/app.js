//person constructor

function person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.bithday = new Date(dob);

    this.calculateAge =function(){
        const diff =    Date.now()- this.birthday.gatTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
//get fullname 
person.prototype.getFullName = function(){
    return `${this.firstname}  ${this.lastname}`
}

//get married
person.prototype.getsMaried = function(newlastname){
    this.lastname = newlastname;
}

    const rashid = new person('Rashid','Minhas','November-9-2001');
    const rubba = new person('Rubba','Ghulam','11-09-2002');
    const malik =new person('malik','shah','12/12/2022');
    const sara = new person('sara','khan','11/22/1980');
    console.log(malik);
    console.log(rashid);
    console.log(rubba);
    
    

  
  console.log(rubba.getFullName());
  rubba.getsMaried('Rashid');
console.log(rubba.getFullName());
   
console.log(rashid.getFullName());
rashid.getsMaried('Rubba');
console.log(rashid.getFullName());

console.log(malik.getFullName());
malik.getsMaried('sara');
console.log(malik.getFullName());

console.log(sara.getFullName());
sara.getsMaried('malik');
console.log(sara.getFullName());


