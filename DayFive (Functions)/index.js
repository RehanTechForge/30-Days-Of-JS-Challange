// *** Day 5: Functions

// *** Tasks/Activities:

// **Activity 1: Function Declaration**

//! - **Task 1:** Write a function to check if a number is even or odd and log the result to the console.

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("The Number is Even ", number);
  } else {
    console.log("The Number is Odd ", number);
  }
}
isEvenOrOdd(10);

//! - **Task 2:** Write a function to calculate the square of a number and return the result.

function calculateSquare(number) {
  return number ** 2;
}
console.log(calculateSquare(4));

// **Activity 2: Function Expression**

//! - **Task 3:** Write a function expression to find the maximum of two numbers and log the result to the console.

const maximumNumber = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    console.log(`${numberOne} is greater than ${numberTwo}`);
    return numberOne;
  } else if (numberTwo > numberOne) {
    console.log(`${numberTwo} is greater than ${numberOne}`);
    return numberTwo;
  } else {
    console.log(`${numberOne} and ${numberTwo} are equal`);
    return numberOne; // or numberTwo, since they are equal
  }
};

maximumNumber(12, 4); // 12 is greater than 4
maximumNumber(4, 12); // 12 is greater than 4
maximumNumber(5, 5); // 5 and 5 are equal

//! - **Task 4:** Write a function expression to concatenate two strings and return the result.

const concateString = (strOne, strTwo) => {
  return `${strOne} ${strTwo}`;
};
console.log(concateString("Hello", "World"));

// **Activity 3: Arrow Functions**

//! - **Task 5:** Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (numOne, numTwo) => {
  return numOne + numTwo;
};
console.log(sum(10, 10));

//! - **Task 6:** Write an arrow function to check if a string contains a specific character and return a boolean value.

const charReturn = (str, char) => {
  if (str.indexOf(char) !== -1) {
    console.log(str.indexOf(char));
    return;
  }
  console.log("No Character Found!");
};
charReturn("hello", "l");

// **Activity 4: Function Parameters and Default Values**

//! - **Task 7:** Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const calculateProduct = (numOne, numTwo = 1) => {
  return numOne * numTwo;
};
console.log(calculateProduct(2));
console.log(calculateProduct(2, 2));

//! - **Task 8:** Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (personName, age = 18) => {
  return `Hello ${personName} and your age is ${age}`;
};
console.log(greet("Rehan"));
console.log(greet("Usman", 40));

// **Activity 5: Higher-Order Functions**

//! - **Task 9:** Write a higher-order function that takes a function and a number, and calls the function that many times.

const callingFunc = (cb, count) => {
  for (let index = 1; index <= count; index++) {
    cb(index);
  }
};
const sayHello = (count) => {
  console.log(count, "Hello");
};
callingFunc(sayHello, 5);

//! - **Task 10:** Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const hof = (cbOne, cbTwo, value) => {
  const result = cbOne(value);
  cbTwo(result);
};
function funcOne(value) {
  return `Func One ${value}`;
}
function funcTwo(value) {
  console.log("Func Two", value);
}
hof(funcOne, funcTwo, "Heelo");

// **Feature Request:

//! 1. **Even or Odd Function Script:** Write a script that includes a function to check if a number is even or odd and logs the result.
//! 2. **Square Calculation Function Script:** Create a script that includes a function to calculate the square of a number and returns the result.
//! 3. **Concatenation Function Script:** Write a script that includes a function expression to concatenate two strings and returns the result.
//! 4. **Sum Calculation Arrow Function Script:** Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
//! 5. **Higher-Order Function Script:** Write a script that includes a higher-order function to apply a given function multiple times.

// *** Achievement:

//! By the end of these activities, students will:

//! - Understand and define functions using function declarations, expressions, and arrow functions.
//! - Use function parameters and default values effectively.
//! - Create and utilize higher-order functions.
//! - Apply functions to solve common problems and perform calculations.
//! - Enhance code reusability and organization using functions.
