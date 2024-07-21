// Destructuring Arrays and objects
// Destructuring syntax allows you to extract values from objects or arrays.
// It is like copying files from a project folder to another location on your computer.

// Destructuring Objects: You can destructure objects by using the curly brackets {} and specifying the property names you want to extract.
// The properties must already exist on the object.

//Strict Comparison: You can use the triple equal (===) operator to compare the values and data types of the destructured variables and the source properties.
/*
let { PI } = Math;
console.log(PI);

console.log(PI === Math.PI); // using strict operator

// Reassign PI
PI = 1;
console.log(PI === Math.PI); // no longer same
// Originial property on object and destructured value are not connected anyway

// For of loops and objects
// const car = {
//   speed: 100,
//   color: "blue",
// };
// for (prop of car) {
//   // onject car is not iterable
//   console.log(prop);
// }

// but arrays are iterable and can be looped
const colors = ["blue", "red", "orange"];
for (var color of colors) {
  console.log(color);
}

// Fortunately the objects can be iterated using for of loop using methods - Object.keys(), Object.values(), Object.entries()
const car1 = {
  speed: 100,
  color: "blue",
};
console.log(Object.keys(car1)); // returns the property key of the object
console.log(Object.values(car1)); // returns the property values of the object
console.log(Object.entries(car1)); // returns an array of property and values of the object

// example of For of loops
var clothingItem = {
  price: 50,
  color: "red",
  material: "cotton",
  season: "autumn",
};
for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

// Retrieving property values of an object
function testBracketDynamicAccess() {
  var dynamicKey;

  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(dynamicKey, drone[dynamicKey]);
}
testBracketDynamicAccess();

// Some more examples
var employee = {
  name: "Mike",
  age: 34,
  department: "Sales",
  salary: 45000,
  city: "Austin",
};

function getRandomProperty() {
  var randomKey = Math.random();

  if (randomKey <= 0.25) {
    propKey = "name";
  } else if (0.25 < randomKey < 0.8) {
    propKey = "department";
  } else {
    propKey = "salary";
  }

  employeeKey = Object.keys(employee);
  console.log("Key is:", propKey + ",", "Value is:", employee[propKey]);
}
getRandomProperty();

// Difference between For of loops and Objects
// For-in iterate over the object own property and also its prototype whie For-of loops iterate over only the object owns property only.
const car = {
  engine: true,
  steering: true,
  speed: "slow",
};
const sportsCar = Object.create(car);
console.log("The created sportCar object before property:", sportsCar);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

console.log("------- for-in is unreliable -----");
for (prop in sportsCar) {
  console.log(prop);
}
console.log("🤔", "Iterating over object AND its prototype!");

console.log("------- for-of is reliable -------");
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ":", sportsCar[prop]);
}
console.log("🎯", "Iterating over object's OWN properties only..");

// Example of working with Prototype and NULL protype
// create protype object
var person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
// create new object based on "person" as protype
var me = Object.create(person);

/// add properties to new "me" object
me.name = "Mike";
me.isHuman = true;

me.printIntroduction();
*/

// TEmplate Literals
// Using `` to contain the string, as template string also known as template literal
// Embedding expression in a placeholder represented by ${}. ANything inside template literal is JavaScript and anything outside is String
// It can also be accomplished using + or , operator on or before ES5 but with `` in ES6 can be embedded in string directly
// Template literals canspan multiple lines as well
// Also allows for expression evaluation -- `${1 + 2 + 3}`
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`); // example of template literal

// IN ES5 or before
console.log(greet + " " + place + " " + "!");

// ES5 Denotion
let noMultiLine = "No multi-line strings in ES5";
console.log("Did you know? " + noMultiLine);

// ES^ Multi-Line tenplate literals
let multiLine = `
  Using ES6
  backticks,
  multi-line
  strings are
  possible!
`;
console.log("Did you know? " + multiLine);

// Using template literals to declare variables single/double quotations can be considered as simple strings instead of delimiters
let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);

// Data Structures ...
