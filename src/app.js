
const oneEuroIs={
    "JPY":156.5, //japanyen
    "USD": 1.07, //us dollar
    "GBP": 0.87, //british
}

function fromEuroToDollar (euroAmount){
    const dollarAmount =euroAmount * oneEuroIs.USD;
    return dollarAmount;
}



function fromDollarToYen(dollarAmount){
    const euroAmount= dollarAmount/oneEuroIs.USD;
    const yenAmount =  euroAmount*oneEuroIs.JPY;
    return yenAmount
}

function fromYenToPound(yenAmount){
    const euroAmount= yenAmount/oneEuroIs.JPY
    const poundAmount=euroAmount*oneEuroIs.GBP
    return poundAmount
}

module.exports={fromDollarToYen,fromEuroToDollar,fromYenToPound}