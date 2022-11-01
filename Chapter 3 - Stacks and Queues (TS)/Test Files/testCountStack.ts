import { CountStack } from "../../Helper/CountStack";

function testCountStack() {
    const heightLimit = 10;
    const initialValue = 1;
    const countStack = new CountStack(initialValue, heightLimit);
    for (let i = 2; i < 11; i++) {
        countStack.lengthOf();
        countStack.push(i);
    }
    countStack.lengthOf();
    console.log(`Expecting length of ${heightLimit}`)
    console.log(countStack.lengthOf() == heightLimit);
    console.log("Expect error message exceeding stack:");
    try {
        countStack.push(11);
    } catch(e: any) {
        console.log(e.message);
        console.log(e instanceof Error);
    }
    countStack.pop();
    console.log(`Expecting length of ${heightLimit - 1}`)
    console.log(countStack.lengthOf() == (heightLimit - 1));
}

testCountStack();