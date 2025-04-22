function findDuplicates(nums){
  let seen=new Set()
  for (let num of nums){
    if(seen.has(num)){
      return true
    }
    seen.add(num)
  }
  return false
}

let myarr=[1,2,3,4,4]
let res=findDuplicates(myarr)
console.log(res)