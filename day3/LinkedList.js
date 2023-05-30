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