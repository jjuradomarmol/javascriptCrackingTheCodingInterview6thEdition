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
      var previousBack = this.back;
      this.back = node;
      previousBack.next = this.back;
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

class Graph {
  constructor() {
    this.nodes = {};
  }

  addEdge(node, edge) {
    if (this.nodes[node] === undefined) {
      return "node does not exist";
    } else if (this.nodes[node][edge]) {
      return `edge ${node}-${edge} already exists`;
    } else {
      this.nodes[node][edge] = true;
    }
  }

  addNode(value) {
    if (this.nodes[value] !== undefined) {
      return `node of value ${value} already exists`;
    } else {
      this.nodes[value] = {};
    }
  }

  findEdges(node) {
    if (this.nodes[node] === undefined) {
      return "node does not exist";
    } else {
      return this.nodes[node];
    }
  }

  hasEdge(node, edge) {
    if (this.nodes[node] === undefined) {
      return false;
    } else {
      return this.nodes[node][edge] !== undefined;
    }
  }

  hasNode(node) {
    return this.nodes[node] !== undefined;
  }

  removeEdge(node, edge) {
    if (this.nodes[node] === undefined) {
      return "node does not exist";
    } else {
      delete this.nodes[node][edge];
    }
  }

  removeNode(node) {
    if (this.nodes[node] === undefined) {
      return "node does not exist";
    } else {
      delete this.nodes[node];
      for (var currentNode in this.nodes) {
        if (this.nodes[currentNode][node] !== undefined) {
          delete this.nodes[currentNode][node];
        }
      }
    }
  }
}

function checkRoute(value1, value2, graph) {
  var queue1 = new Queue();
  var queue2 = new Queue();
  var visited1 = {};
  var visited2 = {};

  visited1[value1] = true;
  visited2[value2] = true;
  if (graph.hasNode(value1)) {
    for (var edge in graph.findEdges(value1)) {
      queue1.enqueue(edge);
    }
  }
  if (graph.hasNode(value2)) {
    for (var edge in graph.findEdges(value2)) {
      queue2.enqueue(edge);
    }
  }

  var nextEdge1;
  var nextEdge2;
  while (!queue1.isEmpty() || !queue2.isEmpty()) {
    if (!queue1.isEmpty()) {
      nextEdge1 = queue1.dequeue();
      if (nextEdge1 === value2) {
        return true;
      }
      if (visited1[nextEdge1] === undefined) {
        visited1[nextEdge1] = true;
        if (graph.hasNode(nextEdge1)) {
          for (var edge in graph.findEdges(nextEdge1)) {
            queue1.enqueue(edge);
          }
        }
      }
    }
    if (!queue2.isEmpty()) {
      nextEdge2 = queue2.dequeue();
      if (nextEdge2 === value1) {
        return true;
      }
      if (visited2[nextEdge2] === undefined) {
        visited2[nextEdge2] = true;
        if (graph.hasNode(nextEdge2)) {
          for (var edge in graph.findEdges(nextEdge2)) {
            queue2.enqueue(edge);
          }
        }
      }
    }
  }
  return false;
}

// Proofs
var myGraph = new Graph();
myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
myGraph.addNode("D");
myGraph.addNode("E");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "C");

myGraph.addEdge("D", "E");

console.log(checkRoute("A", "C", myGraph), true);
console.log(checkRoute("A", "E", myGraph), false);
console.log(checkRoute("B", "A", myGraph), true);
console.log(checkRoute("D", "E", myGraph), true);
