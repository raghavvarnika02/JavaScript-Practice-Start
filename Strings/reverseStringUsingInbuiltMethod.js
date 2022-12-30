function reverseStringUsingInbuiltMethod(str) {
  //str.split("") or [...str] : it will split it in single element in Array ['V','a','r','n','i','k','a','','R','a','g','h','a','v']
  //.reverse() : it will reverse the array
  //.join(): it will merge the array into string

  //return str.split("").reverse().join("");

  //OR
  return [...str].reverse().join("");
}

let str = "Varnika Raghav";
console.log(reverseStringUsingInbuiltMethod(str));
