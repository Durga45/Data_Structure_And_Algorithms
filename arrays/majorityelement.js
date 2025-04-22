function majorityElement(nums){
  let map =new Map();


  for(let num of nums){
    map.set(num,(map.get(num) || 0) + 1)
  }
  let majoritycount=nums.length/2
  for(let [key,value] of map){
    if(value >majoritycount){
      return key
    }
  }
  return null
}

let nums=[1,1,2,3,4,4,4,4,4]
console.log(majorityElement(nums))