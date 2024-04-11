//import { readFile } from "fs/promises"; //Get Of System File 
import { bubbleSort, binarySearch } from "../algorithm/algorithms.js";
import { CityDestination, TravelLodging, TravelTransport } from "../poo/patternsDesign.js";


const navMobile = document.querySelector("#navMobile"); 
const displayTravel = document.querySelector("#displayTravel"); 
const displayMobile = document.querySelector("#displayMobile");
const navMenu = document.querySelector("#idNavigation"); 
const btnMenu = document.querySelectorAll(".menu__list--nav");
const btnSearch = document.querySelector("#heroBtn"); 
const inputKey = document.querySelector("#idSearchInput");


//*? === Btn Search Display === */
document.addEventListener("DOMContentLoaded", () => {
  btnSearch.addEventListener("click", async (e) => {
   e.preventDefault();
   // - Call Input Value -
   const keyword = inputKey.value.trim();
   console.log(keyword); 
   await tripDestinationAndFlight(keyword); 
  })
}); 


//*? === Function Call all Data Travel === */
const tripDestinationAndFlight = async (keywords) => {
  try {
    //const data = await readFile(new URL('../data/data.json', import.meta.url));
    const response = await fetch('../data/data.json');
    if(response.ok) {
      const data = await response.json();
      console.log(data); // - Call Data Base -
      // - Algorithms -
      const dataSorted = bubbleSort(Array.isArray(data.data) ? [...data.data] : [], (a, b) => a.trip_Id > b.trip_Id);
      console.log("Order Id: ", dataSorted); // add: - Algorithm & Data Structure -
     
      const searchKeyword = binarySearch(dataSorted, keywords);
      console.log(searchKeyword); 

      if(searchKeyword !== - 1) {

        const matchTravel = dataSorted[searchKeyword]; 
        // - Object Pattern Design -
        const cityDestinationData = {
          Destination: matchTravel.destination,
          TravelName: matchTravel.travelName,
          StartDate: matchTravel.startDate,
          EndDate: matchTravel.endDate,
          Duration: matchTravel.Duration,
        }; 

        const lodgingData = {
          Destination: matchTravel.destination,
          AccomodationType: matchTravel.accomodationType,
          AccomodationCost: matchTravel.accomodationCost,
        }; 

        const TransportData = {
          Destination: matchTravel.destination,
          TransportType: matchTravel.transportType,
          TransportCost: matchTravel.transportCost,
        }; 

        // - Patterns Designs - 
        const destination = new CityDestination(cityDestinationData);
        const lodging = new TravelLodging(lodgingData); 
        const transport = new TravelTransport(TransportData);
        
        const detailsDestination = destination.getDestinyDetail();
        const detailsLodging = lodging.getLodgingDetails();
        const detailsTransport = transport.getTransportDetails();
        
        displayTravel.innerHTML = "";
        const combinedDetails = `
        ${detailsDestination}
        ${detailsLodging}
        ${detailsTransport}
        `;
        /*  display.insertAdjacentHTML(`${destination}${lodging}${transport}`); */
        //displayTravel.innerHTML += detailsTransport;
        const display = document.createElement("div");
        display.innerHTML = combinedDetails; 
        display.innerHTML = ""; 
        displayTravel.appendChild(display);
      } else {
        displayTravel.innerHTML = "No matching data found.";
        displayTravel.classList.remove("none");
      };

      if (navMobile) {
          displayTravel.classList.add("display"); 
          navMobile.classList.add("none"); 
          displayTravel.classList.remove("none"); 
      } else {
          displayTravel.classList.add("none"); 
          navMobile.classList.remove("none"); 
          //displayTravel.classList.remove("display"); 
      }; 

    } else {
      throw new Error(`Error to Get Data, ${response.status}`); 
    }
   
  }catch(err) {
    console.error("Error to Read Data Json", err);
  }
}; 

//*? === Btn Menu Bar === */
document.addEventListener('DOMContentLoaded', () => { 
   btnMenu.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Click Menu");
     });
   });
}); 