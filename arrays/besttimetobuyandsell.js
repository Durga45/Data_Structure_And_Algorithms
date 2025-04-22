function bestTimeToBuyAndSell(prices){
  let minPrice=Infinity
  let maxProfit=0
  for(let i=0;i<prices.length;i++){
    if(prices[i]<minPrice){
      minPrice=prices[i]
    }
    let profit=prices[i]-minPrice
    if(profit>maxProfit){
      maxProfit=profit
    }
  }
  return maxProfit
}

let prices=[7,1,5,4,2]
let res=bestTimeToBuyAndSell(prices)
console.log(res)