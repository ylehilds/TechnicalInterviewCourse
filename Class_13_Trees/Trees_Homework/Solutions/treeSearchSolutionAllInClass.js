// # Write code for a search function for a binary tree

// # A utility function to search a given key in BST

class Node {
    constructor(item) {
        this.key = item // key value
        this.left = this.right = null // initialize left and right
    }
}

class BST {
    constructor() {
        this.root = null // Root of BST
    }

    // This method mainly calls insertRec()
    insert(key) {
        this.root = this.insertRecursevely(this.root, key)
    }

    /*
     * A recursive function to insert a new key in BST
     */

    insertRecursevely(root, key) {

        /*
         * If the tree is empty, return a new node
         */
        if (root == null) {
            root = new Node(key)
            return root
        }

        /* Otherwise, recur down the tree */
        if (key < root.key) root.left = this.insertRecursevely(root.left, key)
        else if (key > root.key) root.right = this.insertRecursevely(root.right, key)

        /* return the (unchanged) node pointer */
        return root
    }

// This method mainly calls InorderRec()

    inorder() {
        this.inorderRec(this.root)
    }

// A utility function to
// do inorder traversal of BST

    inorderRec(root) {
        if (root != null) {
            this.inorderRec(root.left)
            console.log(root.key)
            this.inorderRec(root.right)
        }
    }

    search(root, key)
    {
        // Base Cases: root is null
        // or key is present at root
        if (root == null || root.key == key) return root // if there is no root or we have found the key then we are done
        if (root.key < key) return this.search(root.right, key) // if root key is less than key then search right
        return this.search(root.left, key) // search left
    }
}

// Driver Code

/* Let us create following BST
      50
   /     \
  30      70
 /  \    /  \
20   40  60   80 */

let bst = new BST()
bst.insert(50)
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(70)
bst.insert(60)
bst.insert(80)

// print inorder traversal of the BST
bst.inorder()

console.log(bst.search(bst.root, 50))
