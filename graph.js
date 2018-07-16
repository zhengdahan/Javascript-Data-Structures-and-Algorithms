// 图

import Dictionary from './dictionary'
import {
  Queue
} from './queue';
import {
  Stack
} from './stack';

function Graph() {
  var vertices = []
  var adjList = new Dictionary()

  this.addVertex = function (v) {
    vertices.push(v)
    adjList.set(v, [])
  }

  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.toString = function () {
    var s = ''
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + '->';
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ''
      }
      s += '\n'
    }
    return s
  }

  // 广度优先搜索算法
  var initializeColor = function () {
    var color = []
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white' //{1}
    }
    return color
  }

  this.bfs = function (v, callback) {
    var color = initializeColor()
    let queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      var u = queue.dequeue()
      if (!u) {
        break
      }
      let neighbors = adjList.get(u)
      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'balck';
      if (callback) {
        callback(u)
      }
    }
  }

  // 使用BFS寻找最短路径
  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [],
      pred = []
    queue.enqueue(v)

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue()
      if (!u) {
        break
      }
      let neighbors = adjList.get(u);
      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distance: d,
      predecessors: pred
    }
  }



  // 深度优先搜索
  this.dfs = function (callback) {
    var color = initializeColor()

    for (var i = 0; i < vertices.length; i++) {
      if(color[vertical[i]] === 'white') {
        dfsVisit(vertices[i], cololr, callback)
      }
    }
  }
  var dfsVisit = function (u, color, callback) {
    color[u] = 'grey'
    if(callback) {
      callback(u)
    }
    var neighbors = adjList.get(u)
  }

}

function printNode(value) {
  console.log('Visited vertex:' + value)
}

var graph = new Graph()

var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// 原方法
// console.log(graph.toString());
// graph.bfs(myVertices[0], printNode)

// 改进版
var shortestPathA = graph.BFS(myVertices[0]);
// console.log(shortestPathA);

//构建定点A到其他顶点的路径
var fromVertex = myVertices[0]
for (var i = 1; i < myVertices.length; i++) {
  var toVertex = myVertices[i],
    path = new Stack()
  for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v)
  }
  path.push(fromVertex)
  var s = path.pop()
  while (!path.isEmpty()) {
    s += '——' + path.pop()
  }
  console.log(s)
}