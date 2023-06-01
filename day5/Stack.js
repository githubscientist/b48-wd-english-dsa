/*
    Stack 

    - Data Structure
    - Abstract Data Type

    - Data Manipulation follows: LIFO or FILO
    - LIFO: Last In First Out (Last inserted element would be the first element to get popped out)
    - FILO: First In Last Out (First element inserted would be the last element to get popped out)

    - Operations/Methods:
        1. Push(data): Pushes the data to the stack
        2. Pop(): Remove the data from the stack (Topmost data if the stack is not empty)
        3. Peek(): Returns the topmost element of the stack (if the stack is not empty)
        4. isEmpty(): Returns true if the stack is empty and false otherwise
    
    - both the insertion and deletion happens at one end of the memory (top of the stack)

    - Stack Implementation
        1. Array
        2. Object
    
*/

// JavaScript Arrays -> 
// push method to insert an element to the end of the array
// pop method to remove an element from the end of the array

class Stack {
    constructor() {
        // an empty array
        this.items = [];
        // top pointer pointing to the topmost index of the array
        // initialize the top index variable with -1
        this.top = -1;
    }

    // methods/operations
    // pushes the data to the stack
    push(data) {
        this.items.push(data);
        this.top++;
    }

    // removes the data from the stack (topmost element)
    pop() {
        // if the stack is not empty
        if (!stack.isEmpty()) {
            this.items.pop();
            this.top--;
        }
    }

    // returns the topmost element of the stack
    peek() {
        if (!stack.isEmpty()) {
            return this.items[this.top];
        }
    }

    // checks whether the stack is empty or not
    isEmpty() {
        return this.top == -1;
    }
}

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);
stack.push(7);
stack.pop();
stack.pop();
stack.push(10);
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
console.log('top of the stack is:', stack.peek());
console.log('is stack empty:', stack.isEmpty());



