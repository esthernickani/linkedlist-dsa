/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (this.head === null){
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode 
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.length++;
    return;
  }

  /** pop(): return & remove last item. */

  pop() {
    let removedItem;
    if (this.head === null){
      return null;
    }

    if (this.head.next === null){
      removedItem = this.head.val;
      this.head = null;
    }
    
    let second_last = this.head;
    if (second_last && second_last.next){
      while(second_last.next.next) {
        second_last = second_last.next
      }
      removedItem = second_last.next.val;
      second_last.next = null;
      this.tail = second_last;
    }
    
    this.length --;
    return removedItem;
  }

  /** shift(): return & remove first item. */

  shift() {
    let removedItem;
    if (this.head === null){
      return null
    }
    if (this.head.next){
      removedItem = this.head.val;
      this.head = this.head.next;
    } else {
      removedItem = this.head.val;
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return removedItem;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let counter = 0;

    while (counter < idx) {
      currentNode = currentNode.next;
      counter ++;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let counter = 0;

    while (counter < idx) {
      currentNode = currentNode.next;
      counter ++;
    }

    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0){
      return 'invalid index'
    }
    let newNode = new Node(val);
    if (idx === 0 && this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }
    if (idx === 1){
      newNode.next = this.head;
      this.head =  newNode;
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      }
      this.length ++;
      return;
    }

    if (idx === this.length) {
      this.tail = newNode;
    }

    let current = this.head;
    let i = 0;
    while (i < idx-1 && current) {
      current = current.next;
      i++;
    }

    if(current){
      newNode.next = current.next;
      current.next = newNode
    }
   
    this.length ++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    let removedItem;
    if (this.length === 0){
      return null;
    }

    if(this.length === 1){
      removedItem = this.head;
      this.head = null;
      this.tail = null;
      this.length --;
      return removedItem;
    }

    if (idx === 0 & this.length >= 1){
      removedItem = this.head;
      this.head = this.head.next;
      this.length--;
      return removedItem;
    }

    removedIdx = this.getAt(idx-1)
    if (!removedIdx || !removedIdx.next){
      this.length--;
      return
    }
    removedIdx.next = removedIdx.next.next;


  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let counter = 0;
    let currentNode = this.head;
    if (this.length === 0){
      return 0;
    }

    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
      counter ++;
    }
    let avg = sum/counter;
    return avg;
  }
}

module.exports = LinkedList;
