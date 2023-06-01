class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newItem = new Item(data);

        newItem.next = this.top;

        this.top = newItem;
    }

    pop() {
        this.top = this.top.next;
    }

    peek() {
        return this.top.data;
    }

    isEmpty() {
        return this.top == null;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.pop();
// stack.pop();

console.log(stack.isEmpty());