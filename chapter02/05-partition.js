class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function partition(head, partition) {
  let left;
  let middle;
  let right;
  let currentLeft = null;
  let currentMiddle = null;
  let currentRight = null;

  let node = head;
  while (node !== null) {
    if (node.value < partition) {
      if (currentLeft === null) {
        left = node;
        currentLeft = left;
      } else {
        currentLeft.next = node;
        currentLeft = currentLeft.next;
      }
    } else if (node.value === partition) {
      if (currentMiddle === null) {
        middle = node;
        currentMiddle = middle;
      } else {
        currentMiddle.next = node;
        currentMiddle = currentMiddle.next;
      }
    } else {
      if (currentRight === null) {
        right = node;
        currentRight = right;
      } else {
        currentRight.next = node;
        currentRight = currentRight.next;
      }
    }
    node = node.next;
  }
  currentRight.next = null;
  currentLeft.next = middle;
  currentMiddle.next = right;
  return left;
}

function printList(a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
}

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var listPartition = partition(a, 5);
printList(listPartition);
