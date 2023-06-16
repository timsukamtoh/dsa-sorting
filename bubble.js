"use strict";

/**Sorting algorithm using bubble sort */
//[4, 20, 12, 10, 7, 9]
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i ; j++) {
      console.log("i:", i, "j:", j)
      console.log(arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; //swaps places
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
