# Create a linked list using python

class Node:
    # Function to initialize the node object
    def __init__(self, data):
        self.data = data  # Assign data
        self.next = None  # Initialize
        # next as null


class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        newNode = Node(data)
        if (self.head):
            current = self.head
            while (current.next):
                current = current.next
            current.next = newNode
        else:
            self.head = newNode

    def printLL(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next


# reverse method
def reverse(self):
    prev = None
    current = self.head
    while current is not None:
        next = current.next
        current.next = prev
        prev = current
        current = next
    self.head = prev


LL = LinkedList()
LL.insert(3)
LL.insert(4)
LL.insert(5)
print('Print linked list')
LL.printLL()
reverse(LL)
print('Print Reversed linked list')
LL.printLL()
# LL = LinkedList()
# LL.head = Node(3)
# print(LL.head.data)


#
#
# class LinkedList:
#
#     # Function to initialize the Linked
#     # List object
#     def __init__(self):
#         self.head = None
#
# # Code execution starts here
# if __name__=='__main__':
#
#     # Start with the empty list
#     llist = LinkedList()
#
#     llist.head = Node(1)
#     second = Node(2)
#     third = Node(3)
#
#     second.next = third; # Link second node with the third node
