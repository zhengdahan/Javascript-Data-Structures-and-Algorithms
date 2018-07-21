function ArrayList() {
  var array = []
  this.insert = function (item) {
      array.push(item)
  }
  this.toString = function () {
      return array.join();
  }
  this.mergeSort = function () {
     array = mergeSortRec(array)
  }
  var mergeSortRec = function (array) {
    var length = array.length
    if (length === 1) {
      return array
    }
    var mid = Math.floor(length/2),
    left = array.slice(0, mid),
    right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
  }
  var merge = function (left, right) {
    var result = [],
    il = 0,
    ir = 0
    while (il<left.length && ir<right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }
    while (il < left.length) {
      result.push(left[il++])
    }
    while (ir < right.length) {
      result.push(right[ir++])
    }
    return result
  }
}

function createNonSortedArray(size) { 
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
      array.insert(i)
  }
  return array
}

var array = createNonSortedArray(5)
console.log(array.toString())
array.mergeSort()
console.log(array.toString())