 function merge(nums1, m, nums2, n) {
  
  let last = m + n - 1;

  
  let i = m - 1;
  let j = n - 1;

 
  while (j >= 0) {

      if (i >= 0 && nums1[i] > nums2[j]) {
          nums1[last] = nums1[i];
          i--;
      } else {  
          nums1[last] = nums2[j];
          j--;
      }
      last--; 
  }
};