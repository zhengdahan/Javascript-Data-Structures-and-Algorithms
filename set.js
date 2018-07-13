import { Z_DEFAULT_STRATEGY } from "zlib";

// 集合
function Set () {
  let items = {}

  this.has = function  (value) {
    return items.hasOwnProperty(value)
  }
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    } else {
      return false
    }
    
  },
  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }
  this.clear = function () {
    items = {}
  }
  this.size = function () {
    return Object.keys(items).length
  }
  this.values = function () {
    return Object.values(items)
  }
  this.union = function (otherSet) { // 并集
    let unionSet = new Set()
    let values = this.values()
    for(let i=0; i< values.length; i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for(let i=0; i< values.length; i++) {
      unionSet.add(values[i])
    }
    
    return unionSet
  }
  this.intersection =function (otherSet) { // 交集
    let intersection = new Set()
    let values = this.values()
    for (let index = 0; index < values.length; index++) {
      if (otherSet.has(values[index])) {
        intersection.add(values[index])
      }
    }
    return intersection
  }
  this.difference = function (otherSet) {
    let difference  = new Set()
    let values = this.values()
    for (let index = 0; index < values.length; index++) {
      if (!otherSet.has(values[index])) {
        difference.add(values[index])
      }
    }
    return difference
  },
  this.subSet = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values()
      for (let index = 0; index < values.length; index++) {
        if (!otherSet.has(values[index])){
          return false
        }
      }
      return true
    }
  }
}
let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)
console.log(setA.subSet(setB))