'use strict';
const body = document.querySelector('body');
body.style.backgroundColor = "blue";

console.log("Code running line 5.");

function greet(){
    console.log("Hello World!");
    let numbers = [1,2,3];
    console.log(numbers);
    let obj = {name: "Alice"};
    console.log(obj);
}

console.error('Code running line 15.');

greet();

newFunction();

let newFunction = () => {
    console.log('My Function');
};

