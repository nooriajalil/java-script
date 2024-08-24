// qno1
// var now = new Date();
// console.log(now);

// qno2
// var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
//   // Get the current date
//   var currentDate = new Date();
//   // Get the current month (0-based index, so January is 0, February is 1, etc.)
//   var  currentMonthIndex = currentDate.getMonth();
  
//   // Get the month name using the index
//   var  currentMonthName = monthNames[currentMonthIndex];
  
//   // Alert the current month name
//   alert(currentMonthName);

//   qno3
// var dayNames = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// console.log(currentDayIndex);

// var currentDayName = dayNames[currentDayIndex]
// alert(currentDayName);


// qno4
//  var dayOfWeek = prompt("Enter a day");
//  switch (dayOfWeek) { 
// case "sunday" , "saturday":
//  alert("it a fun day");
//  break;
//  default:
//  alert("it a cool day") }

// qno5
// var  date = new Date().getDate();
// console.log(date);


// // Check if the date is less than 16
// if (date < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// qno6
var hour = new Date().getHours
if(hour<12){
    alert("It's AM");
} else {
  alert("It's PM");
}

// qno7
let laterDate = new Date(2020, 11, 31); // Month is 0-based, so 11 is December

// Log or use the variable laterDate
console.log(laterDate);

// qno8
var ramdanstart = new Date(2015, 5, 18)
var currentDate = new Date();
var timeDifferene = currentDate-ramdanstart
var daysPassed = Math.floor(timeDifferene/(1000*60*60*24))
console.log(`${daysPassed} days have passed since 1st Ramadan.`);

// qno9
var ramdanstart1 = new Date(2015)
var currentDate2 = new Date();
var timeDifferene3 = currentDate2-ramdanstart1
var daysPassed4 = Math.floor(timeDifferene/(1000))
console.log(`${daysPassed4} second had been pass since 2015.`);

// qno10
var currentDate = new Date();

// Extract the hours (though not used later in this simple example)
var hours = currentDate.getHours();

// Display the original date and time
document.getElementById('original-date').textContent = 'Original Date: ' + currentDate.toString();

// Reset the date object an hour ahead
currentDate.setHours(currentDate.getHours() + 1);

// Display the updated date and time
document.getElementById('updated-date').textContent = 'Updated Date: ' + currentDate.toString();

// qno11
var age = prompt("enter your age ")
var  currentYear = new Date().getFullYear();

var  birthYear = currentYear - age
console.log(birthYear);


// qno12
var name = "ABCCustomer"
var month = "August"
var unit = 410
var charges = 16
var num4 = 6560
var latePayement = 350 
var num5 = num4 + latePayement
console.log(num5);


// chapter2

// qno1
function tellTime() {
  var now = new Date()
  console.log(now);
  
  
}
tellTime()

// qno2

function greet() {
  var firstName = "Ayesh"
  var lastName = "Khan"
  var fullName = "ayesh" + "Khan"
  alert(fullName);
  
  
}
greet()

// qno3
function addvalue() {
  var num1 = +prompt("Enter num1")
  var num2 = +prompt("Enter num2")
  var add = num1 + num2  
  console.log(add);
  
}
addvalue()

// qno5
function calculator() {
     var num1 = +prompt("Enter your first number:")
      var num2 = +prompt("Enter your second number:")
       var opertors = prompt("Enter your operator: +,-,*,/")
  
       var result;
       switch (opertors) {
           case '+':
               result = num1+ num2
               break;
           case '-':
               result = num1-num2
               break;
           case '*':
               result = num1* num2
               break;
           case '/':
               result = num1/ num2
               break;
           default:
               alert("Invalid Operator")
           }
           alert(`The result is: ${result}`)
       }
  
       calculator();

      //  qno5
    function square (num) {
      var g = num*num;
      console.log(g);
      
      
      
    }
    square(6);

    // qno6
    function factorialIterative(n) {
      if (n < 0) return 'Factorial is not defined for negative numbers'; // Factorial is not defined for negative numbers
      var  result = 1;
      for (var  i = 1; i <= n; i++) {
          result *= i;
      }
      return result;
  }
  
  // Example usage:
  console.log(factorialIterative(5))
  
  // qno7
  function calculateArea(width, height) {
    return width * height;
}

// Example usage with values passed directly
const area1 = calculateArea(10, 5);
console.log('Area with direct values:', area1);

// qno8
const inputString = 'the quick brown fox';
const outputString = capitalizeWords(inputString);
console.log(outputString);