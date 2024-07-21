// object oriented programming
// functions inside objects are called methods

// functional program
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, stateTax) {
  return shoes * stateTax;
}
var toPay = totalPrice(shoes, stateTax);
console.log("Total Pay", toPay);

// using OOPs
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total Price", calculation);
    return calculation;
  },
};
purchase1.totalPrice();

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax;
    console.log("Total Price", calculation);
    return calculation;
  },
};
purchase2.totalPrice();

// Class - Building as many objects as we want
// like multiple car objects for a race
class Car {
  constructor(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log(this.brand, "Turbo is On!");
  }
}

const car1 = new Car("Ferrari", "Red", 120);
const car2 = new Car("Aston Martin", "Blue", 90);
car1.turboOn();
car2.turboOn();

// Fundamental principle of OOPS
// Inheritance, Encapsulation, Abstraction, Polymorphism

class Bird {
  useWings() {
    console.log("Flying..");
  }
}

class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping..");
  }
}

class Penguin extends Bird {
  useWings() {
    console.log("Diving..");
  }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();
console.log("*********------------------**********");

class Vehicle {
  constructor(type, fuel) {
    this.type = type;
    this.fuel = fuel;
  }

  showDetails() {
    console.log("This is of type -", this.type);
    console.log("Vehicle uses -", this.fuel);
  }

  needMechanic(mechanictype) {
    console.log("Needs a", mechanictype, "mechanic to repair");
  }
}

class Car extends Vehicle {
  useWheels() {
    console.log("The car uses wheels..");
    super.needMechanic("auto");
  }
}

class Plane extends Vehicle {
  useWings() {
    console.log("Plane has wings..");
    super.needMechanic("plane");
  }
}

var vehicle = new Vehicle("Personal", "Petrol");
vehicle.showDetails();
var ferrari = new Car();
ferrari.useWheels();
var airplane = new Plane();
airplane.useWings();

// anothe rexample
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle, department) {
    super(name, age); // this is how we access the super class properties
    this.jobTitle = jobTitle;
    this.department = department;
  }

  getEmployeeInfo() {
    return `${this.name} is a ${this.age} years old ${this.jobTitle} and works in ${this.department} department`;
  }
}

const employee = new Employee(
  "Piyush",
  29,
  "Software Engineer",
  " Fulfillment Tech."
);
const piyush = employee.getEmployeeInfo();
console.log(piyush);

// constructors
// COnstructors functions are called constructors, and can be created using keyword "new"
// Math, Date, Boolean, Array, Map, Set, JSON etc..
// Some built in objects do not have constructos and dont need a constructor like Math // they do not need instance to be created
// ... and can be accessed directly .
console.log(Math.pow(2, 5));

