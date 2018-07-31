var insertionSort = function(arr) {
  for(index = 1; index <= arr.length; index++) {
    var value = arr[index];
    var i = index - 1;
    while (i >= 0) {
      if (value < arr[i]) {
        arr[i + 1] = arr[i];
        arr[i] = value;
        i = i - 1;
      } else {
        break;
      }
    }
  }
}

a = [10, 2, 4, 7, 2, 12,32,3234,65, 5675675675,4,3453,12121212121212];
insertionSort(a);
console.log(a);
