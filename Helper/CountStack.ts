// Implement a stack 
// Must count length
// Set a limit on stack length as argument

export class CountStack {

    private items: number[];
    private length: number;
    private heightLimit: number;

    constructor(data: number, heightLimit: number) {
        this.items = [data];
        this.length = 1;
        this.heightLimit = heightLimit;
    }

    push(element: number) {
        if (this.length < this.heightLimit) {
            this.items.push(element);
            this.length += 1;
        } else {
            throw Error(`Stack cannot exceed height limit of ${this.heightLimit}.`)
        }
    }

    pop() {
        if (this.length == 0) {
            throw Error("Stack is empty.");
        }
        this.length -= 1;
        return this.items.pop();
    }

    peek() {
        if (this.length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items[this.length - 1];
    }

    isEmpty() {
        if (this.items.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    lengthOf() {
        return this.length;
    }

}