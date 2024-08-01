// JavaScript Environments -- NOde and NPM
// Node.js -> Front end and backend -> COmmand line, desktop app, back-end
// NPM package manager - can use libraries and frameworks as node.js modules, also referred as npm package
// Node.js comes with a package manager called npm, which stands for Node Package Manager.

const { createTestScheduler } = require("jest");

function concatStrings(str1, str2) {
  return str1 + " " + str2;
}

console.log(concatStrings("Piyush", "Sultania"));
console.log(concatStrings("abd", "def"));
console.log(concatStrings(1, 2));

// testing framework JEST
expect(concatStrings("abc", "def")).toBe("abc def");

// TDD Approach - Test Driven Development to programming
// Write failing tests
// re-write code to pass
// optimize source without changing the scope

// Types of testing
// End to End testing - most expensive tests to run
// INtegration testing - React testing loib and Enzyme - Faster than E2E
// Unit testing - testing smallest units of source code in isolation like function .. self contained and preferrable tested seperately from rest of the code

// JEST Testing
// Testing framework -- like Mocha
// JS based and build by Meta
// Support code coverage .. means what percentage of code is covered by tests
// Mocking - Allows seperate the code from dependencies .. make sure unit testing is stand-alone
// SNapshot testing - Verify that no regressions are made on the DOM after source code was changed
// TDD ->> Red - Green - Refactor
// Write failing test -> write the source code to pass the test -> refactor the code
