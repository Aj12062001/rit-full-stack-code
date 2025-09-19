// Display "Hello, World!" in different ways
console.log('Hello, World!');
document.write('Hello, World!');
var heading = document.createElement('h1');
heading.textContent = 'Hello, World!';
 document.body.appendChild(heading); 

// var variable 
var fname="John";
console.log(fname)
var fname="annie";
console.log(fname);

// let variable
let age=25;
console.log(age);
age=30;
console.log(age);

// const variable
const pi=3.14;
console.log(pi);
console.log(typeof(pi));
const person={
    name:"John",
    age:30
};

//accessing object properties
console.log(person);
console.log(typeof(person));
console.log(person.name);
person.name="annie";
console.log(person.name);

// hoisting
console.log(x);
var x=10;

//console.log(y);
let y=20;
let c=5;
console.log(++c);
console.log(--c);
console.log(c);

// arithmetic operators
console.log(5 == '5');
console.log(5 === "5");
console.log(5 === '5');
console.log(5 != '5');
console.log(5 !== '5'); 

// logical operators 
console.log("hello");
let isAdult=true;
let hasTicket=false;
console.log(isAdult && hasTicket);
console.log(isAdult || hasTicket);
console.log(!isAdult);
console.log(!hasTicket);

// string concatenation
let greeting="Good Morning " + "ajin";
console.log(greeting);

// template literals
let studentAge =15
let canVote = studentAge >= 18 ? "yes":"no"
console.log(canVote);

// array
let arr1=[1,2,3,4,5];
console.log(arr1);
console.log(arr1.length);

// if statement
let age2 = 20;
if (age2 >= 18) {
  console.log("You are an adult.");
}

// if else statement
let age1 = 16;
if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// if else if else statement
let score = 49;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// while loop
let j = 1;
while (j <= 5) {
  console.log("Count: " + j);
  j++;
}

//do while loop
let k = 6;
do {
  console.log("Value: " + k);
  k++;
} while (k <= 5);

// for in loop
const person1 = {name3:"alice",age3:28};
for (let key in person1) {
  console.log(key + ": " + person1[key]);
}

// for of loop
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// function
function greet(name) {
  return "Hello, " + name + "!";
} 
console.log(greet("Alice"));

// arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); 

