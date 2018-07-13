// 散列表

import LinkedList from './linkedList'

// 散列函数
var loseloseHashCode = function (key) {
  var hash = 0
  for (let index = 0; index < key.length; index++) {
    hash += key.charCodeAt(index);
  }
  return hash % 37
}

// 更好的散列函数

var djb2HashCode = function (key) {
  var hash = 5381;
  for (var i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
};




// 分离链接法

// 分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。它是解决冲突的
// 最简单的方法，但是它在HashTable实例之外还需要额外的存储空间。

function HashTable1() {
  var table = []

  var ValuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = function () {
      return '[' + this.key + '-' + this.value + ']'
    }
  }

  this.put = function (key, value) {
    let position = loseloseHashCode(key)
    if (table[position] == undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }
  this.get = function (key) {
    let position = loseloseHashCode(key)
    console.log(position)
    if (table[position] !== undefined) {

      // 遍历链表来寻找键值
      var current = table[position].getHead()
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      // 检查元素在链表第一个或最后一个节点的情况
      if (current.element.key === key) {
        return current.element.value
      }
      return undefined
    }
  }
  this.remove = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      // 检查是否为第一个或最后一个元素
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  }
}

var hash = new HashTable1();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');



// 线性探查

// 另一种解决冲突的方法是线性探查。当想向表中某个位置加入一个新元素的时候，如果索引
// 为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试
// index+2的位置，以此类推。

function HashTable2() {
  var table = []

  var ValuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = function () {
      return '[' + this.key + '-' + this.value + ']'
    }
  }

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value)
    } else {
      var index = ++position
      while (table[index] != undefined) {
        index++
      }
      table[index] = new ValuePair(key, value);
    }
  }
  this.get = function (key) {
    let position = loseloseHashCode(key)
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value
      } else {
        var index = ++position
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          return table[index].value
        }
      }
    }
    return undefined
  }
  this.remove = function (key) {
    let position = loseloseHashCode(key)
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[index] = undefined
      } else {
        var index = ++position
        while (table[index] === undefined || table[index].key !== key) {
          index++
        }
        if (table[index].key === key) {
          table[index] = undefined
        }
      }
    }
    return undefined
  }
}

var hash = new HashTable2();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');

console.log(hash.get('Donnie'))