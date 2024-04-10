//import { readFile } from "fs/promises"; //Get Of System File 
import { bubbleSort, binarySearch } from "../algorithm/algorithms.js";
import { cityDestination, travelLodging, travelTransport } from "../poo/patternsDesign.js";

const navMobile = document.querySelector("#navMobile"); 
const displayTravel = document.querySelector("#displayTravel"); 
const displayMobile = document.querySelector("#displayMobile");
const navMenu = document.querySelector("#idNavigation"); 
const btnMenu = document.querySelectorAll(".menu__list--nav");
const btnSearch = document.querySelector("#heroBtn"); 
const inputKey = document.querySelector("#idSearchInput");

//*? === Function Call all Data Travel === */
const tripDestinationAndFlight = async (keywords) => {
  try {
    //const data = await readFile(new URL('../data/data.json', import.meta.url));
    const response = await fetch('../data/data.json');
    if(response.status === 200) {
      const data = await response.json();
      console.log(data); // - Call Data Base -
      // - Algorithms -
      const dataSorted = bubbleSort(Array.isArray(data.data) ? [...data.data] : [], (a, b) => a.trip_Id > b.trip_Id);
      console.log("Order Id: ", dataSorted); // add: - Algorithm & Data Structure -
      const searchKeyword = binarySearch(dataSorted, keywords.toLowerCase());

      if(searchKeyword !== - 1) {
        const matchTravel = dataSorted[searchKeyword]; 
        
        const cityData = {
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
        const destination = cityDestination(cityData);
        const lodging = travelLodging(lodgingData); 
        const transport = travelTransport(TransportData);
        console.log({destination,lodging,transport });
      };

      displayTravel.innerHTML = ""; 

      if(navMobile) {
        navMobile.classList.add("none"); 
        displayTravel.classList.remove("none")
      } else {
        displayTravel.classList.add("none")
        navMobile.classList.remove("none"); 
      }; 

      displayTravel.insertAdjacentHTML(`${destination}${lodging}${transport}`);
      
    } else {
      throw new Error(`Error to Get Data, ${response.status}`); 
    }
   
  }catch(err) {
    console.error("Error to Read Data Json", err);
  }
}; 

/* const showData = (d) => {
  for (const item of d) {
    console.log(item); // Implement display logic here
  }
};

showData(data); */
//*? === Btn Search Display === */
document.addEventListener("DOMContentLoaded", () => {
   btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    // - Call Input Value -
    const keyword = inputKey.value;
    console.log(keyword); 
    tripDestinationAndFlight(keyword); 
   })
}); 

//*? === Btn Menu Bar === */
document.addEventListener('DOMContentLoaded', () => { 
   btnMenu.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Click Menu");
     });
   });
}); 