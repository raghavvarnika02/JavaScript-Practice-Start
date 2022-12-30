//How do you find the factorial of an integer
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
}

let result = factorial(4);
console.log(result);
