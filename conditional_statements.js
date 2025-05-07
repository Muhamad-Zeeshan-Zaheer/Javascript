const age=1;
if(age>=18){
    console.log("You are an adult.");
}
else if(age>=98){
  console.log("You are a senior citizen.");
}
else{
    console.log("You are a minor.");
}
// Output: You are a minor.

//ternary operator
age>=18 ? console.log("You are an adult.") : console.log("You are a minor.");


//switch statement
const day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
