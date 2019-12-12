// sortRace.js
// This file contains functions that iterate through one pass of each of the
//  following sort methods.
//  Merge sort, Quiksort, and Bubble sort

// Each function takes in an array and passes it through one iteration of
//  the respective sort function. If a function encounters an array that is
//  already sorted, it will return an empty array.

// Merge sort
function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

// Quiksort
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// Bubble sort
function bubblePass(arr) {
  var changeMade = false; // initialize to false

  for (var i = 0; i < arr.length - 1; ++i) {
    if (arr[i] > arr [i+1]) {
      changeMade = true; // change to true if change is made
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
  if (changeMade) { // if a change was made return the new array
    return arr;
  } else { // if list is already sorted (ie no change was made)
    return {}; // return empty array
  }
}

function areEqual(input, output) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] != output[i]) {return false;}
  }
  return true;
}

// log function to write the input array to the HTML canvas
// parameters:
//  rctx:   html canvas context
//  arr:    array to be printed
//  rcolor: test color
//  xpos:   x position of text in pixels from top left corner of canvas
//  ypos:   y position of text in pixels from top left corner of canvas
function log( rctx, arr, rcolor, xpos, ypos )
{
    if(arr == undefined || arr.length == 0) {
      return {};
    }
    rctx.save( );
    let fill = rcolor;
    let font = "12px Arial";
    var rtext = arr[0].toString();
    for (var i = 1; i < arr.length; ++i) {
      rtext += ", " + arr[i].toString();
    }
    rctx.fillStyle = fill;
    rctx.font = font;
    rctx.fillText( rtext, xpos, ypos);
    rctx.restore( );
}
