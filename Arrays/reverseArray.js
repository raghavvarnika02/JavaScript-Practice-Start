//reverse an array
//a = [11,2,6,4,7,9] => [9,7,4,6,2,11]
//https://www.programiz.com/javascript/destructuring-assignment

function reverse(a) {
  let start = 0;
  let end = a.length - 1;

  while (start <= end) {
    // let temp = 0;
    // temp = a[start];
    // a[start] = a[end];
    // a[end] = temp;

    //using destructuring assignment
    [a[start], a[end]] = [a[end], a[start]];

    start++;
    end--;
  }

  return a;
}

let a = [11, 2, 6, 4, 7, 9];
let result = reverse(a);
console.log(result);
