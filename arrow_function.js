const sayhello=()=>
{
  console.log("helllo")
}
sayhello();

const add=(a,b)=>{
  return a+b
}
a=add(78,43);
console.log(a)

const objectFunction=()=>{
  return {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name);
      console.log("My age is " + this.age);
    }
  };
}
const person = objectFunction();
person.greet();
