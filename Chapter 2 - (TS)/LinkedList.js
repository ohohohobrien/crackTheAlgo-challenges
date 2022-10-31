var NodeTS = /** @class */ (function () {
    function NodeTS(value) {
        this.value = value;
        this.next = null;
        this.current = null;
    }
    ;
    NodeTS.prototype.addNode = function (value) {
        this.current = this;
        if (this.current.next == null) {
            this.next = new NodeTS(value);
        }
        else {
            while (this.current.next) {
                this.current = this.current.next;
            }
            this.current.next = new NodeTS(value);
        }
    };
    return NodeTS;
}());
var range = Math.floor((Math.random() * 100));
var LinkedListTS = new NodeTS(range);
for (var i = 0; i < range; i++) {
    var randomNum = Math.floor((Math.random() * 100));
    LinkedListTS.addNode(randomNum);
}
var current = LinkedListTS;
while (current) {
    console.log(current.value);
    current = current.next;
}
