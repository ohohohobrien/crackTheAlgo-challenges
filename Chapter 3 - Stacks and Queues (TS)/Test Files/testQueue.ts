// test Queue data strcutures

import { Queue } from "../../Helper/Queue";

function testQueue() {

    const newQueue = new Queue(0);
    const range = 5;
    for (let i = 1; i < range; i++) {
        newQueue.enqueue(i);
        console.log(`Expect value of: ${i} | ${newQueue.peekBottom() == i}`);
    }
    console.log(newQueue.peek());
    for (let i = 0; i < range; i++) {
        console.log(`Expect value of: ${i} | ${newQueue.peek() == (i)}`);
        newQueue.dequeue();
    }

    try {
        newQueue.dequeue();
    } catch(e: any) {
        console.log("Expect error: " + (e.message != null))
        console.log(e.message);
    }

    console.log(`Expect empty queue: | ${newQueue.isEmpty()}`);

    newQueue.enqueue(10);
    newQueue.enqueue(9);
    newQueue.enqueue(8);
    console.log("Removed item from queue: " + newQueue.dequeue());

    console.log(`Expect value of: 9 | ${newQueue.peek() == 9}`);
    console.log(`Expect value of: 8 | ${newQueue.peekBottom() == 8}`);
}

testQueue();