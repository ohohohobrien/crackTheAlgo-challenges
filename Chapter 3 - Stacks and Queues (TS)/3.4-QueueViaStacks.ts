// Implement a queue data structure with two stacks
// Created a stack in helper file
// Use two of these to create a queue

import { Stack } from "../Helper/Stack3.4";

class QueueViaStacks {

    private inbox: Stack | null;
    private outbox: Stack | null;

    constructor() {
        this.inbox = new Stack();
        this.outbox = new Stack();
    }

    push(element: number) {
        this.inbox?.push(element);
    }

    pop() { 
        if (this.outbox?.isEmpty()) {
            while (!this.inbox?.isEmpty()) {
                this.outbox.push(this.inbox?.pop());
            }
        }
        return this.outbox?.pop();
    }

    front() {
        if (this.outbox?.isEmpty()) {
            while (!this.inbox?.isEmpty()) {
                this.outbox.push(this.inbox?.pop());
            }
        }
        return this.outbox?.peek();
    }
}

const queueViaStacks = new QueueViaStacks();
queueViaStacks.push(4);
queueViaStacks.push(5);
queueViaStacks.push(6);
queueViaStacks.push(7);
queueViaStacks.push(8);
console.log("Expect peek to show 4: ");
console.log(queueViaStacks.front() == 4);
console.log("Expect pop to show 4: ");
console.log(queueViaStacks.pop() == 4);
console.log("Expect pop to show 5: ");
console.log(queueViaStacks.pop() == 5);
queueViaStacks.push(9);
console.log("Expect pop to show 6: ");
console.log(queueViaStacks.pop() == 6);
console.log("Expect pop to show 7: ");
console.log(queueViaStacks.pop() == 7);
console.log("Expect pop to show 8: ");
console.log(queueViaStacks.pop() == 8);
console.log("Expect pop to show 9: ");
console.log(queueViaStacks.pop() == 9);
console.log("Expect error to show: ");
try {
    console.log(queueViaStacks.pop());
} catch(e: any) {
    console.log(e.message);
}