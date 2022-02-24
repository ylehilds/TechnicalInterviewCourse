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

class LinkedList {
  constructor() {
    this.head = null
  }

  loadLinkedList(array) {
    let newNode = new Node(array.shift())
    while (array.length) {
      newNode.next = this.loadLinkedList(array)
    }
    return newNode
  }

  append(data) {
    let newNode = new Node(data) // create new node
    let currentNode
    if (this.head === null) { // if head is null then head is the newNode
      this.head = newNode
      return
    }
    currentNode = this.head
    while(currentNode.next) { // find the end of the LinkedList and attach the newNode
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  search(target) {
    let currentNode = this.head
    while(currentNode) {
      if (currentNode.data === target) return currentNode
      currentNode = currentNode.next
    }
    return false
  }

  delete(target) {
    let lastNode
    let currentNode = this.head
    while(currentNode.data !== target) {
      lastNode = currentNode
      currentNode = currentNode.next
    }
    if (lastNode) lastNode.next = currentNode.next
    else {
      currentNode.data = currentNode.next.data
      currentNode.next = currentNode.next.next
    }
  }

  print() {
    let currentNode = this.head
    let output = []
    while(currentNode) {
      output.push(currentNode.data)
      currentNode = currentNode.next
    }
    return output
  }

  sumAllNodes() {
    let currentNode = this.head
    let sum = 0
    while (currentNode) {
      sum += currentNode.data
      currentNode = currentNode.next
    }
    return sum
  }

  sumAllEvenNodes() {
    let currentNode = this.head
    let sum = 0
    let nodePosition = 1
    while (currentNode) {
      if (nodePosition % 2 === 0) sum += currentNode.data
      currentNode = currentNode.next
      nodePosition++
    }
    return sum
  }

  sumAllOddNodes() {
    let currentNode = this.head
    let sum = 0
    let nodePosition = 1
    while (currentNode) {
      if (nodePosition % 2 !== 0) sum += currentNode.data
      currentNode = currentNode.next
      nodePosition++
    }
    return sum
  }
  prepend(data) {
    let previousHead = this.head
    let newNode = new Node(data)
    this.head = newNode
    this.head.next = previousHead
  }

  addNodeAtSpecificNodeDataPosition(data, position) {
    let newNode = new Node(data)
    let currentNode = this.head
    while(currentNode) {
      if (currentNode.data === position) {
        newNode.next = currentNode.next
        currentNode.next = newNode
      }
      currentNode = currentNode.next
    }
  }

  addDataAtSpecificNodePosition(position, addition) {
    let linkedListPosition = 1
    let currentNode = this.head
    while(currentNode) {
      if (linkedListPosition !== position) currentNode = currentNode.next
      else {
        currentNode.data += addition
      }
      linkedListPosition++
    }
  }

  // reverse linked list
  reverse() {
    let cur_node = this.head
    let prev_node
    let next_node

    while (cur_node) {
      next_node = cur_node.next
      cur_node.next = prev_node

      prev_node = cur_node
      cur_node = next_node
    }
    this.head = prev_node
  }
}

let nodeLinkedList = new LinkedList()
// nodeLinkedList.append(1)
// nodeLinkedList.append(2)
// nodeLinkedList.append(3)
// nodeLinkedList.append(4)
// nodeLinkedList.prepend(5)
// console.log(nodeLinkedList.print())
// console.log(nodeLinkedList.search(3))
// console.log(nodeLinkedList.delete(2))
// console.log(nodeLinkedList.print())
// console.log(nodeLinkedList.sumAllNodes())
// console.log(`Sum All even nodes: ${nodeLinkedList.sumAllEvenNodes()}`)
// console.log(`Sum All odd nodes: ${nodeLinkedList.sumAllOddNodes()}`)
// console.log(`Sum All odd nodes: ${nodeLinkedList.addDataAtSpecificNodePosition(3, 100)}`)
// console.log(`Adding new node after specific position: ${nodeLinkedList.addNodeAtSpecificNodeDataPosition(20, 2)}`)
// console.log(`Original before reversing: ${nodeLinkedList.print()}`)
// console.log(nodeLinkedList.reverse())
// console.log(`After reversing: ${nodeLinkedList.print()}`)
console.log(`Loading LinkedList: ${nodeLinkedList.head = nodeLinkedList.loadLinkedList([9,8,7,6,5,4,3,2,1,0])}`)
console.log(`Printing LinkedList: ${nodeLinkedList.print()}`)





