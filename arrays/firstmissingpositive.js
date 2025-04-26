function firstMissingPositive(nums) {
  const n = nums.length;

  // Place each number in its correct position
  for (let i = 0; i < n; i++) {
      while (
          nums[i] > 0 &&
          nums[i] <= n &&
          nums[nums[i] - 1] !== nums[i]
      ) {
          // Swap to place the number in the correct position
          let temp = nums[nums[i] - 1];
          nums[nums[i] - 1] = nums[i];
          nums[i] = temp;
      }
  }

  // After placing numbers correctly, find the first missing
  for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
          return i + 1;
      }
  }

  // If all numbers from 1 to n are present, missing number is n+1
  return n + 1;
}