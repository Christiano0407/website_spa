//** === Home Nav Pages (Display) === */
import { bubbleSort } from "../../algorithm/algorithms.js";
import { HomePageTravel } from '../../poo/patternsDesign.js';


const displayMobile = document.querySelector("#displayMobile");
const mainDisplayMobile = document.querySelector("#displayMainMobile"); 


export const displayHome = async () => {
  try {
    const response = await fetch("/src/data/data.json"); 
    
    if(response.ok) {
      const data = await response.json(); 
      console.log("Data Base: ", data); 
      const toDataSorted = Array.isArray(data.data) ? [...data.data] : []; 
      const sortedData = toDataSorted.length > 0 ? bubbleSort(Array.isArray(data.data) ? [...data.data]: [], (a,b) => a["trip_Id"] > b["trip_Id"]) : []; 
      //const sortedData = bubbleSort(Array.isArray(data.data) ? [...data.data]: [], (a,b) => a.trip__id > b.trip__id); 
      //const sortedData = data.data.sort((a, b) => a.trip__id - b.trip__id);
      console.log("Sorted Data: ", sortedData);

      //let orderTrim = sortedData.map(item => item.destination.toLowerCase().trim());
      let matchData = null; 
      matchData = sortedData.find(item => {
        const tripDestiny = item.Destination.toLowerCase().trim(); 
        console.log("De", tripDestiny); 
        return tripDestiny ===  "London, UK"; 
      }); 
      // === Object Pattern Home Display === 
      if(matchData) {
        /* const { destination, transportationType, transportationCost, images } = matchData; 
        const homePageData = { destination, transportationType, transportationCost, images, }; */
        const homePageData = {
          Destination: matchData.Destination, // Use camelCase here
          transportationType: matchData["Accommodation type"],
          transportationCost: matchData["Accommodation Cost"],
          images: matchData["images"],
        };
        // === Instance Pattern Design ===
        const homeTravel = new HomePageTravel(homePageData); 
        console.log("HT", homeTravel); 
        const detailsHomePage = homeTravel.getHomeDetails(); 
        console.log("P", detailsHomePage)
        const detailsHome = `${detailsHomePage}`; 
        console.log("D",detailsHome);  
        // === Display Elements HTML ===
        const displayCards = document.createElement("div"); 
        displayCards.className = "home__displayCard"; 
        displayCards.innerHTML = detailsHome;
        displayMobile.appendChild(displayCards); 
    } else {
        displayMobile.innerHTML = "No matching data found.";
        displayMobile.classList.remove("none");
    }

   } else {
    throw new Error("Failed to Fetch Data"); 
   }
 
  }catch(err) {
    console.error(`Error To read Data Base JSON, ${err}`);
    displayMobile.innerHTML = "An error occurred while displaying data.";
  }
}; 