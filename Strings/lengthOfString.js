function lengthOfString(name) {
  let count = 0;

  for (let i = 0; name[i] !== undefined; i++) {
    count++;
  }
  return count;
}

let name1 = "Varnika Raghav";
let result = lengthOfString(name1);
console.log(result);
console.log("length through default method", name1.length);
