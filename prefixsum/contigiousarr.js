function contigious(nums) {
  let map=new Map()
  map.set(0,-1)
  let maxlength=0
  let sum=0
  for(let i=0;i<nums.length;i++){
    sum+=nums[i]===0?-1:1
    if(map.has(sum)){
      const previndex=map.get(sum)
      const len=i-previndex
      maxlength=Math.max(maxlength,len)
    }else{
      map.set(sum,i)
    }
  }
  return maxlenght
  
}