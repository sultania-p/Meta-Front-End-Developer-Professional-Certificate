// Destructuring Arrays and objects
// Destructuring syntax allows you to extract values from objects or arrays.
// It is like copying files from a project folder to another location on your computer.

// Destructuring Objects: You can destructure objects by using the curly brackets {} and specifying the property names you want to extract.
// The properties must already exist on the object.

//Strict Comparison: You can use the triple equal (===) operator to compare the values and data types of the destructured variables and the source properties.

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
console.log("----------");

// Data Structures ...
// COmmon data structures - Objects, Arrays, Maps, Sets
// Objects -> Unordered arrangement, non-iterable collection of key value pairs Used for OOP codes.
// Arrays - Ordered collection of  values (index is not defined but iterable, value)
// Maps - Iterable, of Key value pairs -->> anything can be key unlike Arrays only Strings or some symbols can be keys
// Sets - COllection, each item must be unique, non iterable
// forEach method
const fruits = ["Kiwi", "Mango", "Apple", "Pear", "Banana"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
console.log("----------");

// Parsing the function directly to forEach method
const veggies = ["Onion", "Potato", "Garlic"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

// .filter() method returns the items from the array that passed the specified condition
const nums = [10, 20, 40, 50, 60, 30];
function returnNum(num) {
  return num > 30;
}
console.log(nums.filter(returnNum));

// Map() method
const numbers = [0, 10, 20, 30, 40, 50, 60];
function division(num) {
  return num / 10;
}
console.log(numbers.map(division));

// another way
function mapFunction() {
  [0, 10, 20, 30, 40, 50, 60].map(function (num) {
    return num / 10;
  });
}
console.log(mapFunction());

// Object Data Structure
const result = [];
const drone = {
  speed: 100,
  color: "red",
};
const droneKeys = Object.keys(drone); // return an arrays of keys
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result);

// Maps() data structure - NO inheritance and NO Prototypes
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers);

// retrieving element from map
console.log(bestBoxers.get(1));

// Update an existing element in maps
bestBoxers.set(2, "The Second Champion");
console.log(bestBoxers);

// Sets() data structure // collection of unique values
const repititiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repititiveFruits);
console.log(uniqueFruits);

// Spread Operator - INtroduced in ES6
// Dpread array items and join objects together, cahractersed by three dots
// The spread operator allows you to pass all array elements into a function without having to type them all individually.
function showItinerary(place1, place2, place3) {
  console.log("Visit " + place1);
  console.log("Then visit " + place2);
  console.log("Finish with a visit to " + place3);
}
// Instead of parsing all the array elements to the function seperately, we can use SPREAD operator (...) to parse an array at once
let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];
showItinerary(...top3);

// REST operator - Used to build smaller box and pack item into it // Destructuring
// The rest operator allows you to take items from an array and use them to create a separate sub-array
let top7 = [
  "The Colosseum",
  "Trevi Fountain",
  "The Vatican City",
  "The Roman Forum",
  "The Pantheon",
  "Piazza Vanezia",
  "The Palentine Hill",
];
const [first, second, third, ...secondVisit] = top7;
function travelItaly(first, second, third, ...secondVisit) {
  //...secondVisit is a rest parameter and an array and can be used witl array ops
  console.log("In first trip first visit: " + first);
  console.log("Then visit: " + second);
  console.log("At the last visit: " + third);
  for (let place = 0; place < secondVisit.length; place++) {
    console.log("When you come the next time visit the: " + secondVisit[place]);
  }
}
travelItaly(...top7);

// Example ---
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));

// Example with function
function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item); // each item in the list will be operated on this logic using map function / callback fn
}
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);

// Using SPREAD opeartor
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);

// Joining objects..
const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = { ...flying, ...car };
console.log(flyingCar);

// adding elements to an existing array
let veggies = ["onion", "potato"];
veggies = [...veggies, "garlic", "carrot"];
console.log(veggies);

// converting string into array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

// copy object into another object
const car1 = {
  speed: 300,
  color: "yellow",
};
const car2 = { ...car1 };
car1.speed = 200;
console.log(car1.speed, car2.speed); // updating one object property does not affect other object

// copy array into another array object
const fruits1 = ["apples", "peers"];
const fruits2 = [...fruits1];

fruits1.pop();
console.log(`Fruits1: ${fruits1}`);
console.log(`Fruits2: ${fruits2}`);
