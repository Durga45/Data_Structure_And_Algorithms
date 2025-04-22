function moveZeroes(arr){
  //pointer 1
  let lastnonzeroelemnt=0
  for(let i=0;i<arr.length-1;i++){//pointer 2
    if(arr[i]!==0){
      [arr[i],arr[lastnonzeroelemnt]]=[arr[lastnonzeroelemnt],arr[i]]
      lastnonzeroelemnt++
    }
    
  }
  return arr
}

let myarr=[0,1,2,0,3,4,0]
let res=moveZeroes(myarr)
console.log(res)

