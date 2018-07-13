// 散列表
var loseloseHashCode = function (key) {
  var hash = 0
  for (let index = 0; index < key.length; index++) {
    hash += key[index];
  }
  return hash % 37
}

function HashTable () {
  var table = []

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    console.log(position + '-')
  }
}