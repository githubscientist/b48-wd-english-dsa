// Data Structures
/*
    Arrays Vs Strings => Strings are immutable but Arrays are mutable

    Arrays
        - Data Structure (Built-In)
        - Indexing: first element stored at the first index 0
        - all the other elements are stored in the consecutive memory locations
        - accessing: numbers[index] -> element (Random Access)
        - Insertion: last element: O(1), first element: O(n)
        - Deletion: O(1), O(n)
        - Methods:
            * push - pushes the element to the end of the array
            * pop - removes the element from the end of the array
            * unshift - inserts the element to the beginning of the array
            * shift - removes the element from the beginning of the array
            * forEach - iterates all the elements of the array and runs a callback function on every element
            * map
            * sort
            * reduce
            * filter
            * includes
            * join
            * length - property
*/

// let numbers = [3, 5, 7, 8, 10];

// numbers.push(12);
// numbers.unshift(1);

// console.log(numbers);

/*
    Linked List

    * Data Structure
    * Types
        1. Singly Linked List
        2. Doubly Linked List
        3. Circularly Linked List
    * Abstract Data Type: User defined data type - user defines its behaviour, data, operations
    * Non-consecutive memory
    * Singly Linked List: Chain of nodes/objects from differenct memory locations linked to one another
    * Every node has a structure of two fields:
        * data: actual data we want to store inside the memory
        * address: address of the next node in the memory
    * head pointer: points to the start node of the linked list
    * head: null - signifies that the linked list is empty
    * tail node is the node whose next/address field points to the value null
    * Accessing: Linear Access
    * Insertion: insert at the head - O(1), insert at the tail - O(1)/O(n)
    * Deletion: O(1), O(n)
*/

// define the structure of a node
class Node {
    // we have two fields for every Node object
    // constructor will receive the value we want to store inside the node
    // every node will be created with the following two fields: data field with the data
    // passed as an argument and the next field intialized with null
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// collection of objects or a blueprint or a template
class LinkedList {
    // a special method that will be invoked whenever we create an object to this class
    // is used to intialize/allocate memory resources
    constructor() {
        // this keyword -> refer the current instance of the class
        // every linked list object will now have a head member variable with a value initialized to null
        this.head = null;
    }

    insertTail(data) {
        // create a new Node with the data
        let newNode = new Node(data);
        
        if (this.head == null) {
            // linked list is empty
            this.head = newNode;
        } else {
            // linked list is not empty
            // find the tail node
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // when we come out of the loop
            // tail.next will be null
            // if the tail.next is null
            // it means that the tail is pointing to the tail node
            tail.next = newNode;
        }
    }

    printList() {
        let thead = this.head;
        let nodes = [];

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        console.log(nodes);
    }

    insertHead(data) {
        // create a new node <- newNode
        let newNode = new Node(data);

        // make the newNode next to point to the current head
        newNode.next = this.head;

        // make the newNode reference as the head node
        this.head = newNode;
    }

    // return the length/number of nodes of the linked list
    length() {
        
    }

    // deletes the head node of the linked list
    deleteHead() {
        
    }

    // deletes the tail node of the linked list
    deleteTail() {
        
    }
}

// let list1 = new LinkedList();

// console.log(list1);

// let list2 = new LinkedList();

// console.log(list2);

// let list = new LinkedList();

// list.head = new Node(3);
// // insert another node
// list.head.next = new Node(5);

// console.log(list);


/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 5,
                next: null
            }
        }
    }

    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 5,
                next: null
            }
        }
    }
    
*/


// console.log(new Node(3));

let list = new LinkedList();

// list.head = new Node(3);
// list.head.next = new Node(5);
// list.head.next.next = new Node(7);
list.insertTail(3);
list.insertTail(5);
list.insertTail(6);
list.insertTail(7);
list.insertTail(8);
list.insertHead(2);
list.insertHead(1);

list.printList();