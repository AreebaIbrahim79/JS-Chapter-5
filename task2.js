
// take the user input
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
// Number() Used to convert the string input to a number.
var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var divide = num1 / num2;
var mode = num1 % num2;
// Display the result
document.write("Sum of " + num1 + " and " + num2 + " is " + add +"</br>");
document.write("Sub of " + num1 + " and " + num2 + " is " + sub +"</br>");
document.write("Multipul of " + num1 + " and " + num2 + " is " + mul +"</br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divide +"</br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + mode +"</br>");