// build custom constructor functions
function Icecream(flavour) {
  this.flavour = flavour;
  this.meltIt = function () {
    console.log(`This ${this.flavour} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let mangoIcecream = new Icecream("Mango");
console.log(kiwiIcecream);
console.log(mangoIcecream);
kiwiIcecream.meltIt();
mangoIcecream.meltIt();

let apple = new String("apple");
console.log(apple);

console.log("abcd".match(/d/));
console.log("abcd".match(/b/));

// For Array, FUnctions and RegExp we should we the object literal instead such as  [], () {}, /()/
// For other built in types we can use the constructor directly
let date = new Date();
new Error();
new Map();

console.log(date.getDate());

// Prototyping Object
var bird = {
  hasWings: true,
  canFly: true,
  hasFeatheres: true,
};

var eagle1 = Object.create(bird); // it will create a protype of Bird object
console.log("eagle1:", eagle1);
console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeatheres);

var penguin1 = Object.create(bird);
penguin1.canFly = false; //override the only penguin1 object property
console.log("penguin1 has wings:", penguin1.hasWings);
console.log("penguin1 can fly:", penguin1.canFly);
console.log("penguin1 has feathers:", penguin1.hasFeatheres);

// creating classes and using constructor
// constructor is used to create properties of the future objects of the class created
// this -> refers to future object instance of Train class lets say - Mail, Express, Cargo etc
class Train {
  constructor(color, lightsOn, type) {
    this.color = color;
    this.lightsOn = lightsOn;
    this.type = type;
  }

  lightDisplay(lightsOn) {
    if (lightsOn == true) {
      return "show lights";
    } else {
      return "does not have lights on";
    }
  }

  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }

  lightStatus() {
    console.log("Lights on?", this.lightsOn);
  }

  getSelf() {
    console.log(this);
  }

  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

var myFirstTrain = new Train("Red", false, "Express");
// console.log(
//   "The train is of " +
//     myFirstTrain.color +
//     " color and of " +
//     myFirstTrain.type +
//     " type and " +
//     myFirstTrain.lightDisplay(myFirstTrain.lightsOn)
// );

var mySecondTrain = new Train("Blue", true, "Superfast");
// mySecondTrain.toggleLights(); // toggle the value to false and assigned to the instance object property
// mySecondTrain.lightStatus();
// mySecondTrain.getSelf();
// mySecondTrain.getPrototype();
// console.log(mySecondTrain.lightsOn);

// Class syntax - > keeps object instance data seperate (property) to Shared objects functionality (like functions)
// Using Polymorphism - Creating subclasses using Super class or Prent Class and extending property and overriding the inherited behavior
class HighSpeedTrain extends Train {
  // HighSpeedTrain is a sub-class of Superclass Train
  constructor(passengers, highSpeedOn, color, lightsOn) {
    // we can INHERIT any of the property of base/Super class along with new subclass properties, overriding using Super keyword
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  // Also all the Super-class prototype methods gets inherited
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High Speed Status:", this.highSpeedOn);
  }
  // Update Super class method to use differently..
  toggleLights() {
    super.toggleLights();
    super.lightStatus();
    console.log("Lights are 100% operational..");
  }
}

var myThirdTrain = new Train("White", false, "Rajdhani");
var myHighSpeedTrain = new HighSpeedTrain(200, false, "Green", false);
myThirdTrain.toggleLights();
myThirdTrain.lightStatus();

myHighSpeedTrain.toggleHighSpeed();
myHighSpeedTrain.lightStatus();

myThirdTrain.getPrototype();

// Creating new class
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class TreadMill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8); // Property which of an object of class StationaryBike containing properties pos and gears
    this.treadmill = new TreadMill(treadmillPos, 5); // Property which of an object of class TreadMill containing properties pos and gears
  }
}

var boxingGym = new Gym("7-22", "Right Corner", "Left Corner");

console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBike);
console.log(boxingGym.treadmill);

// Default parameters
// ES6 feature allows me to set a default parameter inside a function definition
function noDefaultParams(number) {
  console.log("Result: ", number * number);
}
noDefaultParams(); // Returns NaN as it expects a paramter to be parsed but did not thorw an error

function withDefaultParams(number = 10) {
  console.log("Result: ", number * number);
}
withDefaultParams(); // Returns squared due to default value

// Designing an OO program
// Design with the requirements as below --->>>>
/*
class Animal {
    // constructor: color, energy
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    // sleep()
        // energy += 20
        // console.log energy
}
class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound()
        // console.log sound
}
class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    // makeSound()
        // console.log sound
}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
}
class Parrot extends Bird {
    // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
}
*/

class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is decreasing, currently at:", this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }

  sleep() {
    this.energy += 20;
    console.log("Energy is increasing, curerntly at:", this.energy);
  }

  getColor() {
    console.log(this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "Roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    if (this.canTalk) {
      console.log("A Talking Parrot..!");
    }
  }
}

// Creating animal objects..
var polly = new Parrot(true); // Passing true/false to the constructor to make parrot talk or not
var fiji = new Parrot(false);

console.log("-----Fiji object-------");
fiji.makeSound();
fiji.makeSound(true);

console.log("-----Polly object-------");
polly.makeSound();
polly.makeSound(true);

console.log("------");
console.log(polly.color);
console.log(polly.energy);

polly.isActive();

console.log("------ Penguin -----");
var penguin = new Bird("shriek", false, "black and white", 200);
console.log(penguin);

console.log(penguin.sound);
console.log(penguin.canFly);
console.log(penguin.color);
console.log(penguin.energy);
penguin.isActive();

console.log("---- Leo -------");
var leo = new HouseCat();
console.log(leo);
// leo, no purring..
leo.makeSound(false);
// leo, both purr and meow
leo.makeSound(true);

console.log("---- Cuddles -------");
var cuddles = new Tiger();
console.log(cuddles);
console.log(cuddles.canClimbTrees);
console.log(cuddles.tigerSound);
console.log(cuddles.energy);
console.log(cuddles.canJumpHigh);
cuddles.makeSound(false);
cuddles.makeSound(true);
