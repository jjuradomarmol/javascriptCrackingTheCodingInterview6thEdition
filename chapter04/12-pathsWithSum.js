function SumArray(myArray) {
  return myArray.reduce((total, num) => total + num, 0);
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  countPathsWithRoot(value, path) {
    var pathCount = 0;
    if (path === undefined) {
      path = [this.value];
    } else {
      path = [...path, this.value];
    }
    if (SumArray(path) === value) {
      pathCount++;
    }
    if (this.left !== null) {
      pathCount += this.left.countPathsWithRoot(value, path);
    }
    if (this.right !== null) {
      pathCount += this.right.countPathsWithRoot(value, path);
    }
    return pathCount;
  }

  pathsWithSum(value) {
    var pathCount = 0;
    pathCount += this.countPathsWithRoot(value);
    if (this.left !== null) {
      pathCount += this.left.countPathsWithRoot(value);
    }
    if (this.right !== null) {
      pathCount += this.right.countPathsWithRoot(value);
    }
    return pathCount;
  }
}

// Proofs

var a = new BinaryTree(1);
var b = new BinaryTree(1);
var c = new BinaryTree(1);
var d = new BinaryTree(10);

a.left = b;
a.right = c;
c.left = d;

console.log(a.pathsWithSum(12), 1);
console.log(a.pathsWithSum(2), 2);
console.log(a.pathsWithSum(1), 3);
