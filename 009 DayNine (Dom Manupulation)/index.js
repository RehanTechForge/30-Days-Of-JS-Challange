// ***Day 9: DOM Manipulation

// ***Tasks/Activities:

// ***Activity 1: Selecting and Manipulating Elements

//! - Task 1: Select an HTML element by its ID and change its text content.
document.querySelector(".buttonOne").addEventListener("click", () => {
  const taskOne = document.getElementById("taskOne");
  taskOne.innerText = "Completed Task One";
});

//! - Task 2: Select an HTML element by its class and change its background color.

document.querySelector(".buttonTwo").addEventListener("click", () => {
  const taskTwo = document.getElementsByClassName("taskTwo");
  taskTwo[0].style.backgroundColor = "yellow";
  console.log(taskTwo[0]);
});

// ***Activity 2: Creating and Appending Elements

//! - Task 3: Create a new `div` element with some text content and append it to the body.

const div = (document.createElement("div").innerHTML =
  "Append Div From Javascript");
const parent = document.getElementById("append");
parent.append(div);

//! - Task 4: Create a new `li` element and add it to an existing `ul` list.

const ul = document.getElementById("ul");
const li = document.createElement("li");
li.innerHTML = "Something";
ul.append(li);

// ***Activity 3: Removing Elements

//! - Task 5: Select an HTML element and remove it from the DOM.

document.querySelector(".buttonFive").addEventListener("click", () => {
  const ulSec = document.getElementById("ulSec");
  ulSec.remove();
});

//! - Task 6: Remove the last child of a specific HTML element.

document.querySelector(".buttonSix").addEventListener("click", () => {
  const ulThird = document.getElementById("ulThird");
  ulThird.lastElementChild.remove();
});

// any other day will complete this question because this type question again and again repeat...

// ***Activity 4: Modifying Attributes and Classes

//! - Task 7: Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).
//! - Task 8: Add and remove a CSS class to/from an HTML element.

// ***Activity 5: Event Handling

//! - Task 9: Add a click event listener to a button that changes the text content of a paragraph.
//! - Task 10: Add a mouseover event listener to an element that changes its border color.

// ***Feature Request:

//! 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
//! 2. Element Creation Script: Create a script that demonstrates creating a new `div` element and appending it to the body.
//! 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
//! 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.
//! 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// ***Achievement:

//! By the end of these activities, students will:

//! - Select and manipulate DOM elements using JavaScript.
//! - Create and append new elements to the DOM.
//! - Remove elements from the DOM.
//! - Modify attributes and classes of HTML elements.
//! - Add and handle events to make web pages interactive.
