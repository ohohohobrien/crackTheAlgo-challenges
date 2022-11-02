"use strict";
// Implement a queue data structure with two stacks
// Created a stack in helper file
// Use two of these to create a queue
exports.__esModule = true;
var Stack3_4_1 = require("../Helper/Stack3.4");
var QueueViaStacks = /** @class */ (function () {
    function QueueViaStacks() {
        this.inbox = new Stack3_4_1.Stack();
        this.outbox = new Stack3_4_1.Stack();
    }
    QueueViaStacks.prototype.push = function (element) {
        var _a;
        (_a = this.inbox) === null || _a === void 0 ? void 0 : _a.push(element);
    };
    QueueViaStacks.prototype.pop = function () {
        var _a, _b, _c, _d;
        if ((_a = this.outbox) === null || _a === void 0 ? void 0 : _a.isEmpty()) {
            while (!((_b = this.inbox) === null || _b === void 0 ? void 0 : _b.isEmpty())) {
                this.outbox.push((_c = this.inbox) === null || _c === void 0 ? void 0 : _c.pop());
            }
        }
        return (_d = this.outbox) === null || _d === void 0 ? void 0 : _d.pop();
    };
    QueueViaStacks.prototype.front = function () {
        var _a, _b, _c, _d;
        if ((_a = this.outbox) === null || _a === void 0 ? void 0 : _a.isEmpty()) {
            while (!((_b = this.inbox) === null || _b === void 0 ? void 0 : _b.isEmpty())) {
                this.outbox.push((_c = this.inbox) === null || _c === void 0 ? void 0 : _c.pop());
            }
        }
        return (_d = this.outbox) === null || _d === void 0 ? void 0 : _d.peek();
    };
    return QueueViaStacks;
}());
var queueViaStacks = new QueueViaStacks();
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
}
catch (e) {
    console.log(e.message);
}
