class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findKthToLast(kth, head) {
  if (head === null || kth < 1) {
    return;
  } else if (kth === 1) {
    console.log(head.value);
    findKthToLast(kth, head.next);
  } else {
    findKthToLast(kth - 1, head.next);
  }
}

var a = new LinkedList("1");
var b = new LinkedList("2");
var c = new LinkedList("3");
var d = new LinkedList("4");
var e = new LinkedList("5");
var f = new LinkedList("6");
var g = new LinkedList("7");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);
findKthToLast(7, a);
