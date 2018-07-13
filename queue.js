// 队列

let Queue = (function () {
  const items = new WeakMap();
  class Queue2 {
    constructor() {
      items.set(this, []);
    }
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
    size () {
      let q = items.get(this)
      return q.length
      return 
    }
  }
  return Queue;
})();

//优先级队列
function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)
    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break
      }
    }
    if (!added) {
      items.push(queueElement)
    }
    console.log(items)
  }
  this.dequeue = function () {
    this.items[0].shift()
  }
  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} -  ${items[i].priority}`)
    }
  }
}

// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("John", 2)
// priorityQueue.enqueue("Jack", 1);
// priorityQueue.enqueue("Camila", 1);
// priorityQueue.print();

