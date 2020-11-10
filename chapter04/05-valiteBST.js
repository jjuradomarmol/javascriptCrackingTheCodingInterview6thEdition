class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBST(binaryTree) {
  function validateRecurse(currentBinaryTree, stackArray) {
    for (var i = 0; i < stackArray.length; i++) {
      if (
        stackArray[i].side === "left" &&
        currentBinaryTree.value > stackArray[i].node.value
      )
        return false;
      else if (
        stackArray[i].side === "right" &&
        currentBinaryTree.value < stackArray[i].node.value
      )
        return false;
    }
    var left =
      currentBinaryTree.left === null
        ? true
        : validateRecurse(
            currentBinaryTree.left,
            stackArray.concat([{ node: currentBinaryTree, side: "left" }])
          );
    var right =
      currentBinaryTree.right === null
        ? true
        : validateRecurse(
            currentBinaryTree.right,
            stackArray.concat([{ node: currentBinaryTree, side: "right" }])
          );
    return true && left && right;
  }
  return validateRecurse(binaryTree, []);
}

// Proofs

var binaryTree1a = new BinaryTree(5);
var binaryTree1b = new BinaryTree(4);
var binaryTree1c = new BinaryTree(6);
var binaryTree1d = new BinaryTree(1);
var binaryTree1e = new BinaryTree(100);

binaryTree1a.left = binaryTree1b;
binaryTree1a.right = binaryTree1c;
binaryTree1b.left = binaryTree1d;
binaryTree1b.right = binaryTree1e;

console.log(validateBST(binaryTree1a), false);

var binaryTree2a = new BinaryTree(5);
var binaryTree2b = new BinaryTree(3);
var binaryTree2c = new BinaryTree(6);
var binaryTree2d = new BinaryTree(1);
var binaryTree2e = new BinaryTree(4);

binaryTree2a.left = binaryTree2b;
binaryTree2a.right = binaryTree2c;
binaryTree2b.left = binaryTree2d;
binaryTree2b.right = binaryTree2e;

console.log(validateBST(binaryTree2a), true);
