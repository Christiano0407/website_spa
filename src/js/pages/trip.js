import { mergeSort } from "../../algorithm/algorithms";
import { TripPage } from "../../poo/patternsDesign";

const displayMobile = document.querySelector("#displayMobile");
const mainDisplayMobile = document.querySelector("#displayMainMobile"); 
const plusMobile = document.querySelector("#displayMobilePlus"); 
const displayTrip = document.querySelector("#sectionsDisplay"); 


export const tripDisplay = async () => {
    try {
      const response = await fetch("/src/data/data.json"); 
      if (response.ok) {
        const data = await response.json(); 
     
        const dataStructure = Array.isArray(data.data) ? [...data.data] : [];
        console.log("DsTR:", dataStructure);
        // - Used Algorithm MergeSort -
        const dataSorted = mergeSort(dataStructure, 0, dataStructure.length - 1); 
        console.log("Data Trip Sorted", dataSorted);

        dataSorted.forEach( item => {
          const tripPageData = {
            destination: item.destination, 
            startDate: item["Start date"], 
            endDate: item["end date"],
            accomodationType: item["Accommodation type"], 
            accomodationCost: item["Accommodation cost"],
            transportationType: item["Transportation type"],
            transportationCost: item["Transportation Cost"],
            images: item.images,
          }; 

          const trip = new TripPage(tripPageData); 
          const detailsTripPage = trip.getHomeDetails(); 
          const detailsTrip = `${detailsTripPage}`;  

          const tripCardDisplay = document.createElement("div"); 
          tripCardDisplay.className = "display__tripCards"; 
          tripCardDisplay.innerHTML = detailsTrip; 

          displayMobile.appendChild(tripCardDisplay); 
        }); 

        if(dataSorted.length === 0) {
          displayMobile.innerHTML = "Not Found Data Travel To the User"; 
          displayMobile.classList.remove("none"); 
        }

      } else {
        throw new Error("Failed to Get Data Trip"); 
      } 

    }catch(err) {
      console.error("Error fetching data:", err);
      displayMobile.innerHTML = "Error fetching data. Please try again later.";
      displayMobile.classList.remove("none"); 
    }
}; 