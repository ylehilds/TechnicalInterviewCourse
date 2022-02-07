// # Create a linked list using python

// A simple javascript program for traversal of a linked list
let head // head of list

// Linked list Node.  This inner class is made so that main() can access it
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// This function prints contents of linked list starting from head
function printList() {
  let output = ''
  let n = head;
  while (n != null) {
    output += n.data + " " // preferred way, just concatenate all the output for the same line, then when while loop is done print it out.
    // process.stdout.write(n.data + " ") // node only
    // console.log(n.data + " ") // it prints it but console.log always adds a new line after each print
    n = n.next
  }
  console.log(output)
}

// method to create a simple linked list with 3 nodes
// Start with the empty list.
head = new Node('Linked List')
let second = new Node('Hello')
let third = new Node('World!')

head.next = second // Link first node with the second node
second.next = third // Link second node with the third node

printList()
