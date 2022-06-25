/*Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )*/
function findSum(A, B, n) {
  let hash = new Map();

  for (let i = 0; i < n; i++) {
    if (!hash.has(A[i])) {
      hash.set(A[i], 1);
    } else {
      hash.set(A[i], hash.get(A[i]) + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!hash.has(B[i])) {
      hash.set(B[i], 1);
    } else {
      hash.set(B[i], hash.get(B[i]) + 1);
    }
  }

  let sum = 0;
  for (let [key, value] of hash.entries()) {
    if (value == 2) {
      sum += key;
    }
  }
  return sum;
}

let A = [2, 4, 1, 9, 3];
let B = [3, 1, 7, 9];

let n = A.length;

document.write(findSum(A, B, n));
/*Example: 

Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46
Explanation: Common elements are 10, 13*/

function findSum(a, b, N) {
  let hash = new Map();

  for (let i = 0; i < N; i++) {
    if (!hash.has(a[i])) {
      hash.set(a[i], 1);
    } else {
      hash.set(a[i], hash.get(a[i]) + 1);
    }
  }

  for (let i = 0; i < N; i++) {
    if (!hash.has(b[i])) {
      hash.set(b[i], 1);
    } else {
      hash.set(b[i], hash.get(b[i]) + 1);
    }
  }

  let sum = 0;
  for (let [key, value] of hash.entries()) {
    if (value == 2) {
      sum += key * 2;
    }
  }
  return sum;
}

let a = [12, 13, 6, 10];
let b = [13, 10, 16, 15];

let N = a.length;

document.write(findSum(a, b, N));
