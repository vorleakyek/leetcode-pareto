class Node {
  constructor(val) {
    this.head = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0; 
  }

  size() {
    return this._size; 
  }

  
}

// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Doubly Linked List Design

// Implement a `DoublyLinkedList` class with the same methods as in the SinglyLinkedList problem. The `push_back()`, `pop_back()`, `push_front()`, `pop_front()`, `size()`, and `contains()` methods should all take `O(1)` time.

// The class should look like this:

// ```
// class DoublyLinkedList:
//   constructor(self):
//     self.head = None
//     self.tail = None
//     self.size = 0
// ```

// And should have the following methods:

// ```
// - push_front(v):
// - pop_front():
// - push_back(v):
// - pop_back():
// - size():
// - contains(v):
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

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/doubly-linked-list-design-1.png

// Constraints:

// - The list can contain up to 10^5 nodes.
