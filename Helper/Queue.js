"use strict";
exports.__esModule = true;
exports.Queue = void 0;
// Create a queue data structure
var QueueNode_1 = require("./QueueNode");
var Queue = /** @class */ (function () {
    function Queue(data) {
        this.head = new QueueNode_1.QueueNode(data, null, null);
        this.tail = null;
    }
    Queue.prototype.enqueue = function (data) {
        var newNode = new QueueNode_1.QueueNode(data, null, null);
        // If no head node exists
        if (this.head == null) {
            this.head = newNode;
        }
        // If only head node exists
        else if (this.tail == null) {
            newNode.setNext(this.head);
            this.head.setPrev(newNode);
            this.tail = newNode;
            // If longer than 1 node
        }
        else {
            newNode.setNext(this.tail);
            this.tail.setPrev(newNode);
            this.tail = newNode;
        }
    };
    Queue.prototype.dequeue = function () {
        var _a;
        // If no head node exists
        if (this.isEmpty()) {
            throw Error("Queue is empty.");
        }
        var returnValue = (_a = this.head) === null || _a === void 0 ? void 0 : _a.getValue();
        // If only head node exists
        if (this.tail == null) {
            this.head = null;
            return returnValue;
        }
        // If only two nodes exist (head and tail)
        else if (this.tail.getNext() == this.head) {
            this.head = this.tail;
            this.head.setPrev(null);
            this.tail = null;
            return returnValue;
            // More than 2 nodes exists
        }
        else {
            var prev = this.head.getPrev();
            prev.setNext(null);
            this.head = prev;
            return returnValue;
        }
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            throw Error("Queue is empty.");
        }
        return this.head.getValue();
    };
    Queue.prototype.isEmpty = function () {
        if (this.head == null) {
            return true;
        }
        else {
            return false;
        }
    };
    Queue.prototype.peekBottom = function () {
        if (this.isEmpty()) {
            throw Error("Queue is empty.");
        }
        if (this.tail == null) {
            return this.peek();
        }
        return this.tail.getValue();
    };
    return Queue;
}());
exports.Queue = Queue;
