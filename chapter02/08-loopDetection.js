class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function loopDetection(head) {
  var slow, fast;

  if (!head || !head.next) return false;

  slow = head;
  fast = head;

  if (head.next === head) return true;

  while (fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return slow;
  }

  return false;
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
d.next = b;
e.next = c;
f.next = d;

let nodeCycle = loopDetection(a);
console.log(nodeCycle.value);
