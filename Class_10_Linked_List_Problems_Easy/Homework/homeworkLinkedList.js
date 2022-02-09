// Homework assignment description:

// For this homework, you'll review the linked list reverse() function and add the remove() function to the code we wrote in class on Monday.
//
// Reverse:
//
//   Rewatch the video we saw in class on Monday to visualize using pointers to reverse a linked list: https://www.youtube.com/watch?v=D7y_hoT_YZI
//
//   Then, practice drawing the reversing process on a piece of paper. (Tip: use a small linked list of 3-4 nodes so it doesn't take you too long)
//
// Then write the code to reverse a linked list. Try not to look at your notes from class! If you need an extra challenge, try writing it recursively (that is not required or expected though).
//
// Remove:
//
//   Watch the following video to visualize deleting a node from a linked list. https://www.youtube.com/watch?v=VCRGaWXGOKU She uses Java to code the solution, but don't worry about the Java code unless it's helpful to you. Focus on the visualization/process steps. You can also use VisuAlgo to visualize this if you'd like.
//
// Then, practice drawing the removal process on a piece of paper. (Tip: use a small linked list of 3-4 nodes so it doesn't take you too long)
//
// Then try to write the code to remove a node from a linked list.
//
//   Copy and paste your code here for both functions. They don't need to be perfect, just try your best!



//-------------------------------------------------------------------------------------

// Create a linked list

// A simple javascript program for traversal of a linked list

// Linked list Node.  This inner class is made so that main() can access it
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function initializeLinkedList(array) {
  let node = new Node(array.shift())
  if (array.length) {
    node.next = initializeLinkedList(array)
  }
  return node
}
let head = initializeLinkedList([1, 2, 3, 4, 5]);

console.log(`original order`)
printLinkedList(head)

// reverse linked list
head = reverse(head)
console.log(`reversed order`)
printLinkedList(head)

// delete a node
console.log(`deleting a node`)
deleteNode(head, 3)
printLinkedList(head)

// delete method
function deleteNode(list, target) {
  let node = list,
    lastNode
  while (node.data !== target) {     // find target
    lastNode = node
    node = node.next
  }
  if (lastNode) {                    // delete from inside the list
    lastNode.next = node.next
  } else {                           // delete at the start
    list.data = node.next.data
    list.next = node.next.next
  }
}

// reverse method
function reverse(head) {
  let prev = null
  let current = head
  let next = null

  while (current !== null) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

// This function prints contents of linked list starting from head
function printLinkedList(head) {
  let output = ''
  let n = head;
  while (n != null) {
    output += n.data + " "
    n = n.next
  }
  console.log(output)
}
