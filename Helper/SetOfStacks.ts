// Implement a stack 
// Must count length
// Set a limit on stack length as argument

import { CountStack } from "./CountStack";

export class SetOfStacks {

    private items: CountStack[];
    private subStackTracker: number;
    private heightLimit: number;

    constructor(data: number, heightLimit: number) {
        this.items = [new CountStack(data, heightLimit)];
        this.subStackTracker = 0;
        this.heightLimit = heightLimit;
    }

    push(element: number) {
        if (this.items[this.subStackTracker].lengthOf() == this.heightLimit) {
            this.items.push(new CountStack(element, this.heightLimit));
            this.subStackTracker += 1;
        } else {
            this.items[this.subStackTracker].push(element);
        }
    }

    pop() {
        if (this.items[this.subStackTracker].lengthOf() == 0) {
            // if first substack is empty
            if (this.subStackTracker == 0) {
                throw Error("Stack is empty.");
            // if not first substack, go to prev substack
            } else {
                this.subStackTracker -= 1;
            }
        } 
        return this.items[this.subStackTracker].pop();
    }

    peek(): number {
        if (this.items[this.subStackTracker].lengthOf() == 0) {
            // if first substack is empty
            if (this.subStackTracker == 0) {
                throw Error("Stack is empty.");
            // if not first substack, go to prev substack 
            } else {
                return this.items[this.subStackTracker - 1].peek();
            }
        }
        return this.items[this.subStackTracker].peek();
    }

    isEmpty() {
        if (this.items[0].lengthOf() == 0) {
            return true;
        } else {
            return false;
        }
    }

    lengthOf(): number {
        const currentSubStackLength = this.items[this.subStackTracker].lengthOf();
        return (this.subStackTracker * 10 + currentSubStackLength);
    }

}