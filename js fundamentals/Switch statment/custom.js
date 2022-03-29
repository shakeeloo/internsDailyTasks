//SWITCH STATMENT

// const color = 'red';


// switch(color){
//   case 'golden':
//       console.log('color is golden');
//       break;
//  case 'red':
//      console.log('color is red');
//      break;
//  case 'blue':
//      console.log('color is blue');
//      break;
//  default :
//     console.log('not any color is occur');
//     break;
// };


// date functiom for switch statment

// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = 'sunday';
//     break;
//   case 1:
//     day = 'monday';
//     break;
//   case 2:
//     day = 'tuesday';
//     break;
//   case 3:
//     day = 'wednesday';
//     break;
//   case 4:
//     day = 'thursday';
//      break;
//   case 5:
//      day = 'friday';
//      break;
//   case 6:
//      day = 'saturday';
//     break;
              
// }
// console.log(`To day is ${day}`);




//use switch to alert my date of birth

let day = prompt('Enter your Date of birth like (--/--/--)');

let val = 'Rashid Minhas';
let val2 = 'Sara Sani';
let val3 = 'Prince';

switch(day){
  case '9/11/2001','11/9/2001','2001/11/9','9/nov/2001':
    alert(`Happy Birthday Too you dear ${val}`);
    document.write(`Hello, ${val} many many returns of the Day `);
    break;
  case '30/1/2018','1/30/2018','2018/1/30','30/jan/2018':
    alert(`Happy Birthday Too you dear ${val2}`);
    document.write(`Hello, ${val2} many many returns of the Day `);
  case '13/12/1978','12/13/1978','1978/12/13','13/Dec/1978':
    alert(`Happy Birthday Too you dear ${val3}`);
    document.write(`Hello, ${val3} many many returns of the Day `);
    
}

