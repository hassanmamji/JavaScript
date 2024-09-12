 // CHAPTER NO : 9-11

// Question No : 01

// var city = prompt("Karachi")

// if(city === "Karachi"){
//     alert("Welcome to city of lights .");
// } 
// else{
//     alert("Welcome to city of lights .");
// }

// Question No : 02

// var gender = prompt("Enter your gender")
// var message;

// if(gender === "male"){
//     message = "Good Morning Sir.";
// } 

// if(gender === "female"){
//     message = "Good Morning Ma’am.";
// }
// alert(message);

// Question No : 03

// var color = prompt("Enter Traffic light color");
// if(color==="Red")
// document.write("Must Stop");
// else if(color==="Yellow")
// document.write("Ready to move");
// else if(color==="Green")
// document.write("Move now");


// Question No : 05


// Question No : 05  ( A )

// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }


// Question No : 05  ( B )

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }


// Question No : 05  ( C )

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true"); 
// } 
// if (c === 13){
//     alert("condition 2 is true"); 
// }
// if (++c < 14){
//     alert("condition 3 is true");
// } 
// if(c === 14){
//     alert("condition 4 is true");
// }


// Question No : 05  ( D )
        
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
    

// Question No : 05  ( E )

// if (true){ 
//     alert("True"); 
// } 
// if (false){
//     alert("False");
// }


// Question No : 05  ( F )

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Question No : 06

// let m1,m2,m3,sum,percentage
// m1=80
// m2=90
// m3=98
// sum=m1+m2+m3
// console.log("total marks" ,sum)
// percentage=sum/3
// console.log('average=',percentage);

// if (percentage > 80 ) {
//     console.log("Grade A" , "Excellent");

// }

// else if (percentage > 70) {
//     console.log("Grade B" , "Good");
// }

// else if (percentage > 60 ) {
//     console.log("Grade B" , "You need to improve");
// }

// else
// console.log("Fail" , "Sorry");


// Question No : 07

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var guess = (prompt("Guess the secret number (between 1 and 10):"));

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, wrong guess. The correct answer was " + secretNumber);
// }


// Question No : 08

// var input = prompt("Enter a number:");

// var number = +input;

// if (!isNaN(number)) {
    
//     if (number % 2 === 0) {
//         alert(number + " is an even number.");
//     } else {
//         alert(number + " is an odd number.");
//     }
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }


// Question No : 11

// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");


// var result;


// if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

//     switch (operation) {
//         case "+":
//             result = firstNumber + secondNumber; break;
//         case "-":
//             result = firstNumber - secondNumber; break;
//         case "*":
//             result = firstNumber * secondNumber; break;
//         case "/":
//             result = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero"; break;
//         case "%":
//             result = secondNumber !== 0 ? firstNumber % secondNumber : "Error: Modulus by zero"; break;
//         default:
//             result = "Error: Invalid operation"; break;
//     }
//     alert(result);
// } else {
//     alert("Invalid input. Please enter valid numbers.");
// }

