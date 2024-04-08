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
      const data = await response.json()
      console.log(data);

      const showData = (d) => {
        for (const item of d) {
          console.log(item); 
        }
      }

      showData(data); // From JSON

      const dataNew = bubbleSort(data, (a, b) => a.trip_Id > b.trip_Id ); 
      console.log(dataNew.map(newData =>  newData.trip_Id ));  // From Algorithm
      
    } else {
      throw new Error(`Error to Get Data, ${response.status}`); 
    }
   
  }catch(err) {
    console.error("Error to Read Data Json", err);
  }
}

dataTrip();


document.addEventListener('DOMContentLoaded', () => { 
   btnMenu.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Click Menu");
     });
   });
}); 