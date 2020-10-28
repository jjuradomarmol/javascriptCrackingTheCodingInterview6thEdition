class StackOrdered {
  constructor() {
    this.valuesStack = [];
  }

  push(value) {
    this.valuesStack.push(value);
    let orderedArray = this.valuesStack.sort((a, b) => b - a);
  }

  pop() {
    this.valuesStack.pop();
  }

  peek() {
    return this.valuesStack[this.valuesStack.length - 1];
  }

  isEmpty() {
    return this.valuesStack[0] == undefined;
  }
}

// Proofs

var myStackOrdered = new StackOrdered();
myStackOrdered.push(99);
myStackOrdered.push(4);
myStackOrdered.push(1);
myStackOrdered.push(6);
myStackOrdered.push(8);
myStackOrdered.push(10);
myStackOrdered.push(22);
myStackOrdered.push(3);
myStackOrdered.push(72);
console.log(myStackOrdered);
