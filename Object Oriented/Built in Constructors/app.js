//built in constructors ma ham kese string ya kese number ko ya kese aur type ko us ka object type ma 
//convert karna ka leya use karta han jaisa ke string ko string object ma  convert kar sakhta han


//string
const name = "Ali";                //string
const name2 =new String('Ali');   //string to object 


//Number
const num = 40;                 //Number
const num2 = new Number(40);   // Number to object


//Object
const ali ={name : 'Ali'};               // both condition are same, dosn't difference between both condtion both condition are object 
const ali2 =new Object({name :'Ali'});

//Array
const arr =[1,2,3,4];             //Also at this condtion both condition are like same because an object is the advance version of Array that's why the conditions are same
const arr2 =new Array([1,2,3,4]); 


//boolean
const bool = true;             //boolean
const bool2 =new Boolean(true); //boolean to object

//function

const getsum = function(x, y){
    return x + y;
}                                                       //both condition are still function dosn't change
const getsum2 =new Function('x', 'y', 'return 1 + 2' )

//console output
console.log(getsum2(1+2));             
console.log(typeof getsum2); 



