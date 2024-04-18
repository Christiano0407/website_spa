//** === Home Nav Pages (Display) === */
import { bubbleSort } from "../../algorithm/algorithms.js";
import { HomePageTravel } from '../../poo/patternsDesign.js';


const displayMobile = document.querySelector("#displayMobile");
const mainDisplayMobile = document.querySelector("#displayMainMobile"); 
const plusMobile = document.querySelector("#displayMobilePlus"); 

/**  Si esta manipulación se realiza en un momento en el que el navegador está realizando el reflow o repaint de la página, puede causar problemas de rendimiento y visualización. -DOMContentLoaded o window.onload- */
export const displayHome = () => {
    document.addEventListener("DOMContentLoaded", async () => {
        try {
            const response = await fetch("/src/data/data.json"); 
            
            if(response.ok) {
                const data = await response.json(); 
                console.log("Data Base: ", data); 
                const toDataSorted = Array.isArray(data.data) ? [...data.data] : []; 
                const sortedData = toDataSorted.length > 0 ? bubbleSort(Array.isArray(data.data) ? [...data.data]: [], (a,b) => parseInt(a["trip_Id"]) > parseInt(b["trip_Id"])) : [];
                console.log("Sorted Data: ", sortedData);
    
                sortedData.forEach(item => {
                    const homePageData = {
                        Destination: item.Destination,
                        transportationType: item["Accommodation type"],
                        transportationCost: item["Accommodation cost"],
                        images: item.images,
                    };
    
                    const homeTravel = new HomePageTravel(homePageData); 
                    const detailsHomePage = homeTravel.getHomeDetails(); 
                    const detailsHome = `${detailsHomePage}`;  
    
                    const displayCards = document.createElement("div"); 
                    const displayCardsPlus = document.createElement("div"); 
                    
                    displayCards.className = "home__displayCard"; 
                    displayCardsPlus.className = "home__displayCardPlus"; 
                    displayCards.innerHTML = detailsHome;
                    displayCardsPlus.innerHTML = detailsHome;
                    
                    displayMobile.appendChild(displayCards); 
                    plusMobile.append(displayCardsPlus); 
                })
    
                if (sortedData.length === 0) {
                    displayMobile.innerHTML = "No data found.";
                    displayMobile.classList.remove("none");
    
                    plusMobile.innerHTML = "No data found.";
                    plusMobile.classList.remove("none");
                }
            } else {
                throw new Error("Failed to Fetch Data"); 
            }
        } catch(err) {
            console.error(`Error To read Data Base JSON, ${err}`);
            displayMobile.innerHTML = "An error occurred while displaying data.";
        }
    }); 
}; 