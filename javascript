// JavaScript Interview Questions for Freshers

// 1.  What are the different data types present in javascript?
// 2.  Explain Hoisting in javascript.
// 3.  Why do we use the word “debugger” in javascript?
// 4.  Difference between “ == “ and “ === “ operators.
// 5.  Difference between var and let keyword in javascript.
// 6.  Explain Implicit Type Coercion in javascript.
// 7.  Is javascript a statically typed or a dynamically typed language?
// 8.  What is NaN property in JavaScript?
// 9.  Explain passed by value and passed by reference.
// 10. What is an Immediately Invoked Function in JavaScript?
// 11. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
// 12. Explain Higher Order Functions in javascript.

// JavaScript Interview Questions for Freshers

// 1.  What are the different data types present in javascript?
// 2.  Explain Hoisting in javascript.
// 3.  Why do we use the word “debugger” in javascript?
// 4.  Difference between “ == “ and “ === “ operators.
// 5.  Difference between var and let keyword in javascript.
// 6.  Explain Implicit Type Coercion in javascript.
// 7.  Is javascript a statically typed or a dynamically typed language?
// 8.  What is NaN property in JavaScript?
// 9.  Explain passed by value and passed by reference.
// 10. What is an Immediately Invoked Function in JavaScript?
// 11. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
// 12. Explain Higher Order Functions in javascript.
// 13. Explain “this” keyword.
// 14. What do you mean by Self Invoking Functions?
// 15. Explain call(), apply() and, bind() methods.
// 16. What is the difference between exec () and test () methods in javascript?
// 17. What is currying in JavaScript?
// 18. What are some advantages of using External JavaScript?
// 19. Explain Scope and Scope Chain in javascript.
// 20. Explain Closures in JavaScript.
// 21. Mention some advantages of javascript.
// 22. What are object prototypes?
// 23. What are callbacks?
// 24. What are the types of errors in javascript?
// 25. What is memoization?
// 26. What is recursion in a programming language?
// 27. What is the use of a constructor function in javascript?
// 28. What is DOM?
// 29. Which method is used to retrieve a character from a certain index?
// 30. What do you mean by BOM?
// 31. What is the distinction between client-side and server-side JavaScript?
//     JavaScript Interview Questions for Experienced
// 32. What are arrow functions?
// 33. What do mean by prototype design pattern?
// 34. Differences between declaring variables using var, let and const.
// 35. What is the rest parameter and spread operator?
// 36. In JavaScript, how many different methods can you make an object?
// 37. What is the use of promises in javascript?
// 38. What are classes in javascript?
// 39. What are generator functions?
// 40. Explain WeakSet in javascript.
// 41. Why do we use callbacks?
// 42. Explain WeakMap in javascript.
// 43. What is Object Destructuring?
// 44. Difference between prototypal and classical inheritance
// 45. What is a Temporal Dead Zone?
// 46. What do you mean by JavaScript Design Patterns?
// 47. Is JavaScript a pass-by-reference or pass-by-value language?
// 48. Difference between Async/Await and Generators usage to achieve the same functionality.
// 49. What are the primitive data types in JavaScript?
// 50. What is the role of deferred scripts in JavaScript?
// 51. What has to be done in order to put Lexical Scoping into practice?
// 52. What is the purpose of the following JavaScript code?

// ## JavaScript Coding Interview Questions:

// ---

// 53. Guess the outputs of the following codes:
//     // Code 1:

// function func1(){
// setTimeout(()=>{
// console.log(x);
// console.log(y);
// },3000);

// var x = 2;
// let y = 12;
// }
// func1();

// // Code 2:

// function func2(){
// for(var i = 0; i < 3; i++){
// setTimeout(()=> console.log(i),2000);
// }
// }
// func2();

// // Code 3:

// (function(){
// setTimeout(()=> console.log(1),2000);
// console.log(2);
// setTimeout(()=> console.log(3),0);
// console.log(4);
// })();
// Answers:

// Code 1 - Outputs 2 and 12. Since, even though let variables are not hoisted, due to the async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.
// Code 2 - Outputs 3, three times since variable declared with var keyword does not have block scope. Also, inside the for loop, the variable i is incremented first and then checked.
// Code 3 - Output in the following order:
// 2
// 4
// 3
// 1 // After two seconds
// Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API, and therefore, the complete function executes before the setTimeout function can execute.

// ---

// 54. Guess the outputs of the following code:
//     // Code 1:

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// // Code 2:

// function runFunc(){
// console.log("1" + 1);
// console.log("A" - 1);
// console.log(2 + "-2" + "2");
// console.log("Hello" - "World" + 78);
// console.log("Hello"+ "78");
// }
// runFunc();

// // Code 3:

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));
// Answers:

