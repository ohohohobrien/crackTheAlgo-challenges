"use strict";
exports.__esModule = true;
exports.QueueNode = void 0;
var QueueNode = /** @class */ (function () {
    function QueueNode(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    QueueNode.prototype.getNext = function () {
        return this.next;
    };
    QueueNode.prototype.setNext = function (next) {
        this.next = next;
    };
    QueueNode.prototype.getPrev = function () {
        return this.prev;
    };
    QueueNode.prototype.setPrev = function (prev) {
        this.prev = prev;
    };
    QueueNode.prototype.getValue = function () {
        return this.value;
    };
    return QueueNode;
}());
exports.QueueNode = QueueNode;
