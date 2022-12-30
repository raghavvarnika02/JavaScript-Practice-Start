//a = [1,6,4,7,9] & b= [2,5,10,8,12]

function mergeTwoSortedArray(a, b) {
  let n = a.length;
  let m = b.length;
  let result = [];
  let i = 0,
    j = 0,
    k = 0;

  //It will check whether index is less than the actual no. of elements
  while (i < n && j < m) {
    //compare first element of first array with first element of second array and
    //copy the lower element to third array, incrementing the index value of copied wala array
    //leaving the second one as is.
    if (a[i] < b[j]) {
      result[k++] = a[i++];
    } else {
      result[k++] = b[j++];
      //k++ and j++
    }
  }

  //copy remaining elements of first array
  while (i < n) {
    result[k++] = a[i++];
  }

  //copy remaining elements of second array
  while (j < m) {
    result[k++] = b[j++];
  }

  return result;
}

let a = [1, 4, 6, 7, 9];
let b = [2, 5, 8, 10, 12, 15];
let result = mergeTwoSortedArray(a, b);
console.log(result);
