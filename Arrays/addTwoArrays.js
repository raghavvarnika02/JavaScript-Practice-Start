function findArraySum(a, n, b, m) {
  let i = n - 1;
  let j = m - 1;
  let ans = [];
  let carry = 0;

  while (i >= 0 && j >= 0) {
    let sum = a[i] + b[j] + carry;
    carry = sum / 10;
    sum = sum % 10;
    ans.push(sum);
    i--;
    j--;
  }

  while (i >= 0) {
    let sum = a[i] + carry;
    carry = sum / 10;
    sum = sum % 10;
    ans.push(sum);
    i--;
  }

  while (j >= 0) {
    let sum = b[j] + carry;
    carry = sum / 10;
    sum = sum % 10;
    ans.push(sum);
    j--;
  }

  while (carry != 0) {
    let sum = carry;
    carry = sum / 10;
    sum = sum % 10;
    ans.push(sum);
  }

  function reverse(ans) {
    let s = 0;
    let size = ans.length - 1;

    while (s < size) {
      [ans[s++], ans[size--]] = [[ans[size--], ans[s++]]];
    }

    return size;
  }

  return reverse(ans);
}

let a = [1, 2, 3, 9];
let b = [9];
let result = findArraySum(a, a.length, b, b.length);
console.log(result);
