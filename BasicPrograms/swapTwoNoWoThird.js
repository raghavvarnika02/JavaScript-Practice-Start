//How would you swap two numbers without using a third variable

function swapTwoNumbers(a, b) {
  return ([a, b] = [b, a]);
}

let a = 10,
  b = 20;
console.log(swapTwoNumbers(a, b));
