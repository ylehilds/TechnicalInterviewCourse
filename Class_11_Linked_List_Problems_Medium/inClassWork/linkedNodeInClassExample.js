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
let head = initializeLinkedList([1, 1, 3, 5, 5]);


function reverse(head) {
  let prev = null
  let current = head

  while (current !== null) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

function deleteNode(val) {
  if (this.head.data === val) {
    this.head = this.head.next
    return
  }
  let prev = null
  let current = this.head
  while (current !== null) {
    if (current.data === val) {
      prev.next = current.next
      break
    }
  }
}

function removeDuplicates(head) { // not finished in class loop though array and keep all numbers, then filters array to just have the duplicates
  let prev = null
  let current = head
  let duplicates = []

  while (current !== null) {
    duplicates.push(current.data)
    let next = current.next
    prev = current
    current = next
  }
}

function deleteNnodesAfterMnodes(head, n, m) { // not finished in class loop though array and keep all numbers, then filters array to just have the duplicates
  let prev = null
  let current = head

  while (current !== null) {
    let next = current.next
    prev = current
    current = next
  }
}

deleteNnodesAfterMnodes(head, 1, 2)
//
// return arr.filter((item,
//                    index) => arr.indexOf(item) === index);
// }