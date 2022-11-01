"use strict";
exports.__esModule = true;
var SetOfStacks_1 = require("../Helper/SetOfStacks");
function testCountStack() {
    var heightLimit = 10;
    var initialValue = 0;
    var countStack = new SetOfStacks_1.SetOfStacks(initialValue, heightLimit);
    for (var i = 1; i < 100; i++) {
        countStack.push(i);
        console.log(countStack.lengthOf());
    }
    console.log("Expecting length of 100");
    console.log(countStack.lengthOf() == 100);
    console.log("Expecting pop value of 99");
    console.log(countStack.peek() == 99);
    for (var i = 0; i < 50; i++) {
        countStack.pop();
        console.log(countStack.lengthOf());
    }
    console.log("Expecting pop value of 49");
    console.log(countStack.pop() == 49);
}
testCountStack();
