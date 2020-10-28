class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }

  push(value) {
    if (
      this.stackSet.length === 0 ||
      this.stackSet[this.stackSet.length - 1].length === this.capacity
    ) {
      var newStack = [];
      newStack.push(value);
      this.stackSet.push(newStack);
    } else {
      this.stackSet[this.stackSet.length - 1].push(value);
    }
  }

  pop() {
    if (this.numStack === 0) {
      return undefined;
    } else if (this.stackSet[this.stackSet.length - 1].length === 0) {
      this.stackSet.pop();
    }
    this.stackSet[this.stackSet.length - 1].pop();
  }

  peek() {
    return this.stackSet[this.stackSet.length - 1];
  }

  isEmpty() {
    return this.stackSet.length === 0;
  }

  popAt(index) {
    return this.stackSet[index].pop();
  }
}

// Proofs

var stackOfPlates = new SetOfStacks(3);
stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(3);
stackOfPlates.push(4);
stackOfPlates.push(5);
stackOfPlates.push(6);
stackOfPlates.push(7);
stackOfPlates.push(8);
stackOfPlates.push(9);

console.log(stackOfPlates.stackSet);

stackOfPlates.pop();
stackOfPlates.pop();
stackOfPlates.pop();
stackOfPlates.pop();
stackOfPlates.pop();
stackOfPlates.pop();

console.log(stackOfPlates.stackSet);
