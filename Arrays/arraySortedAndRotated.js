//nums = [3,4,5,1,2], output: true

function arraySortedAndRotated(nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      count++;
    }
  }

  if (nums[n - 1] > nums[0]) {
    count++;
  }

  return count <= 1;
}

let nums = [3, 4, 5, 1, 2];
let result = arraySortedAndRotated(nums);
console.log(result);
