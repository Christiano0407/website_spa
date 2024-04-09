//import { readFile } from "fs/promises"; //Get Of System File 
import { bubbleSort, binarySearch } from "../algorithm/algorithms.js";
import { ConcreteFactory } from "../poo/patternsDesign.js";

const navMobile = document.querySelector("#navMobile"); 
const displayMobile = document.querySelector("#displayMobile");
const navMenu = document.querySelector("#idNavigation"); 
const btnMenu = document.querySelectorAll(".menu__list--nav");


const TripDestinationAndFlight = async (keywords) => {
  try {
    //const data = await readFile(new URL('../data/data.json', import.meta.url));
    const response = await fetch('../data/data.json');
    if(response.status === 200) {
      const data = await response.json();
      console.log(data); // Call Data Base

      const factory = new ConcreteFactory(); 
      const destination = factory.createDestination(keywords); 
      const flights = factory.createFlight(keywords);
      const lodging = factory.createLodging(keywords);
      
      const dataSorted = bubbleSort(Array.isArray(data.data) ? [...data.data] : [], (a, b) => a.trip_Id > b.trip_Id);
      console.log("Order Id: ", dataSorted); // add: - Algorithm & Data Structure -

      const searchTravel = binarySearch(dataSorted, keywords);
      const destinyIndex = binarySearch(destination, keywords); 
      const flightsIndex = binarySearch(flights, keywords); 
      const lodgingIndex = binarySearch(lodging, keywords);

      console.log(destination[destinyIndex]); 
      
    } else {
      throw new Error(`Error to Get Data, ${response.status}`); 
    }
   
  }catch(err) {
    console.error("Error to Read Data Json", err);
  }
}

TripDestinationAndFlight();
/* const showData = (d) => {
  for (const item of d) {
    console.log(item); // Implement display logic here
  }
};

showData(data); */


document.addEventListener('DOMContentLoaded', () => { 
   btnMenu.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Click Menu");
     });
   });
}); 