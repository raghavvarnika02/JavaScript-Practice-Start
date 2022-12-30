//str = 'abcba' // reverse of a string is string itself

function palindromeString(str) {
  let s = 0;
  let e = str.length - 1;

  while (s <= e) {
    if (str[s] !== str[e]) {
      return 0;
    } else {
      s++;
      e--;
    }
  }

  return 1;
}

let str = "Noon";
console.log(palindromeString(str.toLowerCase));
