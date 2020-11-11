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

function bstSequences(bst) {
  var sequences = [];
  var recurse = function (nodes, travelled) {
    var noChild = true;
    nodes.forEach((node) => {
      if (node.left !== null && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });
    if (noChild) {
      sequences.push(nodes.map((node) => node.value));
    }
  };
  var startTravelled = {};
  startTravelled[bst.value] = true;
  recurse([bst], startTravelled);
  return sequences;
}

// Proofs

var b = new BinarySearchTree(4);
b.insert(2);
b.insert(6);
b.insert(1);
b.insert(3);
b.insert(5);
b.insert(7);

console.log(bstSequences(b));
