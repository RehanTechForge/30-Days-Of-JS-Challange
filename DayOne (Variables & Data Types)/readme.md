Day 1: Variables and Data Types
This repository contains exercises and tasks for understanding variables and data types in JavaScript.

Activities and Tasks
Activity 1: Variable Declaration
Task 1: Declare a variable using var
Declare a variable using var, assign it a number, and log the value to the console.

<!-- var num = 42;
console.log(num); // Output: 42 -->

Task 2: Declare a variable using let
Declare a variable using let, assign it a string, and log the value to the console.

<!-- let userName = "John Doe";
console.log(userName); // Output: John Doe -->

Activity 2: Constant Declaration
Task 3: Declare a variable using const
Declare a variable using const, assign it a boolean value, and log the value to the console.

<!-- const isStudent = true;
console.log(isStudent); // Output: true -->

Activity 3: Data Types
Task 4: Create variables of different data types
Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

<!-- const firstName = "John";
const isAdmin = false;
const age = 30;
const friendNames = ["Alex", "Walter", "Amanda"];
const info = {
occupation: "Engineer",
city: "New York"
};

console.log(`This variable type is string: ${typeof firstName}`); // Output: string
console.log(`This variable type is boolean: ${typeof isAdmin}`); // Output: boolean
console.log(`This variable type is number: ${typeof age}`); // Output: number
console.log(`This variable type is object: ${typeof friendNames}`); // Output: object
console.log(`This variable type is object: ${typeof info}`); // Output: object -->

Activity 4: Reassigning Variables
Task 5: Declare a variable using let and reassign it
Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

<!-- let favoriteColor = "Blue";
console.log(`Favorite color is ${favoriteColor}`); // Output: Favorite color is Blue
favoriteColor = "Red";
console.log(`Favorite color is ${favoriteColor}`); // Output: Favorite color is Red -->

Activity 5: Understanding const
Task 6: Try reassigning a variable declared with const
Try reassigning a variable declared with const and observe the error.

<!-- const country = "USA";
console.log(`Country is ${country}`); // Output: Country is USA
country = "UK"; // TypeError: Assignment to constant variable.
console.log(`Country is ${country}`); -->

<!--! Summary-->
<!-- ! This repository covers basic concepts of variable declaration using var, let, and const, as well as an introduction to JavaScript data types and the typeof operator. It also highlights the immutability of variables declared with const and demonstrates the reassignment of variables declared with let.  -->

<!--! License -->
<!--! This project is licensed under the MIT License. See the LICENSE file for details. -->
