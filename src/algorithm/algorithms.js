//*TODO: ===== === Algorithms === ====== */

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
const binarySearch = (array, keyword) => {
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
}; 


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

//** === Alg: MergeSort === */
export function mergeSort(D, start, end){
  if(Math.abs(end -  start) <= 1) return D.slice(start, end); 
  
  let mergeFrom = 0;
  let mergeTo = -1; // End To Data
  let width; 
  let i; 

  for (width = 1; width < end; width *= 2) {
    merge(D, mergeFrom, i, Math.min(i + width, end), Math.min(i + 2* width, end), mergeTo); 
    mergeFrom = (mergeFrom === 0 ? 1 : 0); 
    mergeTo = 1 - mergeFrom; 
  }

  if (mergeFrom !== 0) {
    copy(D, mergeFrom, mergeTo, start, end); 
  }

  return D.slice(start, end); 
}; 


function merge(D, mergeFrom, start, middle, end, mergeTo) {
  let i = start; 
  let j = middle; 
  let k; 

  for(k = start; k < end; k++) {
    if (i < middle && (j >= end || D[mergeFrom][i] <= D[mergeFrom][j])) {
      D[mergeTo][k] = D[mergeFrom][i]; 
      i += 1; // List
    } else {
      D[mergeTo][k] = D[mergeFrom[j]]; 
      j += 1;  // SubList
    }
  }
}; 


function copy(D, mergeFrom, mergeTo, start ,end) {
  let i; 
  for (i = start; i < end; i++) {
    D[mergeTo][i] = D[mergeFrom][i]
  }
}; 
//mergeSort(0, D[o].length); 
/**
 * width *= 2: Después de cada iteración, el width se duplica. Esto se hace multiplicando width por 2. Por ejemplo, si comenzamos con un width de 1, en la siguiente iteración será 2, luego 4, luego 8, y así sucesivamente. Esto nos permite dividir eficientemente el arreglo en subarreglos de tamaño potencias de 2 para la fusión.
 * En el contexto de tu código, D parece ser el nombre de un arreglo bidimensional que contiene los datos que estás ordenando con el algoritmo Merge Sort. En la función merge, D se utiliza para acceder a los elementos de este arreglo. Aquí está la línea en cuestión:
 */


//** ===  === */