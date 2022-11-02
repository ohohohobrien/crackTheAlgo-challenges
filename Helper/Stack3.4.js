"use strict";
// Implement a stack 
// Stack = LIFO (think stack of plates)
// Keep track of the top
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (element) {
        this.items.push(element);
    };
    Stack.prototype.pop = function () {
        var length = this.items.length;
        if (length == 0) {
            throw Error("Stack is empty.");
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
    return Stack;
}());
exports.Stack = Stack;
