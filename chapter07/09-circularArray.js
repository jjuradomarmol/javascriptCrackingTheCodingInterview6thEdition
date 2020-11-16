class CircularArray {
  constructor() {
    this.array = [];
    this.front = null;
    this.back = null;
  }

  rotate() {
    if (this.array.length > 0) {
      this.front = (this.front + 1) % this.array.length;
      this.back = (this.back + 1) % this.array.length;
    }
  }

  push(value) {
    if (this.array.length === 0) {
      this.array.push(value);
      this.front = 0;
      this.back = 0;
    } else if (this.front <= this.back) {
      this.array.push(value);
      this.back++;
    } else {
      this.array = this.array
        .slice(0, this.back + 1)
        .concat([value])
        .concat(this.array.slice(this.front));
      this.back++;
    }
  }

  pop() {
    if (this.array.length === 0) {
      return;
    } else if (this.front <= this.back) {
      var answer = this.array.pop();
      this.back--;
      return answer;
    } else {
      var answer = this.array[this.back];
      this.array = this.array
        .slice(0, this.back)
        .concat(this.array.slice(this.front));
      this.back--;
      return answer;
    }
  }
}


// Proofs

var circularArray = new CircularArray();
circularArray.push(1);
circularArray.push(2);
circularArray.push(3);
circularArray.push(4);
circularArray.push(5);
circularArray.rotate();
circularArray.rotate();
console.log(
  circularArray.array,
  circularArray.front,
  circularArray.back,
  "[1, 2, 3, 4, 5], 2, 1"
);
console.log(circularArray.pop(), 2);
