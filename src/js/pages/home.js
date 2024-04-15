//** === Home Nav Pages (Display) === */
import { bubbleSort } from "../../algorithm/algorithms";
import { HomePageTravel } from "../../poo/patternsDesign";


const displayMobile = document.querySelector("#displayMobile");
const navMenu = document.querySelector("#idNavigation"); 
const menuHome = document.querySelector("#menuHome"); 


export const displayHome = async () => {
  try {
    const response = await fetch("../../data/data.json"); 
    if(response.ok) {
      const data = await response.json(); 
      console.log("Data Base: ", data); 
    }

    const sortedData = bubbleSort(Array.isArray(data.data) ? [...data.data]: [], a.trip__id > b.trip__id); 
    console.log("Sorted Data: ", sortedData);

    let orderTrim = sortedData.toLowerCase().trim();
    let matchData = null; 
    matchData = orderTrim.find(item => {
      const tripDestiny = item.Destination.toLowerCase().trim(); 
      return tripDestiny === orderTrim;  
    });
    // === Object Pattern Home Display === 
    if(matchData) {

      const homePageData = {
        Destination: matchData.Destination,
        TransportationType: matchTravel["Transportation type"],
        TransportationCost: matchTravel["Transportation cost"],
        images: matchData.image,  
      };

      
      // === Instance Pattern Design ===
      const homeTravel = new HomePageTravel(homePageData); 
      const detailsHomePage = homeTravel.getHomeDetails(); 
      const detailsHome = `${detailsHomePage}`; 

      // === Display Elements HTML ===
      const displayCards = document.createElement("div"); 
      displayCards.className = "home__displayCard"; 
      displayCards.innerHTML = ""; 
      displayCards.innerHTML = detailsHome; 
      displayMobile.appendChild(displayCards); 

    } else {

    }
 
  }catch(err) {
    console.error(`Error To read Data Base JSON, ${err}`);
  }
}; 