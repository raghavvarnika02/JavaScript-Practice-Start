// Input string1 = 'Varnika';
// Output reverseResult = 'akinraV';

function reverseString(str) {
  // let i;
  // let l = string1.length - 1;

  // let temp = [];
  // for (i = 0; i < l; i++) {
  //   temp[l] = string1[i];
  //   console.log(temp);
  //   l--;
  // }

  // while (i < l) {
  //   [string1[i], string1[l]] = [string1[l], string1[i]];
  //   console.log(string1);
  //   i++;
  //   l--;
  // }

  // Take empty array revArray
  const revArray = [];
  const length = str.length - 1;

  // Looping from the end
  for (let i = length; i >= 0; i--) {
    revArray.push(str[i]);
  }

  // Joining the array elements
  return revArray.join("");
}

let string1 = "Varnika Raghav";
let reverseResult = reverseString(string1);
console.log("reverse of string is: ", reverseResult);
