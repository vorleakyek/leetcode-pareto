class Node {
  constructor(val=0, next=null) {
    this.head = val;
    this.next = next;
  }
}

class SinglyLinkedList { 
  constructor() {
    this.head = null;
    this._size = 0; 
  }

  size() {
    return this._size(); 
  }

  pushFront(val) {
    const newNode = new Node(val);
    newNode.next = this.head; 
    this.head = newNode;
    this._size++;   
  }

  popFront() {
    if (!this.head) {
      return null;
    }

    const val = this.head.val;
    this.head = this.head.next; 
    this._size--; 
    return val;  
  }

  pushBack(val) {
    const newNode = new Node(val);
    this._size++; 
    
    if (!this.head) {
      this.head = newNode;
      return
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next; 
    }
    currentNode.next = newNode; 
  }


  popBack() {
    
    if (!this.head) {
      return null;
    }

    this._size--;
    if (!this.head.next) {
      const val = this.head.val;
      this.head = null;
      return val;
    }

    let cur = this.head;
    //need the cur to be the second to the last since we want to remove the last node
    //this while loop condition will ensure that the cur node will stop at the second-to-last node 
    while (cur.next && cur.next.next ) {
      cur = cur.next; 
    }

    const val = cur.next.val;
    cur.next = null;
    return val; 
  }

  contains(val) {
    let cur = this.head;
    while(cur) {
      if (cur.val === val) {
        return cur;
      }
      cur = cur.next;
    }

    return null;
  }


}


// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Singly Linked List Design

// Implement a `SinglyLinkedList` class with the following methods. Assume the `Node` class below is already defined. The `size()` method should take `O(1)` time.

// The class should look like this:

// ```
// class SinglyLinkedList:
//   constructor(self):
//     self.head = None
//     self.size = 0
// ```

// And should have the following methods:

// ```
// - push_front(v):
// - push_front(v): Adds a node with value v at the beginning of the list.
// - pop_front(): Removes the node at the beginning of the list and returns its value. If the list is empty, returns None.
// - push_back(v): Adds a node with value v at the end of the list.
// - pop_back(): Removes the node at the end of the list and returns its value. If the list is empty, returns None.
// - size(): Returns the number of nodes in the list.
// - contains(v): Return the first node with value v, if any, or null otherwise.
// ```

// Here are some examples uses

// ```
// Example 1:
// Input: [1, 2, 3], push_front(0), pop_back()
// Output: [0, 1, 2]

// Example 2:
// Input: [], push_back(1), pop_front()
// Output: []

// Example 3:
// Input: [1], pop_front(), pop_back()
// Output: []
// ```

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/singly-linked-list-design-1.png

// Constraints:

// - The list can contain up to 10^5 nodes.
