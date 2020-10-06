class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteMiddleNode(middleNode) {
  while (middleNode !== null && middleNode.next !== null) {
    middleNode.value = middleNode.next.value;
    if (middleNode.next.next === null) {
      middleNode.next = null;
    }
    middleNode = middleNode.next;
  }
}

function printList(head) {
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log("end of print");
}

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("e");
var f = new LinkedList("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
deleteMiddleNode(c);
printList(a);
