// var num = 10;
// var num = 8;
// console.log(num);

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Ayush";
//   let age = 10;
// }

// sayHi();

// var hero = {
//   _name: "Varnika Raghav",
//   sayHi: function () {
//     return this._name;
//   },
// };

// var sayiHiAcess = hero.sayHi;
// console.log(sayiHiAcess());
// console.log(hero.sayHi());

// function greet() {
//   setTimeout(function () {
//     console.log(this.name);
//   }, 500);
// }
// greet.call({ name: "Daniel Craig" });

/*In the snippet above, console.log is called inside an anonymous callback function
 passed to setTimeout. In this case, the callback function will create a 
 context that is not explicitly set. In non-strict mode, this will be set to 
 the global object. Even if we are calling the greet function with call and 
 we are setting the context of hello to {name: 'Daniel Craig'}, the callback function 
 will not use the same context as the hello function and it will look for the name 
 property on the global object. If a name property is defined it will return the value,
  otherwise it will log undefined.*/
