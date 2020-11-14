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
    let node = new LinkedList(value);
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      let previousBack = this.back;
      this.back = node;
      previousBack.next = this.back;
    }
  }

  dequeue() {
    let removed = this.front;
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

class Employee {
  constructor(name) {
    this.name = name;
  }

  dispatch(call, queue) {
    let context = this;
    setTimeout(() => {
      queue.enqueue(context);
      console.log(`adding ${context.name} back to queue`);
    }, call.time);
  }
}

class Call {
  constructor(time) {
    this.time = time;
  }
}

class CallCenter {
  constructor() {
    this.respondentQ = new Queue();
    this.managerQ = new Queue();
    this.directorQ = new Queue();
    this.open = false;
    this.init = false;
  }

  start() {
    if (this.init) {
      console.log("already intialized");
      return;
    }
    for (let i = 0; i < 3; i++) {
      this.respondentQ.enqueue(new Employee(`respondent${i}`));
      this.managerQ.enqueue(new Employee(`manager${i}`));
      this.directorQ.enqueue(new Employee(`director${i}`));
    }
    this.init = true;
  }

  dispatchCall(call) {
    let employee;
    if (!this.respondentQ.isEmpty()) {
      employee = this.respondentQ.dequeue();
      console.log(employee, "will be deployed");
      employee.dispatch(call, this.respondentQ);
      console.log("a respondent will be taking your call!");
    } else if (!this.managerQ.isEmpty()) {
      employee = this.managerQ.dequeue();
      console.log(employee, "will be deployed");
      employee.dispatch(call, this.managerQ);
      console.log("a manager will be taking your call!");
    } else if (!this.directorQ.isEmpty()) {
      employee = this.directorQ.dequeue();
      console.log(employee, "will be deployed");
      employee.dispatch(call, this.directorQ);
      console.log("a director will be taking your call!");
    } else {
      console.log(
        "sorry, there are currently no available staff to take your call :("
      );
    }
  }
}

// Proofs

var cc = new CallCenter();
cc.start();
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(2000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(4000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(6000));
cc.dispatchCall(new Call(500));
cc.dispatchCall(new Call(500));
setTimeout(function () {
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
  cc.dispatchCall(new Call(500));
}, 1000);
