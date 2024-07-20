


const {fromEuroToDollar}= require("./app.js");

test("One euro should be 1.07 dollars",function(){

    const dollars=fromEuroToDollar(1)

    const expected=1*1.07;

    expect(dollars).toBe(expected);
})