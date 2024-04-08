//import { readFile } from "fs/promises"; //Get Of System File 
import { bubbleSort } from "../algorithm/bubble.sort.js";

const navMobile = document.querySelector("#navMobile"); 
const displayMobile = document.querySelector("#displayMobile");
const navMenu = document.querySelector("#idNavigation"); 
const btnMenu = document.querySelectorAll(".menu__list--nav");


const dataTrip = async () => {
  try {
    //const data = await readFile(new URL('../data/data.json', import.meta.url));
    const response = await fetch('../data/data.json');
    if(response.status === 200) {
      const data = await response.json();
      console.log(data); // Call Data Base
      
      const dataSorted = bubbleSort(Array.isArray(data.data) ? [...data.data] : [], (a, b) => a.trip_Id > b.trip_Id);
      console.log("Order Id: ", dataSorted); // add Algorithm
      
    } else {
      throw new Error(`Error to Get Data, ${response.status}`); 
    }
   
  }catch(err) {
    console.error("Error to Read Data Json", err);
  }
}

dataTrip();
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