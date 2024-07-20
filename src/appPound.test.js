



const {fromYenToPound}= require("./app.js");

test("1 dollar to yen",function(){

    const yen=fromYenToPound(1)

    const expected=(1/156.5)*0.87;

    expect(yen).toBe(expected);
})