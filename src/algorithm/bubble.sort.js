//*? === Algorithms === */

export const bubbleSort = (array, proveFunc) => {
  //let d = d.length; 
  let swapped;

  while(swapped) {
    let swapped = false; 

    for(let i = 0; i <= array; i++) {
      if(proveFunc(array[i - 1] > array[i])) {
          const temp = array[i - 1];
          array[i - 1] = array[i]; 
          array[i] = temp; 
          swapped = true;
      }
    }
  }

  return array;
}

const binarySearch = () => {}