// Code 1 - Output will be {name: “Akki”}.

// Adding objects as properties of another object should be done carefully.

// Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,

// While setting a property of an object, javascript coerces the parameter into a string.

// Therefore, since y is an object, it will be converted to ‘object Object’.

// Both x[y] and x[z] are referencing the same property.

// Code 2 - Outputs in the following order:

// 11
// Nan
// 2-22
// NaN
// Hello78
// Code 3 - Output in the following order due to equality coercion:

// true
// false

// ---

// 55. Guess the output of the following code:
//     var x = 23;

// (function(){
// var x = 43;
// (function random(){
// x++;
// console.log(x);
// var x = 21;
// })();
// })();
// Answer:
// Output is NaN.

// random() function has functional scope since x is declared and hoisted in the functional scope.

// Rewriting the random function will give a better idea about the output:

// function random(){
// var x; // x is hoisted
// x++; // x is not a number since it is not initialized yet
// console.log(x); // Outputs NaN
// x = 21; // Initialization of x
// }

// ---

// 56. Guess the outputs of the following code:
//     // Code 1

// let hero = {
// powerLevel: 99,
// getPower(){
// return this.powerLevel;
// }
// }

// let getPower = hero.getPower;

// let hero2 = {powerLevel:42};
// console.log(getPower());
// console.log(getPower.apply(hero2));

// // Code 2

// const a = function(){
// console.log(this);

//     const b = {
//       func1: function(){
//         console.log(this);
//       }
//     }

//     const c = {
//       func2: ()=>{
//         console.log(this);
//       }
//     }

//     b.func1();
//     c.func2();

// }

// a();

// // Code 3

// const b = {
// name:"Vivek",
// f: function(){
// var self = this;
// console.log(this.name);
// (function(){
// console.log(this.name);
// console.log(self.name);
// })();
// }
// }
// b.f();
// Answers:

// Code 1 - Output in the following order:

// undefined
// 42
// Reason - The first output is undefined since when the function is invoked, it is invoked referencing the global object:

// window.getPower() = getPower();

// Code 2 - Outputs in the following order:

// global/window object
// object "b"
// global/window object

// Since we are using the arrow function inside func2, this keyword refers to the global object.

// Code 3 - Outputs in the following order:

// "Vivek"
// undefined
// "Vivek"
// Only in the IIFE inside the function f, this keyword refers to the global/window object.

// ---

// 57. Guess the outputs of the following code:
//     \*\*Note - Code 2 and Code 3 require you to modify the code, instead of guessing the output.
//     // Code 1

// (function(a){
// return (function(){
// console.log(a);
// a = 23;
// })()
// })(45);

// // Code 2

// // Each time bigFunc is called, an array of size 700 is being created,
// // Modify the code so that we don't create the same array again and again

// function bigFunc(element){
// let newArray = new Array(700).fill('♥');
// return newArray[element];
// }

// console.log(bigFunc(599)); // Array is created
// console.log(bigFunc(670)); // Array is created again

// // Code 3

// // The following code outputs 2 and 2 after waiting for one second
// // Modify the code to output 0 and 1 after one second.

// function randomFunc(){
// for(var i = 0; i < 2; i++){
// setTimeout(()=> console.log(i),1000);
// }
// }
// randomFunc();
// Answers -

// Code 1 - Outputs 45.

// Even though a is defined in the outer function, due to closure the inner functions have access to it.

// Code 2 - This code can be modified by using closures,

// function bigFunc(){
// let newArray = new Array(700).fill('♥');
// return (element) => newArray[element];
// }

// let getElement = bigFunc(); // Array is created only once
// getElement(599);
// getElement(670);
// Code 3 - Can be modified in two ways:

// Using let keyword:

// function randomFunc(){
// for(let i = 0; i < 2; i++){
// setTimeout(()=> console.log(i),1000);
// }
// }
// randomFunc();
// Using closure:

// function randomFunc(){
// for(var i = 0; i < 2; i++){
// (function(i){
// setTimeout(()=>console.log(i),1000);
// })(i);
// }
// }
// randomFunc();

// ---

// 58. Write a function that performs binary search on a sorted array.
// 59. Implement a function that returns an updated array with r right rotations on an array of integers a .
// 60. Write the code for dynamically inserting new components.
// 61. Write the code given If two strings are anagrams of one another, then return true.
// 62. Write the code to find the vowels
// 63. In JavaScript, how do you turn an Object into an Array []?

// program to print the text
// greet();

// let greet = function() {
//     console.log('Hi, there.');
// }
// Run Code
// Output

// Uncaught ReferenceError: greet is not defined
// If var was used in the above program, the error would be:

// Uncaught TypeError: greet is not a function
