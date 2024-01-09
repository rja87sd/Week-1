"use strict";
const body = document.querySelector("body");
body.style.backgroundColor = "blue";

console.log("Code running line 5.");

let number = 5;

function greet() {
  console.log("Hello World!");
  let numbers = [1, 2, 3];
  console.log(numbers);
  let obj = { name: "Alice" };
  console.log(obj);
}

console.error("Code running line 15.");

greet();

newFunction();

function newFunction() {
  console.log("My Function");
}

testScope();

function testScope() {
  let scopedVar = "I am local.";
  console.log(scopedVar);
}

let person = {
  name: "Alice",
  age: 30,
  location: { house: "House", car: "car" },
};
// delete person.location.house;
console.log(person.location.house.toLocaleUpperCase());

// console.log(number.toLocaleUpperCase());

let item = 'Hello World!';

// let instance = new item();

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk (){
        console.log(this.name + ' says Hello!');
    }
};

let frank = new Person('Frank', 34);
console.log(frank);
frank.talk();

let total = 10;

for (let i = 0; i < 10; i++){
    total = total + 1;
};
console.log('Total: ', total);

let items = ['apple', 'banana', 'orange'];
for (let i = items.length; i > 0; i--){
    console.log(items[i - 1].toUpperCase());
};

let age = 20;
if (age > 18 || age < 21) {
    console.log('Age is between 18 and 20');
};




