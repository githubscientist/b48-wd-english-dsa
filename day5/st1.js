// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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

    // checks whether the stack is empty or not
    isEmpty() {
        return this.top == -1;
    }

    // removes the data from the stack (topmost element)
    pop() {
        // if the stack is not empty
        if (!this.isEmpty()) {
            this.items.pop();
            this.top--;
        }
    }

    // returns the topmost element of the stack
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        }
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let words = userInput[0].split(' ');

    // create an empty stack
    let stack = new Stack();

    // traverse through the words array
    words.forEach(word => {
        // for every word
        // check if the stack is empty
        if (stack.isEmpty()) {
            // if true => push the current word to the stack
            stack.push(word);
        } else {
            // if false => check if the topmost element of the stack and the current word
            // are equal
            if (stack.peek() == word) {
                // if true => do a pop() and move to the next word
                stack.pop();
            } else {
                // else => push the word to the stack
                stack.push(word);
            }
        }
    });
    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }
});