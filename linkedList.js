// 链表

export default function LinkedList () {
  let Node = function (element) {
    this.element = element
    this.netxt = null
  }
  
  let length = 0
  let head = null
  
  this.append = function (element) {
    let node = new Node(element),
        current
    if (head === null){
      head = node; // 链表中第一个节点
    } else {
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
  this.insert = function (position, element) {
    // 检查越界值
    if (position >=0 && position <=length) {
      let node =new Node(element),
      current = head,
      previous,
      index = 0
      if (position === 0) {
        node.next = current;
        headr = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next
        }
        node.next = current
        previous.next = node;
      }
      length++
      return true
    } else {
      return false
    }
  }
  this.removeAt = function (position) {
    // 检查越界值
    if(position > -1 && position < length) {
      let current = head,
      previous,
      index = 0
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current;
          current - current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.indexOf = function (element) {
    let current = head, //{1}
    index = -1;
    while (current) { //{2}
      if (element === current.element) {
          return index; //{3}
      }
      index++; //{4}
      current = current.next; //{5}
    }
    return -1;
  }

  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.getHead = function () {
    return head;
  }

  this.toString = function () {
    let current = head, //{1}
    string = ''; //{2}
    while (current) { //{3}
      string += current.element +(current.next ? 'n' : '');//{4}
      current = current.next; //{5}
    }
    return string; //{6}
  }
}
let list = new LinkedList ()
list.append(15);
list.append(10)
