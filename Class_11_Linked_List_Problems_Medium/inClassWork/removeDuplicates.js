// reverse method katie showed in class
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

// delete method katie showed in class
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


