"use strict";

/** take two sorted arrays and returns one fully sorted array */

function merge(arr1, arr2) {
    const newArr = [];
    let r1 = 0;
    let r2 = 0;

    console.log("inside the merge function arr1", arr1, "arr2", arr2)

    while (newArr.length !== (arr1.length + arr2.length)) {
        if(arr1.length === r1){
            newArr.push(arr2[r2])
            r2++;
        } else if (arr2.length === r2) {
            newArr.push(arr1[r1])
            r1++
        } else if (arr1[r1] > arr2[r2]) {
            newArr.push(arr2[r2])
            r2++;
        } else {
            newArr.push(arr1[r1])
            r1++;
        }
    }
    
    return newArr;
}

//need pointers
//r1 and r2 pointers
//init a new array
//while loop (new array === arr1 + arr2)
//if statement to compare the points
//push the element to new array

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2)

    let firstArr = arr.slice(0, middle)
    let secondArr = arr.slice(middle, arr.length)

    console.log("OG arr", arr)
    console.log("firstArr", firstArr, "secondArr", secondArr)
    return merge(mergeSort(firstArr), mergeSort(secondArr))
 }

 // middle = Math.floor(arr.length / 2)
 // split the array with slice(middle)
 // base case if arr.length <= 1 return arr; 

module.exports = { merge, mergeSort };