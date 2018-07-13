// 链表

function LinkedList () {
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
  this.remove = function (element) {}
  this.indexOf = function (element) {}
  this.isEmpty = function () {}
  this.size = function () {}
  this.getHead = function () {}
  this.toString = function () {}
  this.print = function () {}
}
let list = new LinkedList ()
list.append(15);
list.append(10)
