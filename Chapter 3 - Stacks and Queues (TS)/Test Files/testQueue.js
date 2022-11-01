"use strict";
// test Queue data strcutures
exports.__esModule = true;
var Queue_1 = require("../../Helper/Queue");
function testQueue() {
    var newQueue = new Queue_1.Queue(0);
    var range = 5;
    for (var i = 1; i < range; i++) {
        newQueue.enqueue(i);
        console.log("Expect value of: ".concat(i, " | ").concat(newQueue.peekBottom() == i));
    }
    console.log(newQueue.peek());
    for (var i = 0; i < range; i++) {
        console.log("Expect value of: ".concat(i, " | ").concat(newQueue.peek() == (i)));
        newQueue.dequeue();
    }
    try {
        newQueue.dequeue();
    }
    catch (e) {
        console.log("Expect error: " + (e.message != null));
        console.log(e.message);
    }
    console.log("Expect empty queue: | ".concat(newQueue.isEmpty()));
    newQueue.enqueue(10);
    newQueue.enqueue(9);
    newQueue.enqueue(8);
    console.log("Removed item from queue: " + newQueue.dequeue());
    console.log("Expect value of: 9 | ".concat(newQueue.peek() == 9));
    console.log("Expect value of: 8 | ".concat(newQueue.peekBottom() == 8));
}
testQueue();
