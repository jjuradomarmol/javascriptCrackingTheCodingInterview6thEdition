class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let pa = headA,
    pb = headB;

  while (pa != pb) {
    pa = pa == null ? headB : pa.next;
    pb = pb == null ? headA : pb.next;
  }

  return pa;
}

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("e");
var f = new LinkedList("f");
var g = new LinkedList("g");
var h = new LinkedList("h");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList("a1");
var b1 = new LinkedList("b1");
var c1 = new LinkedList("c1");

a1.next = b1;
b1.next = c1;
c1.next = d;

let intersectionNode = getIntersectionNode(a, a1);
console.log(intersectionNode.value);
