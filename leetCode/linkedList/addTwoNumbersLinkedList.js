/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function createL(a){
  let node, temp;
  for(let i=a.length-1; i >= 0; i--){
    if(!node)
      node = new ListNode(a[i]);
    else {
      temp = new ListNode(a[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node;
}
//
// // reverse method
// function reverse(head) {
//   let prev = null
//   let current = head
//   let next = null
//
//   while (current !== null) {
//     next = current.next
//     current.next = prev
//     prev = current
//     current = next
//   }
//   return prev
// }
//
// function linkedListCounter(node) {
//   let counter = 0
//   while (node != null) {
//     node = node.next
//     counter++
//   }
//   return counter
// }
//
// var addTwoNumbers = function(l1, l2) {
//   let l1Reversed = reverse(l1)
//   let l2Reversed = reverse(l2)
//
//   const l1Counter = linkedListCounter(l1Reversed)
//   const l2Counter = linkedListCounter(l2Reversed)
//   let targetLinkedList
//   let lowerLinkedList
//   if (l1Counter > l2Counter) {
//     targetLinkedList = l1Reversed
//     lowerLinkedList = l2Reversed
//   }
//   else {
//     targetLinkedList = l2Reversed
//     lowerLinkedList = l1Reversed
//   }
//
//   while (lowerLinkedList) {
//     targetLinkedList.val = targetLinkedList.val + lowerLinkedList.val
//     lowerLinkedList = lowerLinkedList.next
//     targetLinkedList = targetLinkedList.next
//   }
//
//
//
//   return targetLinkedList
//
//   //
//   //
//   // let l1Number = ''
//   // let l2Number = ''
//   // while (l1 !== null) {
//   //   l1Number += l1.val
//   //   l1 = l1.next
//   // }
//   // while (l2 !== null) {
//   //   l2Number += l2.val
//   //   l2 = l2.next
//   // }
//   // console.log(`l1Number: ${l1Number}`)
//   // console.log(`l2Number: ${l2Number}`)
//   // let l1Reversed = reverseString(l1Number)
//   // let l2Reversed = reverseString(l2Number)
//   // console.log(`l1Reversed: ${l1Reversed}`)
//   // console.log(`l2Reversed: ${l2Reversed}`)
//   // let sum = parseInt(l1Reversed) + parseInt(l2Reversed)
//   // console.log(`sum: ${sum}`)
//   //
//   // const reversedNum = num => num.toString().split('').reverse().join('')
//   //
//   //
//   //
//   // let sumReversed = reversedNum(parseInt(sum))
//   // console.log(`sumReversed: ${sumReversed}`)
//   // console.log(`sumReversed.toString().split(''): ${sumReversedtoString().split('')}`)
//   // let sumArray = sumReversed.split('').map(Number)
//   // console.log(`sumArray: ${sumReversed}`)
//   //
//   // var myArr = String(sumReversed).split("").map((num)=>{
//   //   return Number(num)
//   // })
//   //
//   // return createL(myArr)
//
// }
//
// function reverseString(str) {
//   return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
// }
//
const l1 = createL([2, 4, 3])
const l2 = createL([5,6,4])

var addTwoNumbers = function(l1, l2) {
  let node = null
  const carry = arguments[2]
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const next1 = l1 ? l1.next : null
    const next2 = l2 ? l2.next : null
    const val = carry ? val1 + val2 + 1 : val1 + val2
    node = new ListNode(val % 10)
    node.next = addTwoNumbers(next1, next2, val >= 10)
  } else if (carry) {
    node = new ListNode(1)
    node.next = null
  }
  return node
};

console.log(addTwoNumbers(l1, l2))