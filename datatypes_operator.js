//data types
//numbers

let num=3;
let num2=87.12;
console.log(num+num2);
//strings
const name="Muhammad Zeeshan Zaheer ";
const lastName="Khan";
console.log(name+lastName);
console.log(name)
//booleans
let isTrue=true;
console.log(isTrue+23);
console.log(isTrue);
//null
let isNull=null;
console.log(isNull);
//undefined
let isUndefined=undefined;
console.log(isUndefined);

//objects: are different in javascript while in other languages we make classes then objects

const person={
    name:"Muhammad Zeeshan Zaheer",
    age:23,
    isStudent:true,
    hobbies:["reading","writing","coding"],
    address:{
        city:"Lahore",
        hometown:"Pakpattan",
        country:"Pakistan",
    }
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent)

//0 & 1
if(1){
    console.log("0 is true");
}
else if(0) {
    console.log("0 is false"); //this means that

}
console.log(typeof person);
