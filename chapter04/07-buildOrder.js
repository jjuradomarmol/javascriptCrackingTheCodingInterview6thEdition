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

  findNodeWithNoChildren() {
    for (var node in this.nodes) {
      if (Object.keys(this.nodes[node]).length === 0) {
        return node;
      }
    }
    return undefined;
  }

  buildOrder(projects, dependencies) {
    projects.forEach((project) => {
      this.addNode(project);
    });
    dependencies.forEach((dependency) => {
      this.addEdge(dependency[1], dependency[0]);
    });
    var answer = [];
    var currentNode = this.findNodeWithNoChildren();
    while (currentNode !== undefined) {
      answer.push(currentNode);
      this.removeNode(currentNode);
      currentNode = this.findNodeWithNoChildren();
    }
    if (answer.length === projects.length) {
      return answer;
    } else {
      throw Error;
    }
  }
}

/* TEST */
let projects = ["a", "b", "c", "d", "e", "f"];
let dependencies = [
  ["a", "d"],
  ["f", "b"],
  ["b", "d"],
  ["f", "a"],
  ["d", "c"],
];

let buildedOrder = new Graph().buildOrder(projects, dependencies);
console.log(buildedOrder);
