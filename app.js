const priceStartDate=0.52
const priceEndDate=0.59

const inflaRate = (priceStartDate, priceEndDate) => ((priceEndDate-priceStartDate)/priceStartDate) * 100 


console.log(inflaRate(0.52, 0.59))