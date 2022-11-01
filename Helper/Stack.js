"use strict";
// Implement a stack 
// Stack = LIFO (think stack of plates)
// Keep track of the top
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(data) {
        this.items = [data];
        this.minStack = new MinStack(data);
    }
    push(element) {
        this.items.push(element);
        if (element < this.minStack.peek()) {
            this.minStack.push(element);
        }
    }
    pop() {
        const length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        if (this.items[length - 1] == this.minStack.peek()) {
            this.minStack.pop();
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
    isEmpty() {
        if (this.items.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    min() {
        return this.minStack.peek();
    }
}
exports.Stack = Stack;
class MinStack {
    constructor(data) {
        this.items = [data];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
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
    constructor(data) {
        this.items = [data];
    }
    // add to top
    add(data) {
        this.items.push(data);
    }
    peek() {
        if (this.items.length == 0) {
            throw Error("Queue is empty.");
        }
        else {
            return this.items[0];
        }
    }
    // take from bottom
    remove() {
        if (this.items.length == 0) {
            throw Error("Queue is empty.");
        }
        else {
            const bottomItem = this.items.splice(0, 1);
            return bottomItem;
        }
    }
}
