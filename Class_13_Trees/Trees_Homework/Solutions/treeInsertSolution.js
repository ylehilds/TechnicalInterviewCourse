// # Write code for a node and an insert function to create a binary tree

// # A utility function to search a given key in BST

class Node {
    constructor(item) {
        this.key = item
        this.left = this.right = null
    }
}

// Root of BST
let root = null

// This method mainly calls insertRec()
function insert(key) {
    root = insertRecursevely(root, key)
}

/*
 * A recursive function to insert a new key in BST
 */
function insertRecursevely(root , key) {

    /*
     * If the tree is empty, return a new node
     */
    if (root == null) {
        root = new Node(key)
        return root
    }

    /* Otherwise, recur down the tree */
    if (key < root.key)
        root.left = insertRecursevely(root.left, key)
    else if (key > root.key)
        root.right = insertRecursevely(root.right, key)

    /* return the (unchanged) node pointer */
    return root
}

// This method mainly calls InorderRec()
function inorder() {
    inorderRec(root)
}

// A utility function to
// do inorder traversal of BST
function inorderRec(root)
{
    if (root != null) {
        inorderRec(root.left)
        console.log(root.key)
        inorderRec(root.right)
    }
}

// Driver Code

/* Let us create following BST
      50
   /     \
  30      70
 /  \    /  \
20   40  60   80 */
insert(50)
insert(30)
insert(20)
insert(40)
insert(70)
insert(60)
insert(80)

// print inorder traversal of the BST
inorder()

