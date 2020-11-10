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

function listOfDepths(bst) {
  var listOfLists = [];
  var list = null;
  var newNode;
  var myQueue = new Queue();
  var nextQueue = new Queue();
  var currentNode = bst;

  myQueue.enqueue(currentNode);
  while (!myQueue.isEmpty()) {
    currentNode = myQueue.dequeue();
    newNode = new LinkedList(currentNode.value);
    newNode.next = list;
    list = newNode;
    if (currentNode.left !== null) {
      nextQueue.enqueue(currentNode.left);
    }
    if (currentNode.right !== null) {
      nextQueue.enqueue(currentNode.right);
    }
    if (myQueue.isEmpty()) {
      listOfLists.push(list);
      list = null;
      myQueue = nextQueue;
      nextQueue = new Queue();
    }
  }
  return listOfLists;
}

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var myTree = new BinarySearchTree(4);
myTree.insert(2);
myTree.insert(6);
myTree.insert(1);
myTree.insert(3);
myTree.insert(5);
myTree.insert(7);

console.log(listOfDepths(myTree));
