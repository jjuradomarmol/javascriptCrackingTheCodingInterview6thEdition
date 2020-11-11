class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  isAncestor(node2) {
    if (this === node2) {
      return true;
    } else {
      let answer1 = false;
      let answer2 = false;
      if (this.left !== null) {
        answer1 = this.left.isAncestor(node2);
      }
      if (this.right !== null) {
        answer2 = this.right.isAncestor(node2);
      }
      return false || answer1 || answer2;
    }
  }
}

function firstCommonAncestor(node1, node2) {
  let currentNode = node1;
  while (!currentNode.isAncestor(node2)) {
    if (currentNode === null) {
      throw Error;
    } else {
      currentNode = currentNode.parent;
    }
  }
  return currentNode.value;
}

// Proofs

var a = new BinaryTree("a");
var b = new BinaryTree("b");
var c = new BinaryTree("c");
var d = new BinaryTree("d");
var e = new BinaryTree("e");
var f = new BinaryTree("f");
var g = new BinaryTree("g");
var h = new BinaryTree("h");
var i = new BinaryTree("i");
var j = new BinaryTree("j");
var k = new BinaryTree("k");
var l = new BinaryTree("l");

a.left = b;
b.parent = a;
a.right = c;
c.parent = a;
b.left = d;
d.parent = b;
d.left = g;
g.parent = d;
d.right = h;
h.parent = d;
h.right = k;
k.parent = h;
k.left = l;
l.parent = k;
c.left = e;
e.parent = c;
c.right = f;
f.parent = c;
f.left = i;
i.parent = f;
f.right = j;
j.parent = f;

console.log(firstCommonAncestor(g, k), "d");
console.log(firstCommonAncestor(b, i), "a");
