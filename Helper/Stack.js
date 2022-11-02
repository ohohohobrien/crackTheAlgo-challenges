"use strict";
// Implement a stack 
// Stack = LIFO (think stack of plates)
// Keep track of the top
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(data) {
        this.items = [data];
        this.minStack = new MinStack(data);
    }
    Stack.prototype.push = function (element) {
        this.items.push(element);
        if (element < this.minStack.peek()) {
            this.minStack.push(element);
        }
    };
    Stack.prototype.pop = function () {
        var length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        if (this.items[length - 1] == this.minStack.peek()) {
            this.minStack.pop();
        }
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        var length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items[length - 1];
    };
    Stack.prototype.isEmpty = function () {
        if (this.items.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Stack.prototype.min = function () {
        return this.minStack.peek();
    };
    return Stack;
}());
exports.Stack = Stack;
var MinStack = /** @class */ (function () {
    function MinStack(data) {
        this.items = [data];
    }
    MinStack.prototype.push = function (element) {
        this.items.push(element);
    };
    MinStack.prototype.pop = function () {
        var length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items.pop();
    };
    MinStack.prototype.peek = function () {
        var length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items[length - 1];
    };
    return MinStack;
}());
// Implement a queue
// Queue = FIFO (take from the bottom, add to the top)
// Keep track of the top and bottom
var Queue = /** @class */ (function () {
    function Queue(data) {
        this.items = [data];
    }
    // add to top
    Queue.prototype.add = function (data) {
        this.items.push(data);
    };
    Queue.prototype.peek = function () {
        if (this.items.length == 0) {
            throw Error("Queue is empty.");
        }
        else {
            return this.items[0];
        }
    };
    // take from bottom
    Queue.prototype.remove = function () {
        if (this.items.length == 0) {
            throw Error("Queue is empty.");
        }
        else {
            var bottomItem = this.items.splice(0, 1);
            return bottomItem;
        }
    };
    return Queue;
}());
