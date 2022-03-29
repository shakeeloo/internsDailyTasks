const personprototypes = {
    greeting: function(){
        return`Hello there ${this.firstName} ${this.lastName}`;
    },  
    getsMaried: function(newlastName){
        this.lastName = newlastName;
    }
}

const rashid =Object.create(personprototypes);
rashid.firstName ='Rashid';
rashid.lastName ='Minhas';
rashid.age =21;

const rubba =Object.create(personprototypes);
rubba.firstName = "Rubba";
rubba.lastName = "Ghulam";
rubba.age =20;

//output
// console.log(rubba)
rashid.getsMaried('Rubba');
rashid.getsMaried('Sara');    //is tareeqa sa agar kara too uper lastname discribe nai ha to be output aa jaya gee remamber that
console.log(rashid);
console.log(rashid.greeting());
