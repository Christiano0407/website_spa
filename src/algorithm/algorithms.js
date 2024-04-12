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
/* export const binarySearch = (array, keyword) => {
  let minIndex = 0; 
  let maxIndex = array.length - 1; 
  let middleElement, middleValue; 

  while(minIndex <= maxIndex) {
    middleValue = Math.floor((minIndex + maxIndex) / 2); 
    middleElement = array[middleValue];

    if(middleElement === keyword) {
      return middleValue; 
    } else if(middleElement < keyword.toLowerCase()) {
      minIndex = middleValue + 1; 
    } else {
      maxIndex = middleValue - 1; 
    }
  }
  return -1;
};  */
export function binarySearch(dataSorted, searchKeyword) {
  let startIndex = 0;
  let endIndex = dataSorted.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (dataSorted[middleIndex] === searchKeyword) {
      return middleIndex;
    } else if (dataSorted[middleIndex] > searchKeyword) {
     
      endIndex = middleIndex - 1;
    } else {
   
      startIndex = middleIndex + 1;
    }
  }

  return -1;
}; 