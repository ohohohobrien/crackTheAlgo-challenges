import { SetOfStacks } from "../../Helper/SetOfStacks";

function testCountStack() {
    const heightLimit = 10;
    const initialValue = 0;
    const countStack = new SetOfStacks(initialValue, heightLimit);
    for (let i = 1; i < 100; i++) {
        countStack.push(i);
        console.log(countStack.lengthOf());
    }
    console.log(`Expecting length of 100`)
    console.log(countStack.lengthOf() == 100);
    console.log(`Expecting pop value of 99`)
    console.log(countStack.peek() == 99);
    for (let i = 0; i < 50; i++) {
        countStack.pop();
        console.log(countStack.lengthOf());
    }
    console.log(`Expecting pop value of 49`)
    console.log(countStack.pop() == 49);
}

testCountStack();