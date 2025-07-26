/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp
      
//What’s Wrong?
            
//What’s Wrong?
//The string is not closed with a quotation mark and the statement is missing a closing parenthesis and semicolon.
//Error Type: Syntax Error

//Fix:
console.log("Welcome to the bootcamp");

//Verification:
//Now the code prints the message without throwing a syntax error. 

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong?

// The value "eight" is a string, so multiplying it by 2 results in NaN (Not a Number), causing a runtime issue.
// Error Type: Runtime Error

// Fix:
let numbersFixed = [2, 4, 8];
for (let i = 0; i < numbersFixed.length; i++) {
  let doubled = numbersFixed[i] * 2;
  console.log(doubled);
}

// Verification:
// Now the code multiplies each number by 2 and displays: 4, 8, 16.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?

// The logic is flipped: returning true means the number is NOT prime, but it should return false in that case.
// Error Type: Logic Error

// Fix:
function isPrimeFixed(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Corrected to show num is NOT prime
    }
  }
  return true; // Now correctly shows num IS prime
}

console.log(isPrimeFixed(7)); // Expected true

// Verification:
// The fixed function now correctly identifies 7 as a prime number and returns true.
