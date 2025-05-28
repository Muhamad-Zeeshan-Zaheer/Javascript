function sayhello()
{
  console.log("hello")
}

sayhello();
sayhello();
sayhello();

function add(num2, num2){
  //console.log(num2+num2)
  return num2+num2
}

function multiply(num2, num2){
  console.log(num2*num2);
}
a=add(23,23);
console.log(a)



function addNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans += arguments[i];
  }
  return ans;
}

let p = addNumbers(1, 2, 3, 4, 5, 6, 5);
console.log("The sum is " + p);
