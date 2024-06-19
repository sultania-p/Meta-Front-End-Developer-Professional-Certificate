// Learning JavaScript...

console.log("Hello World");
console.log("Hello World", "Life is fun");

// Variables
var greeting = "Hello";
var person = "John";
console.log(greeting, person);

console.log("**update the variable value..");
person = "Piyush";
console.log(greeting, person);

// PLaying with Variable
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";
console.log(petCat, "now says", catSound);

// Data Types
var a = 9;
var b = 4;
console.log(a > 5 && a < 10);
console.log(a > 5 || a > 10);
console.log(10 == 9); // comparison

console.log(a * b);
console.log("It is a lovely day");
console.log("It's a lovely day");
// console.log('It's a lovely day') // Error

console.log(1 < 2);
console.log(100 == "100"); // only compare the value

var score = 100;
console.log(score === "100"); // compare both type and value --> Strict Equality Operator

// conditionals and loops
var result = 50;
if (result > 40) {
  console.log("You passed the test");
} else {
  console.log("You did not pass the test");
}

// multiple conditions
var place = "fourth";

if (place == "first") {
  console.log("Gold Medal");
} else if (place == "second") {
  console.log("Silver Medal");
} else if (place == "third") {
  console.log("Bronze Medal");
} else {
  console.log("No Medal");
}

switch (place) {
  case "first":
    console.log("Gold Medal");
    break;
  case "second":
    console.log("Silver Medal");
    break;
  case "third":
    console.log("Bronze Medal");
    break;
  default:
    console.log("No Medal");
}

// conditional statements practise
var age = 10;
if (age >= 65) {
  console.log("You get yur income from pension");
} else if (age < 52 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

console.log("Using switch statement...");
var day = "Monday";
// const prompt = require("prompt-sync")({ sigint: true });
// let day = prompt("What is the day today? ");
switch (day) {
  case "Monday":
    console.log("Do something, it's", day, "today..");
    break;
  case "Tuesday":
    console.log("Do something, it's", day, "today..");
    break;
  case "Wednesday":
    console.log("Do something, it's", day, "today..");
    break;
  case "Thursday":
    console.log("Do something, it's", day, "today..");
    break;
  case "Friday":
    console.log("Do something, it's", day, "today..");
    break;
  default:
    console.log("Just relax today..");
}

// Loops - FOR loop
console.log("Loop - Using Increment..");
for (var i = 1; i <= 10; i++) {
  console.log("The number is:", i);
}

console.log("Using Decrement..");
for (var j = 10; j > 0; j--) {
  console.log("The number is:", j);
}

console.log("Print all elements of an array..");
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

// WHILE loop
var counter = 1;
while (counter < 5) {
  console.log("The number is:", counter);
  counter++;
}

for (var res1 = 1; res1 <= 5; res1++) {
  console.log(res1);
}
console.log("Counting completed!");

for (var res2 = 5; res2 >= 1; res2--) {
  console.log(res2);
}
console.log("Counting finished!");

console.log("---Using WHILE loop decrement..");
var res3 = 5;
while (res3 >= 1) {
  console.log(res3);
  res3--;
}
console.log("Counting finished..");

var year = 2018;
while (year <= 2022) {
  console.log("Year is:", year);
  year++;
}

// 2 Week plan - Nested loops
for (var week = 1; week <= 2; week++) {
  for (var day = 1; day < 6; day++) {
    console.log("Week", week, "-", "Day", day);
  }
}

var cubes = "ABCDEFG";
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
  var styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles);
}

// example practise
console.log("--Using For Loop..");
for (let i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver Medal");
  } else if (i == 3) {
    console.log("Bronze Medal");
  } else {
    console.log(i);
  }
}

console.log("--Using Switch Statement..");
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold Medal");
      break;
    case 2:
      console.log("Silver Medal");
      break;
    case 3:
      console.log("Bronze Medal");
      break;
    default:
      console.log(i);
  }
}
