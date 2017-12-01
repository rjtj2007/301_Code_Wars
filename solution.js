function fixTheMeerkat(arr) {
  var realHead = arr[2];
  var realTail = arr[0];
  arr[0] = realHead;
  arr[2] = realTail;
  return arr;
}