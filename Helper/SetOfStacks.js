"use strict";
// Implement a stack 
// Must count length
// Set a limit on stack length as argument
exports.__esModule = true;
exports.SetOfStacks = void 0;
var CountStack_1 = require("./CountStack");
var SetOfStacks = /** @class */ (function () {
    function SetOfStacks(data, heightLimit) {
        this.items = [new CountStack_1.CountStack(data, heightLimit)];
        this.subStackTracker = 0;
        this.heightLimit = heightLimit;
    }
    SetOfStacks.prototype.push = function (element) {
        if (this.items[this.subStackTracker].lengthOf() == this.heightLimit) {
            this.items.push(new CountStack_1.CountStack(element, this.heightLimit));
            this.subStackTracker += 1;
        }
        else {
            this.items[this.subStackTracker].push(element);
        }
    };
    SetOfStacks.prototype.pop = function () {
        if (this.items[this.subStackTracker].lengthOf() == 0) {
            // if first substack is empty
            if (this.subStackTracker == 0) {
                throw Error("Stack is empty.");
                // if not first substack, go to prev substack
            }
            else {
                this.subStackTracker -= 1;
            }
        }
        return this.items[this.subStackTracker].pop();
    };
    SetOfStacks.prototype.peek = function () {
        if (this.items[this.subStackTracker].lengthOf() == 0) {
            // if first substack is empty
            if (this.subStackTracker == 0) {
                throw Error("Stack is empty.");
                // if not first substack, go to prev substack 
            }
            else {
                return this.items[this.subStackTracker - 1].peek();
            }
        }
        return this.items[this.subStackTracker].peek();
    };
    SetOfStacks.prototype.isEmpty = function () {
        if (this.items[0].lengthOf() == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    SetOfStacks.prototype.lengthOf = function () {
        var currentSubStackLength = this.items[this.subStackTracker].lengthOf();
        return (this.subStackTracker * 10 + currentSubStackLength);
    };
    return SetOfStacks;
}());
exports.SetOfStacks = SetOfStacks;
