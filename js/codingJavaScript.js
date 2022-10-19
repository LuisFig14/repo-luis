
// let firtNumber = prompt("Enter the firt number");
// let secondNumber =prompt("Enter the second number");

// let total = Number(firtNumber) + Number (secondNumber);

// alert(total);

let numberSeven = prompt("Enter the number 7");
let birthMonth = prompt("Enter your birth month");
let calculation = numberSeven * birthMonth;
calculation = calculation -1;
calculation = calculation * 13;
let birthDay = Number (prompt("Enter the day of you birth"));

calculation = calculation + birthDay;
calculation = calculation + 3;
calculation = calculation * 11;
calculation = calculation - birthMonth;
calculation = calculation  - birthDay;
calculation = calculation / 10;
calculation = calculation + 11;
calculation = calculation / 100;

document.write("Your birthday is " +calculation);


