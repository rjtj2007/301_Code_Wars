function cubeOdd(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if(isNaN (arr[i])) {
      sum = undefined;
      return sum;
      }
    }
    arr.map(function(x) {
      if(x % 2 !== 0) {
      x = x * x * x;
      return sum = sum + x;
      }
    });
  return sum;
  }