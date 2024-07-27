// ***Day 11: Promises and Async/Await

// ***Tasks/Activities:
// ***Activity 1: Understanding Promises
//! Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved");
//   }, 2000);
// });

// prom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// const promTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Rejected");
//   }, 2000);
// });

// promTwo
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ***Activity 2: Chaining Promises
//! Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// console.log("Data Fetching...");
// let promFour;
// const promThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data Fetched");
//     promFour = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched Done");
//       }, 2000);
//     });
//   }, 2000);
// });

// promThree
//   .then((data) => {
//     console.log(data);
//     return promFour;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ***Activity 3: Using Async/Await
//! Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// const promFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Five");
//   }, 2000);
// });

// async function fun() {
//   const data = await promFive;
//   console.log(data);
// }
// fun();

//! Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// const promFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise Five Rejected");
//   }, 2000);
// });

// async function fun() {
//   try {
//     const data = await promFive;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fun();

// ***Activity 4: Fetching Data from an API
//! Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

// fetch("https://dummyjson.com/quotes")
//   .then((data) => data)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => {
//     console.log(error);
//   });

//! Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchedData = async () => {
  try {
    const resp = await fetch("https://dummyjson.com/quotes");
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchedData();

// ***Activity 5: Concurrent Promises
//! Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });

//! Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A resolved"), 1000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B resolved"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C resolved"), 3000)
);

Promise.race([promiseA, promiseB, promiseC])
  .then((value) => {
    console.log("First promise resolved:", value);
  })
  .catch((error) => {
    console.error("First promise rejected:", error);
  });

// ***Feature Request:
//! Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
//! Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
//! Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
//! API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
//! Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

// ***Achievement:
//! By the end of these activities, students will:
//! Understand and create promises, including handling resolved and rejected states.
//! Chain multiple promises to perform sequential asynchronous operations.
//! Use async/await to handle asynchronous code more readably.
//! Fetch data from public APIs using both promises and async/await.
//! Manage multiple concurrent promises using Promise.all and Promise.race.
