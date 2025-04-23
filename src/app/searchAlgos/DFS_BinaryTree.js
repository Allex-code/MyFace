class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

function preOrder(root) {
  if (root) {
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
}

function inOrder(root) {
  if (root) {
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  }
}

function postOrder(root) {
  if (root) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
  }
}

// Vytvoření binárního stromu
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Pre-order průchod:");
preOrder(root); // Výstup: 1 2 4 5 3

console.log("\nIn-order průchod:");
inOrder(root); // Výstup: 4 2 5 1 3

console.log("\nPost-order průchod:");
postOrder(root); // Výstup: 4 5 2 3 1