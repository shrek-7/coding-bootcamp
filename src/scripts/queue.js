// queue implementation

// weave function :
// function to weave 2 queues together into a single queue.

class Queue {
  constructor() {
    this.list = [];
  }

  add(element) {
    this.list.unshift(element);
  }

  remove() {
    return this.list.pop();
  }

  show() {
    return this.list;
  }

  peek() {
    return this.list[this.list.length - 1];
  }
}

function weave(inputQ1, inputQ2) {
  let mergedQ = new Queue();
  while (inputQ1.peek() || inputQ2.peek()) {
    if (inputQ1.peek()) {
      mergedQ.add(inputQ1.remove);
    }
    if (inputQ2.peek()) {
      mergedQ.add(inputQ2.remove);
    }
  }

  return mergedQ;
}

let myQ = new Queue();
let myQ2 = new Queue();

myQ.add(10);
myQ.add(20);
myQ.add(30);
myQ.remove();
console.log(myQ.show());

myQ2.add("ten");
myQ2.add("twenty");
myQ2.add("thirty");
console.log(myQ2.show());

// let combinedQ = weave(myQ, myQ2);

// console.log(combinedQ.show());
