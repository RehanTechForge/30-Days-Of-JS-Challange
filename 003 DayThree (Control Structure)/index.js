// ** Day 3: Control Structures

// ** Tasks/Activities:

// **Activity 1: If-Else Statements**
//! - **Task 1:** Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const num = 12;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else if (num == 0) {
  console.log(`${num} is zero`);
} else {
  console.log(`${num} is a negative number`);
}
//! - **Task 2:** Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 15;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// **Activity 2: Nested If-Else Statements**
//! - **Task 3:** Write a program to find the largest of three numbers using nested if-else statements.

const num1 = 10;
const num2 = 132;
const num3 = 30;

if (num1 >= num2) {
  if (num2 >= num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 >= num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

// **Activity 3: Switch Case**
//! - **Task 4:** Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

switch (6) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("not Day");
}

//! - **Task 5:** Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

const percentage = 60;
switch (true) {
  case percentage >= 80:
    console.log("A");
    break;
  case percentage >= 70:
    console.log("B");
    break;
  case percentage >= 60:
    console.log("C");
    break;
  case percentage >= 50:
    console.log("D");
    break;
  default:
    console.log("F");
}

// **Activity 4: Conditional (Ternary) Operator**
//! - **Task 6:** Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

const number = 11;
number % 2 === 0
  ? console.log(`${number} is an even number`)
  : console.log(`${number} is an odd number`);

// **Activity 5: Combining Conditions**
//! - **Task 7:** Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// *** Feature Request:
//! 1. **Number Check Script:** Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

const newNum = 13;

if (newNum > 0) {
  console.log(`${newNum} is positive Number`);
} else if (newNum == 0) {
  console.log(`${newNum} is Zero`);
} else {
  console.log(`${newNum} is Negative Number`);
}

//! 2. **Voting Eligibility Script:** Create a script to check if a person is eligible to vote based on their age and log the result.

const personAge = 18;
if (personAge >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//! 3. **Day of the Week Script:** Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

const day = 6;

switch (true) {
  case day == 1:
    console.log("Monday");
    break;
  case day == 2:
    console.log("Tuesday");
    break;
  case day == 3:
    console.log("Wednesday");
  case day == 4:
    console.log("Thursday");
    break;
  case day == 5:
    console.log("Friday");
    break;
  case day == 6:
    console.log("Saturday");
    break;
  case day == 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter Correct Day");
}

//! 4. **Grade Assignment Script:** Create a script that uses a switch case to assign a grade based on a score and logs the grade.

const newPercentage = 90;

switch (true) {
  case newPercentage >= 80:
    console.log("A");
    break;
  case newPercentage >= 70:
    console.log("B");
    break;
  case newPercentage >= 60:
    console.log("C");
    break;
  case newPercentage >= 50:
    console.log("D");
    break;
  default:
    console.log("F");
}

//! 5. **Leap Year Check Script:** Write a script that checks if a year is a leap year using multiple conditions and logs the result.

const newYear = 2030;
if ((newYear % 4 === 0 && newYear % 100 !== 0) || newYear % 400 === 0) {
  console.log(`${newYear} is a leap new year`);
} else {
  console.log(`${newYear} is not a leap new year`);
}

//! *** Achievement:
//! By the end of these activities, students will:
//! - Implement and understand basic if-else control flow.
//! - Use nested if-else statements to handle multiple conditions.
//! - Utilize switch cases for control flow based on specific values.
//! - Apply the ternary operator for concise condition checking.
//! - Combine multiple conditions to solve more complex problems.
