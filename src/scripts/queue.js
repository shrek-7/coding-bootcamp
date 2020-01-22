// queue implementation

class Queue {
  constructor() {
    this.list = [];
  }

  add(element) {
    this.list.unshift(element);
  }

  remove() {
    this.list.pop();
  }

  show() {
    return this.list;
  }
}

let myQ = new Queue();

myQ.add(10);
myQ.add(20);
myQ.add(30);
myQ.add(40);
myQ.add(50);
myQ.add(60);
myQ.remove();
myQ.remove();
console.log(myQ.show());
