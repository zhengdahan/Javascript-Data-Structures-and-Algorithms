// 树

// 二叉搜索树
function BinarySearchTree () {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  var root = null

  // 插入辅助函数
  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  //插入方法
  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  // 中序遍历
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  // 中序遍历辅助函数
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback); //{3}
      callback(node.key); //{4}
      inOrderTraverseNode(node.right, callback); //{5}
    }
  }
  // 先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }
  // 先序遍历辅助函数
  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }
  // 后续遍历辅助函数
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.left. callback)
      callback(node.key)
    }
  }

  // 寻找树的最小键的方法
  this.min = function () {
    return minNode(root)
  }
  // 最小节点函数
  var minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  // 寻找树的最小键的方法
  this.max = function () {
    return maxNode(root)
  }
  // 最小节点函数
  var maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  // 搜索特定的值
  this.search = function () {
    return searchNode(root, key)
  }
  var searchNode = function (node, key) {
    if (node !== null) {
      return false
    }
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode (node.right, key)
    } else {
      return true
    }
  }

  // 移除节点
  this.remove = function (key) {
    root = removeNode(root, key)
  }
  var removeNode = function (node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right > removeNode(node.right, key)
      return node
    } else { // 键等于node.key
      //第一种情况 —— 一个叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node
      }
      // 第二种情况 —— 只有一个字节点的节点
      if (node.left === null) {
        node = node.right;
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // 第三种情况 —— 一个有两个字节点的节点
      var findMinNode = function (node) {
        while (node && node.left !== null) {
          node = node.left
        }
        return node
      }
      var aux = findMinNode(node.right); //{18}
      node.key = aux.key; //{19}
      node.right = removeNode(node.right, aux.key); //{20}
      return node; //{21}
    }
  }
}

function printNode (value) {
  console.log(value)
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

console.log(tree.max())
