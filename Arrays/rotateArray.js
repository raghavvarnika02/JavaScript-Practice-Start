//rotate the array to right by k value
//nums = [1,2,3,4,5,6,7,8] , k=3
//result of rotate k=1 = [8,1,2,3,4,5,6,7]
//result of rotate k=2 = [7,8,1,2,3,4,5,6]
//result of rotate k=3 = [6,7,8,1,2,3,4,5]

//Here we need to observe the pattern that %10 => [0-1] ex: 34%10=4
//Similary % => %n => [0-(n-1)] and array index also starts from (0 to n-1)
//so last position is (n-1) and suppose we need to shift it k=3 so move 3 position right (n-1 +1)=n, (n-1 +2)=n+1, (n-1 +3)=n+2 and (n+2)%n=2 means we need to put the value on 2 index

function rotateArray(nums, k) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }

  nums = temp;
  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8],
  k = 3;
let result = rotateArray(nums, k);
console.log(result);
