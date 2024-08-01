// JavaScript Modules - Reusing codes as modules
// Stand-alone units of codes - Can be added to programs, remove modules and replace modules
// COmmonJS - How modules should work outside of browser env. Mostly used on Server Side like Node.js
// Require and Module.exports
// ES6 Modules and actions

// DOM Manipulation -- Power of updating the web pages in appearance and functionality
// HTML file mapped out like a tree structure. DOM/Model is generated for every web page by browser as a JS object
// JS is used to interact with DOM in browser and access JS via Console tab
// Entire DOM object is stored in document variable
// document.createElement("h2");
// const h2 = document.createElement("h2");

// h2.innerText = "This is a h2 heading";
// h2.setAttribute("id", "sub-heading");
// h2.setAttribute("class", "secondary");

// JS Selectors - DOM MAnipulation
// fetch("https://example.com/")
//   .then((response) => response.text())
//   .then((html) => {
//     document.getElementById("myDiv").innerHTML = html;
//     console.log(document.querySelector("p"));
//   });

// console.log(document.querySelector("p"));

// Event Handling
// FUnction that captures the event is called Event Handler
// const target = document.querySelector("body"); //define the html element for the event

// function handleClick() {
//   // define the event listener function
//   console.log("clicked the body");
// }

// target.addEventListener("click", handleClick); // add event listener to the html element tag

// Web Page content Update
// const prompt = require("prompt-sync")({ sigint: true });
// let answer = prompt("What is your name? ");

// if (typeof answer == "string") {
//   var h1 = document.createElement("h1");
//   h1.innerText = answer;
//   document.body.innerText = "";
//   document.body.appendChild(h1);
// }

// // Input from an html form and display a user types
// var h1 = document.createElement("h1");
// h1.innerText = "Type into the input to make this text change";

// var input = document.createElement("input");
// input.setAttribute("type", "text");

// document.body.innerText = "";
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener("change", function () {
//   h1.innerText = input.value;
// });

// // example DOM
// const h1 = document.querySelector("h1");

// arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

// function handleClicks() {
//   switch (h1.innerText) {
//     case arr[0]:
//       h1.innerText = arr[1];
//       break;
//     case arr[1]:
//       h1.innerText = arr[2];
//       break;
//     case arr[2]:
//       h1.innerText = arr[3];
//       break;
//     default:
//       h1.innerText = arr[0];
//   }
// }

// h1.addEventListener("click", handleClicks);

// JSON - JavaScript Object Notation
const jsonStr = '{"greeting":"hello"}';
// use Json parse method on the above string JSON object
const aPlainObj = JSON.parse(jsonStr);
console.log(aPlainObj);
// perform operationon javascript object
aPlainObj.greeting = "hi";
console.log(aPlainObj);

// Stringify a JS object to JSON
const data = {
  firstName: "Mike",
  lastName: "Doe",
  greeting: "Hello",
};
const jsonObj = JSON.stringify(data);
console.log(jsonObj);

// Example --
// JSON Object
const employeeJSONStr =
  "{" +
  '"firstName": "John",' +
  '"lastName": "Doe",' +
  '"department": "IT",' +
  '"skills": "[Python, Java, JavaScript]"' +
  "}";
const employeePlainJSObj = JSON.parse(employeeJSONStr);
console.log(employeePlainJSObj); // JavaScript object
