const SIZE = 5;

class Queue {
  constructor(printStatus) {
      this.front = -1;
      this.rear = -1;
      this.list = [];
      this.printStatus = printStatus
  }

  enQueue(item) {
      if (this.rear == SIZE - 1) {
        this.printStatus('No remaining space in the queue. No item were added.');
        return;
      };

      if (this.front == -1) {
          this.front = 0;
      };

      this.rear++;
      this.list[this.rear] = item;

      this.printStatus(`Item were added successfully at position ${this.rear}: ${item}.`)
  }

  deQueue() {
    const oldFront = this.list[0]
      if (this.front == -1) {
        this.printStatus('Queue is already empty. No item were removed.');
        return;
      }

      this.front++
      this.list.shift()

      if (this.front > this.rear) {
        this.front = this.rear = -1
      }

      this.printStatus(`Front were removed successfully: ${oldFront}.`)
  }

  peek() {
    this.printStatus(`Peek element is: ${this.list[0]}`)
  }

  size() {
    this.printStatus(`Current queue length: ${this.list.length}`)
  }

  isEmpty() {
    this.printStatus(`Queue is${this.list.length ? ' not ' : ' '}empty.`)
  }

  isFull() {
    console.log(this.rear, this.front)
    this.printStatus(`Queue is${this.rear - this.front == 4 ? ' ' : ' not '}full.`)
  }
}

module.exports = Queue
