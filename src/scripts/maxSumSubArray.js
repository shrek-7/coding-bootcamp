// Given an integer array nums,
// find the contiguous subarray
// (containing at least one number)
// which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
  let max = null;
  let sum = 0;

  nums.forEach(item => {
    if (sum < 0) {
      // whenever sum goes negative make it 0. Kadane's algorithm.
      sum = 0;
    }
    sum += item;

    if (max === null || max < sum) {
      max = sum;
    }
  });

  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
