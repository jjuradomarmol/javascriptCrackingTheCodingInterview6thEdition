class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    var node = new LinkedList(value);
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      var previousBack = this.back;
      this.back = node;
      previousBack.next = this.back;
    }
  }

  dequeue() {
    var removed = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return removed !== null ? removed.value : null;
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  isEmpty() {
    return this.front === null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  printLevelOrder() {
    var level = [];
    var myQueue = new Queue();
    var nextQueue = new Queue();
    var currentNode;

    myQueue.enqueue(this);
    while (!myQueue.isEmpty()) {
      currentNode = myQueue.dequeue();
      level.push(currentNode.value);
      if (currentNode.left !== null) {
        nextQueue.enqueue(currentNode.left);
      }
      if (currentNode.right !== null) {
        nextQueue.enqueue(currentNode.right);
      }
      if (myQueue.isEmpty()) {
        console.log(level.join(","));
        level = [];
        myQueue = nextQueue;
        nextQueue = new Queue();
      }
    }
  }
}

function checkBalanced(bst) {
  if (bst.left === null && bst.right !== null) {
    if (bst.right.left !== null || bst.right.right !== null) {
      return false;
    }
  }
  if (bst.left !== null && bst.right === null) {
    if (bst.left.left !== null || bst.left.right !== null) {
      return false;
    }
  }
  var answer = true;
  if (bst.left !== null) {
    answer = answer && checkBalanced(bst.left);
  }
  if (bst.right !== null) {
    answer = answer && checkBalanced(bst.right);
  }
  return answer;
}

// Proofs

var myBST1 = new BinarySearchTree(1);
myBST1.insert(2);
myBST1.insert(3);
myBST1.insert(4);
console.log(checkBalanced(myBST1), false);

var myBST2 = new BinarySearchTree(4);
myBST2.insert(2);
myBST2.insert(6);
myBST2.insert(1);
myBST2.insert(3);
myBST2.insert(5);
myBST2.insert(7);
console.log(checkBalanced(myBST2), true);
