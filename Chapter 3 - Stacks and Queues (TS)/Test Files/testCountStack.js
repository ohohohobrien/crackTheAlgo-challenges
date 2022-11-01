"use strict";
exports.__esModule = true;
var CountStack_1 = require("../../Helper/CountStack");
function testCountStack() {
    var heightLimit = 10;
    var initialValue = 1;
    var countStack = new CountStack_1.CountStack(initialValue, heightLimit);
    for (var i = 2; i < 11; i++) {
        countStack.lengthOf();
        countStack.push(i);
    }
    countStack.lengthOf();
    console.log("Expecting length of ".concat(heightLimit));
    console.log(countStack.lengthOf() == heightLimit);
    console.log("Expect error message exceeding stack:");
    try {
        countStack.push(11);
    }
    catch (e) {
        console.log(e.message);
        console.log(e instanceof Error);
    }
    countStack.pop();
    console.log("Expecting length of ".concat(heightLimit - 1));
    console.log(countStack.lengthOf() == (heightLimit - 1));
}
testCountStack();
