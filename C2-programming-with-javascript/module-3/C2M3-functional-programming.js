// functional programming
/*
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function currencyConverter(amount, rate) {
  return amount * rate;
}

currencyTwo = currencyConverter(currencyOne, exchangeRate);
console.log(currencyTwo);

// console.log is also a function with default return of Undefined
function consoleLog(val) {
  console.log(val);
  return val;
}
consoleLog("Hello!!");

// functional programming paradigm
function doubleIt(num) {
    return num * 2;
}

function objectMaker(val) {
    return {
        prop: val,
    };
}

console.log(doubleIt(10).toString());
console.log(objectMaker(20));
console.log(objectMaker(doubleIt(50).toString()));

// function calling and recursion
var counter = 4;
function printNumber() {
    console.log("The number is", counter);
    counter = counter - 1;
    if (counter === 0) return;
    
    printNumber();
}
printNumber();

// Scope - WHich part of code is accessible or not - Local and GLobal
var globalScope = "Scoped to global..";
function scope() {
    var localScope = "Scoped to this function locally..";
    console.log(globalScope);
}
console.log(scope());

// functional programming paradigm -- Styles of coding - Functional or Object Oriented
// functional program
function distanceCalculator(speed, time) {
    return speed * time;
}
var speed = 20;
var time = 2;
var fareRate = 3.0;

totalDistance = distanceCalculator(speed, time);
totalFare = totalDistance * fareRate;
console.log("Total fare for the ride is", "$" + String(totalFare)); // both variables and functions are seperate and return value is used somewhere else in code

// object-oriented program
// both property and method exists inside the objects "belong together"
var virtualPet = {
    // creating and object
    sleepy: true,
    nap: function () {
        this.sleepy = false;
    },
};
console.log(virtualPet.sleepy);
console.log(virtualPet.nap());
console.log(virtualPet.sleepy);

// Firt Class Functions
function addTwoNums(a, b) {
    console.log("sum is", a + b);
}

function randomNum() {
    var randomNumber = Math.floor(Math.random() * 10);
    console.log("random number is", randomNumber);
    return randomNumber;
}

function specificNum() {
    return 50;
}

var useRandom = true;
var getNumber;
if (useRandom) {
    getNumber = randomNum;
} else {
    getNumber = specificNum;
}
addTwoNums(getNumber(), getNumber());

console.log("------------");

function addTwoNums(getNumber1, getNumber2) {
    console.log("sum is", getNumber1() + getNumber2());
}

function randomNum() {
    var randomNumber = Math.floor(Math.random() * 10);
    console.log("random number is", randomNumber);
    return randomNumber;
}

function specificNum() {
    return 50;
}

var useRandom = true;
var getNumber;
if (useRandom) {
    getNumber1 = randomNum;
} else {
    getNumber2 = specificNum;
}

addTwoNums(getNumber1, getNumber1);
addTwoNums(randomNum, specificNum);

// const, let and var
// let and const are block scope - can only be used with in code block and can be accessed inside the block
let color = "red";
console.log(color);

if (color == "red") {
  // <--- block scope { braces}
  let color = "blue";
  console.log(color);
}

// We can access variable defined with var even before is is declared.
console.log(user);

// now assign the values to the variable
var user = "Mike";
var user = "Rose";
var user = "Mark";
console.log(user);
var user;

// let - you cannot access the variable before declaring it
// .. and you cannot declare it again but only assign it
let user;
console.log(user);
user = "Anna";
console.log(user);
user = "Mark..";
console.log(user);

// const - You cannot access the variable before initialising it.. must assign while declaring
// you cannot redeclare the variable but only assign it
console.log(user)
const user;

const user = "Mark";
console.log(user);

user = "Larry";
*/
