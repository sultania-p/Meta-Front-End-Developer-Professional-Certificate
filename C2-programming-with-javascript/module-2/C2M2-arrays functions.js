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
*/
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
