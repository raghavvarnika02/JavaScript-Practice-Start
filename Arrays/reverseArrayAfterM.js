//Reverse an array after m index

function reverseAfterIndex(arr, index) {
  let start = index + 1;
  let end = arr.length - 1;

  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let m = 3;
let result = reverseAfterIndex(arr, 3);
console.log(result);
