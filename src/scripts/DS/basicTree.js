class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data); // create a new node
    this.children.push(node); //push the node to current node's children
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }

  show() {
    console.log(this);
  }
}

let node = new Node(10);

class Tree {
  constructor() {
    this.root = null;
  }

  // Breadth First
  traverseBf(fn) {
    //callback funciton to be run on each node
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  // Depth First
  traverseDf(fn) {
    //callback funciton to be run on each node
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const levelWidth = root => {
  const arr = [root, "stop"];
  const counter = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "stop") {
      counter.push(0);
      arr.push(node);
    } else {
      arr.push(...node.children);
      counter[counter.length - 1]++;
    }
  }
  return counter;
};
