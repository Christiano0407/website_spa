//*? === Algorithms === */

//** === Alg: BubbleSort === */
export const bubbleSort = (array, proveFunc) => {
  let n = array.length; 
  let swapped = true; 

  while (swapped) {
    swapped = false; 

    for (let i = 1; i < n; i++) {
      if (proveFunc(array[i - 1], array[i])) { 
        const temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
    n--;
  }

  return array;
};

//** === Alg: BinarySearch === */
export const binarySearch = (array, keyword) => {
  let minIndex = 0; 
  let maxIndex = array.length - 1; 
  let middleElement, middleValue; 

  while(minIndex <= maxIndex) {
    middleValue = Math.floor((minIndex + maxIndex) / 2); 
    middleElement = array[middleValue];

    if(middleElement === keyword.toLowerCase()) {
      return middleValue; 
    } else if(middleElement < keyword.toLowerCase()) {
      minIndex = middleValue + 1; 
    } else {
      maxIndex = middleValue - 1; 
    }
  }
  return -1;
}; 