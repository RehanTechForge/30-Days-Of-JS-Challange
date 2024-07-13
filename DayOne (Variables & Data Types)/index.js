//? Day 1 Variables and Data Types
//? task/activities:

//? Activity 1: Variable Declaration
//? Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 42;
console.log(num);

//? Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let userName = "John Doe";
console.log(userName);

//? Activity 2: Constant Declaration
//? Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isStudent = true;
console.log(isStudent);

//? Activity 3: Data Types
//? 1 Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const firstName = "John";
const isAdmin = false;
const age = 30;
const friendName = ["Alex", "Walter", "Amanda"];
const info = {
  occupation: "Engineer",
  city: "New York",
};
console.log(`This variable type is string ${typeof firstName}`);
console.log(`This variable type is boolean ${typeof isAdmin}`);
console.log(`This variable type is number ${typeof age}`);
console.log(`This variable type is object ${typeof friendName}`);
console.log(`This variable type is object ${typeof info}`);

//? Activity 4: Reassigning Variables
//? Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let favoriteColor = "Blue";
console.log(`favorite color is ${favoriteColor}`);
favoriteColor = "Red";
console.log(`favorite color is ${favoriteColor}`);

//? Activity 5: Understanding const
//? Task 6: Try reassigning a variable declared with const and observe the error.
const country = "USA";
console.log(`Country is ${country}`);
country = "UK"; // ! TypeError: Assignment to constant variable.
console.log(`Country is ${country}`);

//? Feature Request
//? Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

//? Declare variables of different data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function () {
  return "I'm a function";
};
let symbolVar = Symbol("unique");
let bigintVar = BigInt(9007199254740991);

//? Function to log value and type
function logValueType(variable, name) {
  console.log(
    `Variable ${name}: Value = ${variable}, Type = ${typeof variable}`
  );
}

//? Log values and types
logValueType(stringVar, "stringVar");
logValueType(numberVar, "numberVar");
logValueType(booleanVar, "booleanVar");
logValueType(nullVar, "nullVar");
logValueType(undefinedVar, "undefinedVar");
logValueType(objectVar, "objectVar");
logValueType(arrayVar, "arrayVar");
logValueType(functionVar, "functionVar");
logValueType(symbolVar, "symbolVar");
logValueType(bigintVar, "bigintVar");

//? 2 Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

//? Reassignment with let
let letVariable = "Initial value";
console.log(`letVariable before reassignment: ${letVariable}`);

//? Reassigning let variable
letVariable = "New value";
console.log(`letVariable after reassignment: ${letVariable}`);

//? Reassignment with const
const constVariable = "Initial value";
console.log(`constVariable before reassignment: ${constVariable}`);

try {
  //? Attempting to reassign const variable
  constVariable = "New value";
} catch (error) {
  console.log(`constVariable after reassignment attempt: ${error.message}`);
}

//! Achievement:
//! By the end of these activities, you will:
//! 1 Know how to declare variables using var, let, and const.
//! 2 Understand the different data types in JavaScript.
//! 3 Be able to use the typeof operator to identify the data type of a variable.
//! 4 Understand the concept of variable reassignment and the immutability of const variables.
