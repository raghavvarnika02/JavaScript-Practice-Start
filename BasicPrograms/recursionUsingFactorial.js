function recursionUsingFactorial(num) {
  if (num >= 1) {
    return num * recursionUsingFactorial(num - 1);
  } else {
    return 1;
  }
}

let result = recursionUsingFactorial(4);
console.log(result);
