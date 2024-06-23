/*
// working with functions and arrays
function addTwoNums(a, b) {
  var c = a + b;
  console.log(c);
}
var a = 10;
var b = 20;
addTwoNums(a, b);
addTwoNums(10, 20);

// Arrays
function getTrainItems(train1) {
  for (let cart = 0; cart < train1.length; cart++) {
    console.log("The cart", cart + 1, "contains -", train1[cart]);
  }
}
var train1 = ["wheat", "barley", "Salt", "potato", "rocks", "sugar"];
getTrainItems(train1);

// Practise code
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}
letterFinder("test", "t");
// Objects
var storeManager = {
  experience: 10,
  skills: "Sales, Inventory Management and Recruitment",
  socialSkills: "Communication and Public Speaking",
  health: 30,
};
console.log(storeManager.skills);

//add property to object - Using object literal notation
storeManager.nextAchievement = "Open a new store..";
console.log(storeManager.nextAchievement);
// retrieve entire object
console.log(storeManager);

// another example using array and object

function employeeDetails(arr) {
  var employee = {
    employeeName: arr[0],
    employeeDesignation: arr[1],
    employeeSalary: arr[2],
    employeeDepartment: arr[3],
    employeeDateOfJoining: arr[4],
  };
  return employee;
}

var arr = [
  "Mike",
  "Software Engineer",
  120000,
  "Fulfilment Tech.",
  "2023-03-02",
];
employee = employeeDetails(arr);
console.log(employee.employeeName);
console.log(employee.employeeDepartment);
//add a property
employee.employeeLocation = "Minneapolis";
console.log(employee);

// defining object and using bracket notation
var house = {};
house["rooms"] = 4;
house["color"] = "Blue";
house["priceUSD"] = 250000;
house["location"] = "Austin";
house[2024] = 1993;
console.log(house);
console.log(house.location); //retrieve using dot notation
console.log(house["color"]); // retrieve using bracket notation

// handling expression using bracket notation
var arrOfKeys = ["speed", "color", "make", "price"];
var car = {
  speed: 46,
  color: "Blue",
  make: "Toyota",
  price: 40000,
};
for (let i = 0; i < arrOfKeys.length; i++) {
  console.log("The car's", arrOfKeys[i], "is", car[arrOfKeys[i]]);
}


// array are objects - push and pop methods
function fruitBasket(arrOfKeys) {
  var fruits = [];
  fruits.push("Apple");
  fruits.push("Oranges");
  for (let i = 0; i < arrOfKeys.length; i++) {
    fruits.push(arrOfKeys[i]);
  }
  return fruits;
}
var arrOfKeys = ["Kiwi", "Mango", "Bananas", "Lichi", "Guava"];
fruits = fruitBasket(arrOfKeys);
console.log(fruits);

// fruits.pop();
// console.log(fruits);

// Math Object Sheet
console.log(Math.PI);
console.log(Math.ceil(10.38));
console.log(Math.floor(34.23));
console.log(Math.round(10.57));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(12, 34, 54, 1, 76));

var random = Math.random(); // lies between 0 and 0.99
console.log(random);
console.log(10 * random);

// Iterable - Arrays and Strings - String Manipulation
// ON ARRAY
var veggies = ["Onion", "Parsley", "Potato"];
for (let veg = 0; veg < veggies.length; veg++) {
  console.log(veggies[veg]);
}

//ON STRING
var greeting = "Hello";
for (let greet = 0; greet < greeting.length; greet++) {
  console.log(greeting[greet]);
}

var greet = "Howdy";
var user = "Lisa";
console.log(greet + "", user);
console.log(greet.concat(" ", user));

// String Functions
var word = "Morning";
console.log(word.length);
console.log(word.charAt(2));
console.log(word.indexOf("r"));
console.log(word.lastIndexOf("n"));

console.log("What-a-lovely-day".split("-"));
console.log(word.toUpperCase());
console.log(word.toLowerCase());

// Exercise--
var clothes = [];
clothes.push("Jeans");
clothes.push("T-shirt");
clothes.push("Shirt");
clothes.push("Kurta");
clothes.push("Shorts");
clothes.pop();
clothes.push("Cargo Jeans");
console.log(clothes[2]);

var favCar = {};
favCar.color = "Blue";
favCar.convertible = true; // using dot notation
favCar["priceUSD"] = 45000; // using bracket notation
console.log(favCar);
// Object Methods
var car = {};
car.color = "Red";
car.mileage = 50;
car["licensePlate"] = "LSN 123";
car["priceUSD"] = 50000;
console.log(car);

// add Method - Property of an object
car.turnTheKey = function (brand) {
    console.log("The car of", brand, "brand is running");
};
car.lightsOn = function (typeLight) {
    console.log("The car's", typeLight, "is on.");
};
console.log(car);
car.turnTheKey("Toyota");
car.lightsOn("headlight");

// typeof - returns data type of input parameter
console.log("--------");
console.log(typeof 10.2);
console.log(typeof "This is my JavScript code..");
console.log(typeof { type: "Object" });
console.log(
    typeof function () {
        console.log("function typeof");
    }
);

var num = 1;
console.log(num.toString());

var str = "10";
console.log(typeof str);
console.log(Number(str));
console.log(typeof Number(str));
console.log(Number.isInteger(10.23));


// Error Handling - Syntax Error, Reference Error and Type Error
// throw Try and Catch
//console.log(a + b);
console.log("This line is executed...");

// throw new ReferenceError(); - Throw an error forcefully
console.log("-----Using try catch capturing error...");
try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("There was an error...");
  console.log("Error was logged in error log..");
}
console.log("The program did not stop");

console.log("-----Using throw exception...");
try {
  throw new SyntaxError();
} catch (err) {
  console.log(err);
  console.log("Error was captured and logged...");
}
console.log("Program did not terminate");

console.log("----Using TyepError...");
try {
  var str = "Hello";
  str.pop();
} catch (err) {
  console.log(err);
  console.log("TypeError was captured in error log..");
}

try {
  console.log((10).toString(2));
  (10).toString(100);
} catch (err) {
  console.log(err);
  console.log("RangeError was captured in error log..");
}

// Empty Values - Undefined, NULL and Empty
// Undefined is retruned by default by a function unless explicitly returned something..
var word = "Mango";
console.log(word.match(/a/));

console.log("Jane Smitch");

var noise;
console.log(noise); // If value is unassigned during/after declaration the Undefined is assigned by default
noise = "Scream...";
console.log(noise);

// another example of Undefined
var item = {
  color: "Blue",
  priceUSD: 10,
  name: "Toy",
};
console.log(item.Color);

// Empty String - using "" or ''
var emptyString = "";
console.log(emptyString);

// Error prevention exercise
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
    } else if (typeof b != "number") {
      throw new ReferenceError("The second argument is not a number");
    } else {
      console.log(a + b);
  }
} catch (err) {
  console.log("Error!", err);
}
}
addTwoNums(5, "5");
console.log("It still works....");
*/

// Defensive Programming
function letterFinder(word, match) {
  var condition1 = typeof word == "string" && word.length >= 2;
  var condition2 = typeof match == "string" && match.length == 1;

  if (condition1 && condition2) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log("Found the", match, "at", i);
      } else {
        console.log("---No match found at", i);
      }
    }
  } else {
    console.log("Please pass correct arguments to the functions..!");
  }
}
console.log("--Failing Test....");
letterFinder(1, 5);
console.log("--Failing Test....");
letterFinder("Elephant", "ep");
console.log("--Passing Test....");
letterFinder("cat", "c");

var str = "Hello";
console.log(str.match("jello"));

Number(5).toPrecision(300);
