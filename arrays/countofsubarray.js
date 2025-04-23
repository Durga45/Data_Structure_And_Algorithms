//initally my approach was to use two pointer
function subarrayZeroCount(nums){
let count=0
let streak=0
for(let i=0;i<nums.length;i++){
  if(nums[i]===0){
    streak++
    count+=streak
  }else{
    streak=0
  }
}
return count

}

console.log(subarrayZeroCount([0,0,0,1,0,0,1,1,0]))