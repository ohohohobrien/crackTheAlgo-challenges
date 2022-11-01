import { Stack } from "../Helper/Stack";

const stack = new Stack(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(2);
stack.push(9);

// Minimum stack O(1) test
console.log(2 == stack.min());
console.log(9 == stack.pop());
console.log(2 == stack.pop());
console.log(5 == stack.min());