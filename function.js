//wap to print from 0 to 1000

 //loop
 //for loop
 //for loop syntax
    // for (initialvalue ; condition ;modifier/incrementer wich will change the value){        
//}

for (let count = 0; count <= 1000; count++) {
    console.log(count);
 }
 
 console.log("start loop");
 
 for (let count = 0 ; count <=4;count ++){
    console.log(count)
 };
 console.log("end looop");
 
 let sale = "sale sale"
 for (let count = 0; count <=1000; count++) {
    console.log(sale)
 }
 
 for (let index = 0 ; index <=20; index++){
    if( index % 2 ==0){
        console.log(`${index}is even number`);
    } else {
        console.log(`${index}is odd number`);
    }
 }



 for (let index = 1; index<=10;index++){
    console.log(`5 * ${index} = ${index *5}`);
 }

 function findMultiplicationTable(){
 for (let index = 1; index<=10;index++) {
   console.log(`4 * ${index} = ${index *4}`);
 }
}

function findMultiplicationTable(number, startFrom, endAt){
   for (startFrom; startFrom<= endAt; startFrom++){
      console.log(`${number} * ${startFrom} =${number * startFrom}`);
   }
}

 findMultiplicationTable(10, 6, 8);
findMultiplicationTable(10, 1, 10);

// Arrow function ......................................................................................................................

//function add(a, b) {
  // console.log(a + b);
//}
//add(9 , 10);

const add =(a , b) => console.log(a + b);
add(5 , 10);

const multi =(a , b) => console.log(a * b);
multi(2 , 3);

const divi =(a , b) => console.log(a / b);
divi(888 , 8);

function sum(a ,b) {
   return a + b;
}
let result = sum(1, 9);
console.log(result);

const hashPasword =(password) => {return password + Date.now};

let db_users =[];
const signupUsers =(name, email, password) => {
   db_users.push({
      name:name,
      email:email,
      password: hashPassword(password),
   });
};

signupUsers("name", "hellno@gmail.com","parang678");
console.log(db_users);
