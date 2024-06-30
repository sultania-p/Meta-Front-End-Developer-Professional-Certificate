/*
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
*/

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
