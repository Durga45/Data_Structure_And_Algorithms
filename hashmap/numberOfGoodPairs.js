//bruteforce
function numIdenticalPairs(nums) {
  let count = 0;
for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
        if(nums[i] === nums[j]) {
            count++;
        }
    }
}
return count;
};

//using hash map
function numIdenticalPairss(nums) {
  let map = {};            
  let count = 0;           

  for (let num of nums) {  
      if (map[num]) {      
          count += map[num]; 
          map[num]++;   
      } else {
          map[num] = 1;  
      }
  }

  return count;

};
