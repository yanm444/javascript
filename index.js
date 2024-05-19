console.log("sure");

// VARIABLE ...

//CONTAINER / BOX - MEANS IT CAN BE STORED...

greetings = "Nameste";
name = "troller";
 age ="16";

console.log(greetings);
console.log(name);
console.log(age);

console.log(greetings,name);

fullname = "yan magar";

console.log(fullname);

//RESERVED KEYWORDS

// cons ="sure"
// for ="rem"
// if="ek";

fullname ="shyam bahadur";

eutaofficekoaddress ="balaju";

euta_office_ko_address ="sundhara"; // snakecase

eutaOfficeKoAdress = "korea ko seaol"; //camelcase

console.log(euta_office_ko_address);

// variable ma kk kur Rakhna milxa teslai data types..

productPrice = 100;
tarkariKoPrice = 10.8;

ismarried= false;

/*
datatypes
        1.string;
        2.Number
           integer
           aloat/double
        3.Boolean
           true/false
*/

// ?variable banaune tarika

// const                                                                               
// let
// var use nagareko ramro

var laptopBrand="hp";

console.log("laptop ko brand", laptopBrand);

const PI = 3.14;

console.log("PI ko value" , PI);

let color;
console.log("before color instilization",color);
color="blue";
console.log("after color instilizaiton",color);

let names =["yan, bishesh, santosh"];
// array .. collection of similar data types //


let oppo ="oppo";

let brands =["samsung, apple, android",oppo];


console.log(brands);

let schoolName = "karnali School";
let schoolLocation = "seol";
let schoolEstablished = "1670";

let school1Details = ["karnali, seol,", 1670];

// object concept..

//*object
//  let <object_name> = {
//        <key> : <value> ,
//         <property> : <value> ,
//            <attribute> : <value> ,
// }

let school2Details = {
   schoolName:"Karnali School",
   schoolLocation:"seol",
   schoolEstablished:"1670",
}
console.log(school2Details);

let room1 = {
   color: "white",
   doorcount: 1 ,
   dimensions: {
      length:{
         value: 10,
         unit: "Meter",
      },
      width:{
            value:30,
            unit: "feet",
         },         
      },
   };

   let courses ={
      class:"web design",
      html:"creating web",
      css: " designing",
      javascript: "running ",
      classDuration:"1 hour",
   };

   // web design class ma create garna design garna sikayeko xa

   console.log(courses.class + " class ma " + courses.html + " create garna " + courses.css + " design garna " + courses.javascript + " sikayeko " + courses.classDuration + " xa ");

   let brand ={
      classic:"addidas",
      new:"louis vuitton",
      old:"nike",
   };

   // brands ko bare

   console.log(brand.classic + " brands " + brand.new + " ko " + brand.old + " bare ");

   let footballPlayer ="ronaldo";
   let basketballPlayer ="kobe";
   let volleyballPlayer ="miles";

   let player1Details =["ronaldo", "kobe ", "miles"];
   
   console.log("best player",player1Details[0]);
   console.log("best player",player1Details[1]);
   console.log("best player",player1Details[2]);

   let player2Details ={
      footballPlayer:"ronaldo",
      basketballPlayer:"kobe",
      volleyballPlayer:"miles",
   };

   console.log(player2Details);

let colors={
   color:"white",
   hexValue:"#00000",
};

// white color ko hexvalue chai #00000

console.log(colors.color + " color ko hexvalue ");

//ternary operator

console.log(`${colors.color} color ko hexvalue `);

let person = {
   name:"bob",
}

person.age =131;

console.log(person);

let persons =["shaq","lebron"];

persons[0] ={
   address:"los angelos",
   weight:77,
};

persons[2] ="kobe";

console.log(persons);

let person0 = {
   name:"daniel",
   age:"24",
   hobbies:["playing" , "wokking" , "travelling"],
};
//daniel ko age 24 ho ra hobby playing working travelling ho

console.log(`${person0.name} ko age ${person0.age} ho ra hobby ${person0.hobbies} ho `);

console.log("sum of 1 + 1 =", 1 + 1 );
console.log("sum of 8 + 8 =", 8 + 8 );
console.log("sum of 6 + 1 =", 6 + 1 );

// DRY donot repeat yourself
// Function

// function <functionname=>{
//  task haru lekhna   
// }

//parameter

function sum(num1, num2) {
   //let num1=1
   console.log(`sum of ${num1} + ${num2} = ${num1 + num2}`);
} 

//function call chai function ko name dine

sum();
sum(1,2);
sum(9,81);
sum(2,0);

function calculateRectangleArea(length, width){

   let area=length*width;
   console.log("area =", area)

}

let length =10;
let width =14;

calculateRectangleArea(length,width);

let db_users = [{name: "name", email: "email"},"password"];

function signupUsers(name, email) {
   console.log("add user to ad_user");
   let user ={
      name: name,
      email:email,
   }
   db_users[db_users.length] = user;

   db_users.push(user);

   console.log(db_users);
}
signupUsers("santosh", "santosh@gmail.com" );
signupUsers("yan", "yan0@gmail.com");

// operator

console.log(1+2); //arithmetic operator
console.log(1*3);
console.log(10%13); //modulus

let number =100
number = number +10 ;
number+= 30 ;
console.log(number);

//post increment

let agee = 21;
console.log(agee++); // post increment
console.log(agee);

console.log(++agee); //pre increment
