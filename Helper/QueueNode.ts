// Node class for queue
type QueueNodeType = QueueNode | null;

export class QueueNode {
    
    private value: number;
    private next: QueueNodeType;
    private prev: QueueNodeType;

    constructor(value: number, next: QueueNodeType,  prev: QueueNodeType) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }

    getNext() {
        return this.next;
    }

    setNext(next: QueueNodeType) {
        this.next = next;
    }

    getPrev() {
        return this.prev;
    }

    setPrev(prev: QueueNodeType) {
        this.prev = prev;
    }

    getValue() {
        return this.value;
    }
}