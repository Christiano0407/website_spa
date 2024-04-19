import { mergeSort } from "../../algorithm/algorithms";
import { TripPage } from "../../poo/patternsDesign";

const displayMobile = document.querySelector("#displayMobile");
const mainDisplayMobile = document.querySelector("#displayMainMobile"); 
const plusMobile = document.querySelector("#displayMobilePlus"); 


export const tripDisplay = async () => {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("/src/data/data.json"); 
      if (response.ok) {
        const data = await response.json(); 
     
        const dataStructure = Array.isArray(data.data) ? [...data.data] : [];
        console.log("DsTR:", dataStructure);
        // - Used Algorithm MergeSort -
        const dataSorted = mergeSort(dataStructure, 0, dataStructure.length); 
        console.log("Data Trip Sorted", dataSorted);

      } else {
        throw new Error("Failed to Get Data Trip"); 
      } 

    }catch(err) {
      console.log("Error! Error To Get Data Trip"); 
    }

  }); 
}; 