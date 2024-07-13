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
//? Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
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
