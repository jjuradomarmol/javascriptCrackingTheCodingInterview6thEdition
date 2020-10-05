class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function checkDuplicates(head, node) {
  var currentNode = head;
  while (currentNode !== node) {
    if (currentNode.value === node.value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

function printLinkedList(head) {
  var node = head;
  console.log("start of linked list");
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log("end of linked list");
}

function removeDuplicates(head) {
  var node = head;
  while (node !== null) {
    if (node.next !== null && checkDuplicates(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
}

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDuplicates(a);
printLinkedList(a);

var f = new LinkedList("b");
var g = new LinkedList("g");
var h = new LinkedList("c");
var i = new LinkedList("a");
var j = new LinkedList("j");

e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;

removeDuplicates(a);
printLinkedList(a);
