class StackWithMinimum {
  constructor() {
    this.valuesStack = [];
    this.minimumsStack = [];
  }

  push(value) {
    if (value <= this.min() || isNaN(this.min())) {
      this.minimumsStack.push(value);
    }
    this.valuesStack.push(value);
  }

  pop() {
    let value = this.valuesStack.pop();
    if (value === this.min()) {
      this.minimumsStack.pop();
    }
    return value;
  }

  min() {
    return this.minimumsStack[this.minimumsStack.length - 1];
  }

  peek() {
    return this.valuesStack[this.valuesStack.length - 1];
  }

  isEmpty() {
    return this.valuesStack[0] == undefined;
  }
}

// Proofs

var s = new StackWithMinimum();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), undefined);
