class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    var node = new LinkedList(value);
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      var prevBack = this.back;
      this.back = node;
      prevBack.next = this.back;
    }
  }

  dequeue() {
    var removed = this.front;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    return removed !== null ? removed.value : null;
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  isEmpty() {
    return this.front === null;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.allQueue = new Queue();
    this.tempQueue = new Queue();
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      this.dogQueue.enqueue(animal);
    } else if (animal.type === "cat") {
      this.catQueue.enqueue(animal);
    }
    this.allQueue.enqueue(animal);
  }

  dequeueAny() {
    if (this.allQueue.peek() === this.dogQueue.peek()) {
      this.dogQueue.dequeue();
    } else if (this.allQueue.peek() === this.catQueue.peek()) {
      this.catQueue.dequeue();
    }
    return this.allQueue.dequeue();
  }

  dequeueByType(type) {
    var yesQueue;
    if (type === "dog") {
      yesQueue = this.dogQueue;
    } else if (type === "cat") {
      yesQueue = this.catQueue;
    }
    while (!this.allQueue.isEmpty() && this.allQueue.peek().type !== type) {
      this.tempQueue.enqueue(this.allQueue.dequeue());
    }
    var animal = this.allQueue.dequeue();
    yesQueue.dequeue();

    while (!this.allQueue.isEmpty()) {
      this.tempQueue.enqueue(this.allQueue.dequeue());
    }

    while (!this.tempQueue.isEmpty()) {
      this.allQueue.enqueue(this.tempQueue.dequeue());
    }
    return animal;
  }

  dequeueDog() {
    return this.dequeueByType("dog");
  }

  dequeueCat() {
    return this.dequeueByType("cat");
  }
}

// Proofs

var myAnimalShelter = new AnimalShelter();
myAnimalShelter.enqueue({ type: "dog", name: "machi" });
myAnimalShelter.enqueue({ type: "dog", name: "daisy" });
myAnimalShelter.enqueue({ type: "cat", name: "peanuts" });
myAnimalShelter.enqueue({ type: "dog", name: "miso" });
myAnimalShelter.enqueue({ type: "cat", name: "dada" });
myAnimalShelter.enqueue({ type: "cat", name: "xiaoxiao" });

console.log(myAnimalShelter.dequeueAny(), "dog machi");
console.log(myAnimalShelter.dequeueCat(), "cat peanuts");
console.log(myAnimalShelter.dequeueAny(), "dog daisy");
console.log(myAnimalShelter.dequeueAny(), "dog miso");
