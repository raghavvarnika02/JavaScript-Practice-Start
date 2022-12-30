//nums = [0,1,0,3,12]
//output = [1,3,12,0,0]

function moveZeroes(numsArray, n) {
  //initialize the nonZero index at first position
  let nonZero = 0;

  //take the j to compare the next values
  for (let j = 0; j < n; j++) {
    //check if num[j] equal nahi hai 0 ko to swap krdo and nonZero ko increment else agar zero ho to ignore
    if (numsArray[j] != 0) {
      [numsArray[nonZero], numsArray[j]] = [numsArray[j], numsArray[nonZero]];
      nonZero++;
    }
  }

  return numsArray;
}

let nums = [0, 1, 0, 3, 12];
let n = nums.length;
let result = moveZeroes(nums, n);
console.log(result);
