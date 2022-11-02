// Implement a stack 
// Stack = LIFO (think stack of plates)
// Keep track of the top

export class Stack {

    private items: number[];
    private minStack: MinStack;

    constructor(data: number) {
        this.items = [data];
        this.minStack = new MinStack(data);
    }

    push(element: number) {
        this.items.push(element);
        if (element < this.minStack.peek()) {
            this.minStack.push(element);
        }
    }

    pop(): any {
        const length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        if (this.items[length - 1] == this.minStack.peek()) {
            this.minStack.pop();
        }
        return this.items.pop();
    }

    peek(): any {
        const length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items[length - 1];
    }

    isEmpty() {
        if (this.items.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    min() {
        return this.minStack.peek();
    }
}

class MinStack {
    private items: number[];

    constructor(data: number) {
        this.items = [data];
    }

    push(element: number) {
        this.items.push(element);
    }

    pop(): any {
        const length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items.pop();
    }

    peek() {
        const length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items[length - 1];
    }

}

// Implement a queue
// Queue = FIFO (take from the bottom, add to the top)
// Keep track of the top and bottom

class Queue {

    items: number[];

    constructor(data: number) {
        this.items = [data];
    }

    // add to top
    add(data: number) {
        this.items.push(data);
    }

    peek() {
        if (this.items.length == 0) {
            throw Error("Queue is empty.");
        } else {
            return this.items[0];
        }
    }

    // take from bottom
    remove() {
        if (this.items.length == 0) {
            throw Error("Queue is empty.");
        } else {
            const bottomItem = this.items.splice(0, 1);
            return bottomItem;
        }
    }
}