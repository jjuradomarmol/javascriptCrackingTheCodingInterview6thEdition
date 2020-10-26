class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  let center, slow, quick;
  center = slow = quick = head;
  if (slow.next == null) {
    return true;
  }

  while (quick.next != null) {
    slow = slow.next;
    slow.prev = center;
    center = slow;
    quick = quick.next;
    if (quick.next == null) {
      center = slow.prev;
    } else {
      quick = quick.next;
    }
  }

  do {
    if (slow.value !== center.value) {
      return false;
    }
    slow = slow.next;
    center = center.prev;
  } while (slow != null);

  return true;
}

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("c");
var f = new LinkedList("b");
var g = new LinkedList("a");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(isPalindrome(a));
