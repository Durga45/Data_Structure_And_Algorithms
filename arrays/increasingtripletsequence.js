//in bruteforce we use three loops which is not efficeint

function increasingTripletSequence(nums){
let first = Infinity
let second=Infinity
for(let num of nums){
  if(num<=first){
    first=num
  }else if(num<=second){
    second=num
}else{
  return true
}
}
}
