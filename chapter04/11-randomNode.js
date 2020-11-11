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
    var dequeued = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return dequeued !== null ? dequeued.value : null;
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  isEmpty() {
    return this.front === null;
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this.value === undefined) {
      this.value = value;
    } else if (value < this.value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  find(value) {
    if (value === this.value) {
      return this;
    } else {
      if (value < this.value) {
        if (this.left === null) {
          return null;
        } else {
          this.left.find(value);
        }
      } else {
        if (this.right === null) {
          return null;
        } else {
          this.right.find(value);
        }
      }
    }
  }

  rebuild() {
    if (this.left === null && this.right === null) {
      return null;
    }
    var newBt = new BinaryTree();
    var myQueue = new Queue();
    if (this.left !== null) {
      myQueue.enqueue(this.left);
    }
    if (this.right !== null) {
      myQueue.enqueue(this.right);
    }
    var node;
    while (!myQueue.isEmpty) {
      node = myQueue.dequeue();
      newmyBt.insert(node.value);
      if (node.left !== null) {
        myQueue.enqueue(node.left);
      }
      if (this.right !== null) {
        myQueue.enqueue(node.right);
      }
    }
    return newBt;
  }

  delete(value) {
    if (value === this.value) {
      var rebuilt = this.rebuild();
      this.value = rebuilt.value;
      this.left = rebuilt.left;
      this.right = rebuilt.right;
    } else {
      var myQueue = new Queue();
      var built = false;
      var node;
      myQueue.enqueue(this);
      while (!myQueue.isEmpty() && !built) {
        node = myQueue.dequeue();
        if (node.left !== null) {
          if (node.left.value === value) {
            node.left = node.left.rebuild();
            built = true;
          } else {
            myQueue.enqueue(node.left);
          }
        }
        if (node.right !== null) {
          if (node.right.value === value) {
            node.right = node.right.rebuild();
            built = true;
          } else {
            myQueue.enqueue(node.right);
          }
        }
      }
      if (!built) {
        return null;
      }
    }
  }

  count() {
    var myQueue = new Queue();
    myQueue.enqueue(this);
    var node;
    var count = 0;
    while (!myQueue.isEmpty()) {
      node = myQueue.dequeue();
      count++;
      if (node.left !== null) {
        myQueue.enqueue(node.left);
      }
      if (node.right !== null) {
        myQueue.enqueue(node.right);
      }
    }
    return count;
  }

  iterateToN(n) {
    var myQueue = new Queue();
    myQueue.enqueue(this);
    var node;
    var count = 0;
    while (!myQueue.isEmpty()) {
      node = myQueue.dequeue();
      count++;
      if (count === n) {
        return node;
      }
      if (node.left !== null) {
        myQueue.enqueue(node.left);
      }
      if (node.right !== null) {
        myQueue.enqueue(node.right);
      }
    }
    return undefined;
  }

  getRandomNode() {
    var count = this.count();
    var random = Math.floor(Math.random() * count) + 1;
    return this.iterateToN(random);
  }
}

// Proofs

var myBt = new BinaryTree();
myBt.insert(4);
myBt.insert(2);
myBt.insert(6);
myBt.insert(1);
myBt.insert(3);
myBt.insert(5);
myBt.insert(7);

var randomNumber = myBt.getRandomNode().value;
console.log(randomNumber);
