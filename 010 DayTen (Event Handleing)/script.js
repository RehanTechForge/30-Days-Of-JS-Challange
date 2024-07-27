// ***Day 10: Event Handling

// ***Tasks/Activities:

// ***Activity 1: Basic Event Handling
//! - Task 1: Add a click event listener to a button that changes the text content of a paragraph.

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").innerText = "Changed Text";
});

//! - Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById("toggleImage");

image.addEventListener("dblclick", () => {
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
});

// ***Activity 2: Mouse Events
//! - Task 3: Add a mouseover event listener to an element that changes its background color.

document.querySelector("div").addEventListener("mouseover", () => {
  document.querySelector("div").style.backgroundColor = "skyblue";
});

//! - Task 4: Add a mouseout event listener to an element that resets its background color.

document.querySelector("div").addEventListener("mouseout", () => {
  document.querySelector("div").style.backgroundColor = "aqua";
});

// ***Activity 3: Keyboard Events
//! - Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

document.querySelector(".inp").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

//! - Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

document.querySelector(".inp").addEventListener("keyup", (e) => {
  document.querySelector(".key").innerHTML = e.target.value;
});

// ***Activity 4: Form Events
//! - Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

//! - Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

document.querySelector("select").addEventListener("change", (e) => {
  console.log(e.target.value);
});

// ***Activity 5: Event Delegation
//! - Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
//! - Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

// ***Feature Request:
//! 1. Click Event Script: Write a script that adds a click event listener to a button to change th!e text content of a paragraph.
//! 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
//! 3. Keyboard Events Script: Write a script that logs key presses and displays input field va!lues using keydown and keyup event listeners.
//! 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
//! 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

//! ***Achievement:
//! By the end of these activities, students will:
//! - Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
//! - Understand and handle form events.
//! - Implement event delegation to manage events on dynamically added elements.
//! - Make web pages interactive by responding to various user actions.
