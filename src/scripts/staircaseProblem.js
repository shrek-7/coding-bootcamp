// There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
// Given N, write a function that returns the number of unique ways you can
// climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time,
// you could climb any number from a set of positive integers X?
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps
// at a time. Generalize your function to take in X.

// N => number of steps to climb
// X => allowed steps to be taken
function waysToClimb(N, X) {
  let num = [];
  num.length = N + 1;
  num[0] = 1; // if there are 0 steps to climb, there is only 1 ways.

  for (let i = 1; i <= N; i++) {
    let total = 0;

    for (let step of X) {
      if (i - step >= 0) {
        // check if any of the sllowed steps can be taken of a particular N value
        total += num[i - step];
      }
    }
    console.log("for N =", i, ", ways : ", total);
    num[i] = total;
  }

  return num[N];
}

console.log(waysToClimb(5, [1, 2, 3]));
