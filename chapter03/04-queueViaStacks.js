class QueueViaStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    if (this.stack2.length > 0) {
      for (let i = 0; i < this.stack2.length; i++) {
        this.stack1.push(this.stack2.pop());
      }
    }
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack1.length > 0) {
      return this.stack1[0];
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length == 0 && this.stack2.length == 0;
  }
}

// Proofs

var myQueueViaStacks = new QueueViaStacks();
console.log(myQueueViaStacks.isEmpty(), true);

myQueueViaStacks.enqueue("a");
myQueueViaStacks.enqueue("b");
myQueueViaStacks.enqueue("c");
myQueueViaStacks.enqueue("d");
myQueueViaStacks.enqueue("e");
myQueueViaStacks.dequeue();
console.log(myQueueViaStacks.peek(), "b");
