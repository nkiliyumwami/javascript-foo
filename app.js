const priceStartDate=0.52
const priceEndDate=0.59
const product = 'Milk'

const inflaRate = (priceStartDate, priceEndDate , product) => (product ,  ((priceEndDate-priceStartDate)/priceStartDate) * 100 )


console.log('The inflation Rate of '+  product + ' is ' +  inflaRate( 0.52, 0.59, 'Milk')) 