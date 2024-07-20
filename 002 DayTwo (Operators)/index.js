// **Day 2: Operators**

// **Tasks/Activities:**

// **Activity 1: Arithmetic Operations**
let numOne = 10;
let numTwo = 20;
//! **Task 1:** Write a program to add two numbers and log the result to the console.

const addNum = numOne + numTwo;
console.log(addNum); // Output: 30

//! **Task 2:** Write a program to subtract two numbers and log the result to the console.

const subNum = numTwo - numOne;
console.log(subNum); // Output: 10

//! **Task 3:** Write a program to multiply two numbers and log the result to the console.

const mulNum = numOne * numTwo;
console.log(mulNum); // Output: 200

//! **Task 4:** Write a program to divide two numbers and log the result to the console.

const divNum = numTwo / numOne;
console.log(divNum); // Output: 2

//! **Task 5:** Write a program to find the remainder when one number is divided by another and log the result to the console.

const remNum = numTwo % numOne;
console.log(remNum); // Output: 0

// **Activity 2: Assignment Operators**
//! **Task 6:** Use the `+=` operator to add a number to a variable and log the result to the console.

numOne += numTwo;
console.log(numOne); // Output: 30

//! **Task 7:** Use the `-=` operator to subtract a number from a variable and log the result to the console.

numTwo -= numOne;
console.log(numTwo); // Output: -10

// **Activity 3: Comparison Operators**
//! **Task 8:** Write a program to compare two numbers using `>` and `<` and log the result to the console.

console.log(12 > 23); // Output: false
console.log(32 < 2); // Output: false

//! **Task 9:** Write a program to compare two numbers using `>=` and `<=` and log the result to the console.

console.log(12 <= 12); // Output: true
console.log(34 >= 90); // Output: false

//! **Task 10:** Write a program to compare two numbers using `==` and `===` and log the result to the console.

console.log(10 == "10"); // Output: true
console.log(10 === "10"); // Output: false
console.log(10 == 10); // Output: true
console.log(10 === 10); // Output: true

// **Activity 4: Logical Operators**
//! **Task 11:** Write a program that uses the `&&` operator to combine two conditions and log the result to the console.

console.log(10 === "10" && 10 == 10); // Output: false

//! **Task 12:** Write a program that uses the `||` operator to combine two conditions and log the result to the console.

console.log(12 > 12 || 12 == 12); // Output: true

//! **Task 13:** Write a program that uses the `!` operator to negate a condition and log the result to the console.

console.log(!(12 === "12")); // Output: true

// **Activity 5: Ternary Operator**
//! **Task 14:** Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num = 12;
const positiveNum = num > 0 ? "Positive" : "Negative";
console.log(positiveNum); // Output: Positive

// **Feature Request:**
//! 1. **Arithmetic Operations Script:** Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

const add = (numOne, numTwo) => {
  return numOne + numTwo;
};
const sum = add(12, 12);
console.log(sum); // Output: 24

const sub = (numOne, numTwo) => {
  return numTwo - numOne;
};

const minus = sub(12, 12);
console.log(minus); // Output: 0

const mul = (numOne, numTwo) => {
  return numOne * numTwo;
};

const mult = mul(12, 12);
console.log(mult); // Output: 144

const div = (numOne, numTwo) => {
  return numTwo / numOne;
};

const divide = div(12, 12);
console.log(divide); // Output: 1

//! 2. **Comparison and Logical Operators Script:** Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

const num1 = 12;
const num2 = 23;
const num3 = 32;
const num4 = 12;
console.log(num1 > num2 && num3 === num4); // Output: false
console.log(num1 < num2 || num3 !== num4); // Output: true
console.log(!(num1 === num2)); // Output: true
console.log(num1 >= num2 || num3 <= num4); // Output: false
console.log(num1 <= num2 && num3 >= num4); // Output: true

//! 3. **Ternary Operator Script:** Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

const number = 12;
const result = number > 0 ? "Positive" : "Negative";
console.log(result); // Output: Positive

// **Achievement:**
//! By the end of these activities, you will:
//! Understand and use arithmetic operators to perform basic calculations.
//! Use assignment operators to modify variable values.
//! Compare values using comparison operators.
//! Combine conditions using logical operators.
//! Use the ternary operator for concise conditional expressions.
