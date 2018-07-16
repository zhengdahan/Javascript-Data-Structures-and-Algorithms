// 栈

let _items = Symbol()

export class Stack {
  constructor () {
    this[_items] = []
  }
  push (ele) {
    this[_items].push(ele)
  }
  pop (ele) {
    return this[_items].pop()
  }
  peek (){
    return this[_items][this[_items].length-1]
  }
  isEmpty () {
    return this[_items].length === 0
  }
  clear () {
    this[_items] = []
  }
  print () {
    console.log(this[_items])
  }
}

// 二进制转换
let divideBy2 = (num) => {
  let stack = new Stack(),
      rem,
      binaryString = ''

  while (num > 0) {
    rem = Math.floor(num % 2)
    stack.push(rem)
    num = Math.floor(num / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }
  return binaryString
}

