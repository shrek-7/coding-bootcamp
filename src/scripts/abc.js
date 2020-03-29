class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data) {
    let node = new Node(data);

    if (!this.head) {
      // when no node exists, list is empty.
      this.head = node;
      this.tail = node;
      return;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  insertLast(data) {
    let node = new Node(data);

    if (!this.tail) {
      this.insertFirst(data);
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next; // point head to next node.
    this.head.prev = null; // remove the link of first node.
  }

  removeLast() {
    if (!this.tail) {
      return null;
    }

    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
      return null;
    }
    this.tail.next = null;
  }

  print() {
    let head = this.head;

    while (head) {
      console.log(head);
      head = head.next;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
  }
}

let l = new DLinkedList();

l.insertFirst(10);
l.insertFirst(20);
l.insertFirst(30);
l.insertFirst(40);

l.insertLast(5);
l.insertLast(99);
l.insertLast(101);

// l.removeFirst();
l.removeLast();
l.removeLast();
l.removeLast();
l.removeLast();
l.removeLast();
l.removeLast();
l.removeLast();
// l.clear();

l.insertFirst(20);
l.insertLast(30);
l.print();

// TODO:
// getAt(index)
// insertAt(index)
// removeAt(index)
