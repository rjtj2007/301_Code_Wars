function find_average(array) {
    var total = 0;
    array.map(x =>total += x)
    return total/array.length
    }