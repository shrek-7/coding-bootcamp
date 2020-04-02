// import { listenerCount } from "cluster";
let log = console.log;
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    let lastnode = this.getLast();

    if (lastnode) {
      lastnode.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }

  size() {
    let head = this.head;
    let count = 0;

    while (head) {
      count++;
      head = head.next;
    }
    console.log("list size: ", count);
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let head = this.head;
    while (head) {
      if (!head.next) {
        return head;
      }
      head = head.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    let previous = this.head;
    let node = this.head.next;

    if (!node) {
      this.head = null;
    }

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  getNodeAt(index) {
    if (!this.head) {
      return null;
    }

    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) {
        return node;
      }
      node = node.next;
      count++;
    }
    return null;
  }

  removeNodeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getNodeAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }
}


function midpoint(list) {

  if(!list.head) {
    return null;
  }
  if(!list.head.next) {
    return list.head;
  }
  let slow = list.head;
  let fast = list.head;

  while(fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;

}

let List = new LinkedList();

List.insertFirst(10);
List.insertFirst(2);
List.insertFirst(30);
List.insertFirst(60);
List.insertFirst(70);
List.insertFirst(80);
log(List.size())
// List.insertLast(99)
// log(List.getLast())
// log(List.size())

// log(List.getNodeAt(2));
// List.removeNodeAt(2);
// log(List.getNodeAt(2));
log(midpoint(List))

//functions to be reused

// instead of insertFirst just write a generic function insertAt
/**
 * for insert first => insertAt(data, 0)
 * 
 * for insert last => insertAt(data, list.size()-1)
 * Similar for remove at.
 * 
 * Remove first => removeNodeAt(0)
 * Remove last => removeNodeAt(list.size() - 1)
 * 
 * and getFirst and getLast
 * 
 * 
 * 
 */