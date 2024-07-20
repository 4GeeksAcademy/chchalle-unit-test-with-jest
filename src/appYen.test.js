

const {fromDollarToYen}= require("./app.js");

test("1 dollar to yen",function(){

    const yen=fromDollarToYen(1)

    const expected=(1/1.07)*156.5;

    expect(yen).toBe(expected);
})