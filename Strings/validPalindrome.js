//Valid character means: value should be [0-9][a-z][A-Z]
//APPROCH:
//1. remove extra character
//2. try to put everything either in lower/upper case
//3. check for palindrome

function validPalindrome(str) {
  //remove extra characters
  let temp = [];
  let s = 0;
  let e = str.length - 1;

  for (let j = 0; j <= e; j++) {
    if (removeExtraCharacter(str[j])) {
      temp.push(str[j]);
    }
  }

  //put into lower case
  for (let j = 0; j <= e; j++) {
    temp[j] = toLowerCase(temp[j]);
  }

  //check for palindrome
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

function toLowerCase(ch) {
  if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
    return ch;
  } else {
    let temp = "a".charCodeAt(0) - "A".charCodeAt(0) + ch.charCodeAt(0);
    return String.fromCharCode(temp);
  }
}

function removeExtraCharacter(ch) {
  if (
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    (ch >= "0" && ch <= "9")
  ) {
    return 1;
  }

  return 0;
}

let str = "VaraaV";
console.log(validPalindrome(str));
