// Implement a stack 
// Stack = LIFO (think stack of plates)
// Keep track of the top

export class Stack {

    private items: number[];

    constructor() {
        this.items = [];
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

}