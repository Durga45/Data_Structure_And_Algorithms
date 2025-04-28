const isSubsequence=(s,t)=>{
  let i=0
  let j=0
  while(i<s.length && j<t.length){
      if(s[i]==t[j]){
          i++
      }
      j++
  }
  return i==s.length

}

let s='hello'
let t='hel'
let res=isSubsequence(s,t)
console.log(res)