const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.q = [];
    this.list = null;
  }

  get size() {
    return this.q.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.list === null) {
      this.list = node;
    } else {
      this.list.next = node;
    }
    this.q.push(element);
  }

  dequeue() {
    const remElem = this.q.shift();
    return remElem;
  }
}

module.exports = Queue;
