const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

//let suppose there is function
function print(n){
    console.log(n);
}
print("Hello, World!");
students.forEach(print);

students.forEach((val)=>console.log(val));



number=[1, 2, 3, 4, 5];
// Using forEach to print each number
number.forEach((num) => {
    console.log(num);
});

num=number.find((num) =>(num==4))
console.log(num); // Output: 4
