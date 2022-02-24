// linkedList question
// given a singly list return the middle node
class Node {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.head) {
      let current = this.head

      while(current.next) {
        current = current.next
      }

      current.next = newNode
    } else {
      this.head = newNode
    }
  }

  middleNodeSearch() {
    let currentNode = this.head
    let nodeCount = 0
    while (currentNode) {
      nodeCount++
      currentNode = currentNode.next
    }

    let middleNodePosition = Math.floor(nodeCount/2)

    let currentNode2 = this.head
    let nodePosition = 0
    while (currentNode2) {
      if (nodePosition === middleNodePosition) return currentNode2
      nodePosition++
      currentNode2 = currentNode2.next
    }
  }
}

let ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)
console.log(ll.middleNodeSearch())