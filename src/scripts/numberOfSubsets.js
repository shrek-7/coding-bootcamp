/**
 * find the total number of subsets in a given array for a given number.
 *
 *
 * input :
 * [2,4,6,10]
 * total = 10
 *
 * output = 2 , ( [2,4,10] [6,10] )
 */

let list = [2, 4, 6, 10];
let total = 10;
let i = list.length - 1;

// iterate from the end of given array
function subset(arr, total, i) {
  //base cases
  if (total === 0) return 1;
  if (i < 0) return 0;
  if (total < 0) return 0;
  else if (total < arr[i]) {
    // just skip the number if required total is less than an element in the array
    return subset(arr, total, i - 1);
  }

  // consider both the cases 1: when a number is included in the subset
  // 2: when the number is not added in the subset.(same as previous step)
  else {
    return subset(arr, total, i - 1) + subset(arr, total - arr[i], i - 1);
  }
}

console.log(subset(list, total, i));
