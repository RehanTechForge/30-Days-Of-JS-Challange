// ***Day 8: ES6+ Features

// ***Tasks/Activities:

// **Activity 1: Template Literals**

//! - **Task 1:** Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const personName = "John Doe";
const age = 18;

console.log(`The name of the person is ${personName} and the age is ${age}`);

//! - **Task 2:** Create a multi-line string using template literals and log it to the console.

const multiLineString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

console.log(multiLineString);

// **Activity 2: Destructuring**

//! - **Task 3:** Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5];
const [firstNum, secNum] = numbers;
console.log(firstNum, secNum);

//! - **Task 4:** Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "Atomic Habit",
  author: "James Clear",
};

const { title, author } = book;
console.log(title, author);

// **Activity 3: Spread and Rest Operators**

//! - **Task 5:** Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const friends = ["usama", "moiz", "bilal"];
const newFriends = [...friends, "ahmed", "asghar"];
console.log(newFriends);

//! - **Task 6:** Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sumAll = (...numbers) => {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    sum += element;
  }
  return sum;
};
const result = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

// **Activity 4: Default Parameters**

//! - **Task 7:** Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const product = (numOne, numTwo = 1) => {
  return numOne * numTwo;
};
const pro = product(2);
console.log(pro);

// **Activity 5: Enhanced Object Literals**

//! - **Task 8:** Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// Define some variables
const name = "Alice";
const ageAgain = 25;
const hobby = "reading";

// Create an object using enhanced object literals
const person = {
  name, // Shorthand property
  ageAgain, // Shorthand property
  hobby, // Shorthand property

  // Method definition
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },

  // Computed property name
  [hobby]: "I love reading books.",
};

// Log the object to the console
console.log(person);

// Call the method
person.greet();

//! - **Task 9:** Create an object with computed property names based on variables and log the object to the console.

// Define some variables
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

// Create an object using computed property names
const personAgain = {
  [propName1]: "John", // The property name will be the value of propName1
  [propName2]: "Doe", // The property name will be the value of propName2
  [propName3]: 30, // The property name will be the value of propName3
};

// Log the object to the console
console.log(personAgain);

// ***Feature Request:

//! 1. **Template Literals Script:** Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
//! 2. **Destructuring Script:** Create a script that uses array and object destructuring to extract values and log them.
//! 3. **Spread and Rest Operators Script:** Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
//! 4. **Default Parameters Script:** Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
//! 5. **Enhanced Object Literals Script:** Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

// ***Achievement:

//! By the end of these activities, students will:

//! - Understand and use template literals for string interpolation and multi-line strings.
//! - Apply destructuring to extract values from arrays and objects.
//! - Utilize spread and rest operators for array manipulation and function arguments.
//! - Define functions with default parameters.
//! - Create objects using enhanced object literals, including methods and computed property names.
