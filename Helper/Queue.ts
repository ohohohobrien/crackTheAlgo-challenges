// Create a queue data structure
import { QueueNode } from "./QueueNode";

type QueueNodeType = QueueNode | null;

export class Queue {
    
    private head: QueueNodeType;
    private tail: QueueNodeType;

    constructor(data: number) {
        this.head = new QueueNode(data, null, null);
        this.tail = null;
    }

    enqueue(data: number) {
        const newNode = new QueueNode(data, null, null);
        // If no head node exists
        if (this.head == null) {
            this.head = newNode;
        }
        // If only head node exists
        else if (this.tail == null) {
            newNode.setNext(this.head);
            this.head!.setPrev(newNode);
            this.tail = newNode;
        // If longer than 1 node
        } else {
            newNode.setNext(this.tail);
            this.tail!.setPrev(newNode);
            this.tail = newNode;
        }
    }

    dequeue() {
        // If no head node exists
        if (this.isEmpty()) {
            throw Error("Queue is empty.");
        }

        const returnValue = this.head?.getValue();

        // If only head node exists
        if (this.tail == null) {
            this.head = null;
            return returnValue;
        }
        // If only two nodes exist (head and tail)
        else if (this.tail!.getNext() == this.head) {
            this.head = this.tail;
            this.head!.setPrev(null);
            this.tail = null;
            return returnValue;
        // More than 2 nodes exists
        } else {
            const prev = this.head!.getPrev();
            prev!.setNext(null);
            this.head = prev;
            return returnValue;
        }
    }

    peek() {
        if (this.isEmpty()) {
            throw Error("Queue is empty.");
        } 
        return this.head!.getValue();
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        } else {
            return false;
        }
    }

    peekBottom() {
        if (this.isEmpty()) {
            throw Error("Queue is empty.");
        }
        if (this.tail == null) {
            return this.peek();
        }
        return this.tail.getValue();
    }
}