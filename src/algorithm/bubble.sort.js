//*? === Algorithms === */

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


const binarySearch = (array, valueToFind, key) => {}