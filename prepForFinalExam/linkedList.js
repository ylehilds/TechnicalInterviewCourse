// linkedList question
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

// class declaration
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// function to initialize linkedNodeList from an array
function initializeLinkedNodeList(array) {
  let node = new Node(array.shift())
  if (array.length) {
    node.next = initializeLinkedNodeList(array)
  }
  return node
}
let head = initializeLinkedNodeList([1,2,3,4,5,6,7,8,9,10])
// console.log(head)

//print node linkedList
function print(node) {
  while(node) {
    console.log(node)
    node = node.next
  }
}
// console.log(print(head))

function searchLinkedList(node, target) {
  while (node) {
    if (node.data === target) return node
    node = node.next
  }
  return false
}

// console.log(searchLinkedList(head, 1))

// reverse a linked list
function reverse (node) {

}




// -------------------------------------------------------------------------------------------------------------------------------
// delete a linked list element
function deleteNode (node, target) {
  let lastNode
  while(node.data !== target) {
    lastNode = node
    node = node.next
  }
  if (lastNode) lastNode.next = node.next
  else { // dealing with cases right at the head.
      node.data = node.next.data
      node.next = node.next.next
  }
  console.log(print(head))
}
// console.log(deleteNode(head, 5))

function addLinkedListNodes(node) {
  let node1 = searchLinkedList(node, 1)
  let node2 = searchLinkedList(node, 10)
  return node1.data + node2.data
}

function addAllLinkedListNodes(node) {
  let totalCount = 0
  while (node) {
    totalCount += node.data
    node = node.next
  }
  return totalCount
}

function multiplyAllLinkedListNodes(node) {
  let totalCount = 1
  while (node) {
    totalCount *= node.data
    node = node.next
  }
  return totalCount
}

function addOddLinkedListNodes(node) {
  let nodeCount = 1
  let totalCount = 0
  while (node) {
    if (nodeCount % 2 !== 0) totalCount += node.data
    node = node.next
    nodeCount++
  }
  return totalCount
}

function addEvenLinkedListNodes(node) {
  let nodeCount = 1
  let totalCount = 0
  while (node) {
    if (nodeCount % 2 === 0) totalCount += node.data
    node = node.next
    nodeCount++
  }
  return totalCount
}

// console.log(addLinkedListNodes(head))
// console.log(multiplyAllLinkedListNodes(head))
console.log(`Odd sum = ${addOddLinkedListNodes(head)}`)
console.log(`Even sum = ${addEvenLinkedListNodes(head)}`)

// -------------------------------------------------------------------------------------------------------------------------------
