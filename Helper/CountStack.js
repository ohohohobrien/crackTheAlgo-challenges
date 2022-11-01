"use strict";
// Implement a stack 
// Must count length
// Set a limit on stack length as argument
exports.__esModule = true;
exports.CountStack = void 0;
var CountStack = /** @class */ (function () {
    function CountStack(data, heightLimit) {
        this.items = [data];
        this.length = 1;
        this.heightLimit = heightLimit;
    }
    CountStack.prototype.push = function (element) {
        if (this.length < this.heightLimit) {
            this.items.push(element);
            this.length += 1;
        }
        else {
            throw Error("Stack cannot exceed height limit of ".concat(this.heightLimit, "."));
        }
    };
    CountStack.prototype.pop = function () {
        if (this.length == 0) {
            throw Error("Stack is empty.");
        }
        this.length -= 1;
        return this.items.pop();
    };
    CountStack.prototype.peek = function () {
        if (this.length == 0) {
            throw Error("Stack is empty.");
        }
        return this.items[this.length - 1];
    };
    CountStack.prototype.isEmpty = function () {
        if (this.items.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    CountStack.prototype.lengthOf = function () {
        return this.length;
    };
    return CountStack;
}());
exports.CountStack = CountStack;
