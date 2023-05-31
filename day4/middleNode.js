/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var findLength = function(head){
    // initialize a nodes variable to keep track of number of nodes 
    let nodes = 0;

    // iterate/traverse the list and increment the nodes every time to
    // keep track of the nodes visited until we reach the null pointer
    while(head != null){
        nodes++;
        head = head.next;
    }

    // return the number of nodes
    return nodes;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) { 
    // find the length of the linked list <- length
    // length = 5
    let length = findLength(head);

    // find the middle position using the length
    // middle = 2
    let middle = Math.floor(length/2);

    // move the head pointer, middle number of times
    // while(middle>0){
    //     head = head.next;
    //     middle = middle - 1;
    // }

    while(middle--){
        head = head.next;
    }

    // return the head pointer
    return head;
};