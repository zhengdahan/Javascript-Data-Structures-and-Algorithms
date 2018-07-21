function ArrayList() {
    var array = []
    this.insert = function (item) {
        array.push(item)
    }
    this.toString = function () {
        return array.join();
    }
    this.bubbleSort = function () {
        var length = array.length
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1)
                }
            }
        }
    }
    this.modifiedBubbleSort = function () {
        var length = array.length
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1)
                }
            }
        }
    }
    var swap = function (array, index1, index2) {
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux;
        // [array[idnex1], array[index2]] = [array[index2], array[index1]]
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
array.modifiedBubbleSort()
console.log(array.toString())