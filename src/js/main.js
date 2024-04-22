//import { readFile } from "fs/promises"; //Get Of System File 
import { bubbleSort } from "../algorithm/algorithms.js";
import { CityDestination, TravelLodging, TravelTransport } from "../poo/patternsDesign.js";
import { displayHome } from "./pages/home.js";
import { tripDisplay } from "./pages/trip.js";

/* const displayTravel =document.getElementById("displayTravel").style.display = "block"; */
const navMobile = document.querySelector("#navMobile"); 
const displayTravel = document.querySelector("#displayTravel"); 
const btnMenu = document.querySelectorAll("menu__list--nav");
const btnSearch = document.querySelector("#heroBtn"); 
const inputKey = document.querySelector("#idSearchInput");
const btnBackDisplay = document.getElementById("btnBackDisplay");
const main = document.querySelector("#idMainDisplay"); 
const displayWrapper = document.querySelector("#displayWrapper"); 
const displayMobile = document.querySelector("#displayMobile");
const sections = document.querySelector("#sectionsDisplay"); 
const navMenu = document.querySelector("#idNavigation"); 
const btnHome = document.querySelector("#menuHome"); 
const btnTrip = document.querySelector("#menuTrip"); 
const btnTravel = document.querySelector("#menuTravel"); 
const btnLike = document.querySelector("#menuLike"); 
const btnSettings = document.querySelector("#menuSettings"); 
/* const mainDisplayMobile = document.querySelector("#displayMainMobile"); */

//*? === Btn Search Display === */
document.addEventListener("DOMContentLoaded", () => {
  btnSearch.addEventListener("click", async (e) => {
   e.preventDefault();
   // - Call Input Value -
   const keyword = inputKey.value.trim();
   console.log(keyword); 

   if (navMobile && !navMobile.classList.contains("none")) {
     displayTravel.classList.remove("none"); 
     displayTravel.classList.add("display"); 
     navMobile.classList.add("none"); 
   }else {
     displayTravel.classList.add("none"); 
     displayTravel.classList.remove("display"); 
     navMobile.classList.remove("none"); 
   }; 

   await tripDestinationAndFlight(keyword); 
  }); 
}); 


//*? === Back Btn */
document.addEventListener("DOMContentLoaded", () => {
  btnBackDisplay.addEventListener("click", async (e) => {
    e.preventDefault(); 
     if(displayTravel.classList.contains("display")) {
       navMobile.classList.remove("none"); 
       navMobile.classList.add("display"); 
       displayTravel.classList.add("none"); 
       displayTravel.classList.remove("display"); 
      } else {
        displayTravel.classList.add("display"); 
        navMobile.classList.remove("none"); 
        navMobile.classList.add("none"); 
     }
   });
}); 


//*? === Function Call all Data Travel - Search - === */
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
      /* const searchKeyword = binarySearch(dataSorted, keywords);
      console.log(searchKeyword);  */
      
      let matchTravel = null; 
      let normalizedKeywords = keywords.toLowerCase().trim(); 
      matchTravel = dataSorted.find(item => {
        const normalizedDestination = item.Destination.toLowerCase().trim();
        return normalizedDestination === normalizedKeywords;
      });
      

      if(matchTravel) {

        // - Object Pattern Design -
        const cityDestinationData = {
          Destination: matchTravel.Destination,
          TravelerName: matchTravel["Traveler name"],
          StartDate: matchTravel["Start date"],
          EndDate: matchTravel["End date"],
          Duration: matchTravel["Duration (days)"],
        }; 

        const lodgingData = {
          Destination: matchTravel.Destination,
          AccommodationType: matchTravel["Accommodation type"],
          AccommodationCost: matchTravel["Accommodation cost"],
        }; 

        const TransportData = {
          Destination: matchTravel.Destination,
          TransportationType: matchTravel["Transportation type"],
          TransportationCost: matchTravel["Transportation cost"],
        }; 

        // - Patterns Designs - 
        const destination = new CityDestination(cityDestinationData);
        const lodging = new TravelLodging(lodgingData); 
        const transport = new TravelTransport(TransportData);
        
        const detailsDestination = destination.getDestinyDetail();
        const detailsLodging = lodging.getLodgingDetails();
        const detailsTransport = transport.getTransportDetails();
        
        const combinedDetails = `
        ${detailsDestination}
        ${detailsLodging}
        ${detailsTransport}
        `;
        
        const display = document.createElement("div");
        const btnPay = document.createElement("button"); 
        btnPay.className = "btn__pay"; 
        btnPay.textContent = "start to adventure"
        display.innerHTML = ""; 
        display.className = "display__data"; 
        display.innerHTML = combinedDetails; 
        displayWrapper.append(display, btnPay);
        /* displayWrapper.insertBefore(btnPay, displayWrapper.firstChild); */
      } else {
        displayWrapper.innerHTML = "No matching data found.";
        displayWrapper.classList.remove("none");
      };

     /*  if (navMobile && !navMobile.classList.contains("none")) {
        navMobile.classList.add("none"); 
        displayTravel.classList.remove("none"); 
        displayTravel.classList.add("display"); 
      }else {
        displayTravel.classList.add("none"); 
        navMobile.classList.remove("none"); 
        displayTravel.classList.remove("display"); 
      };  */

    } else {
      throw new Error(`Error to Get Data, ${response.status}`); 
    }
   
  }catch(err) {
    console.error("Error to Read Data Json", err);
  }
};


//*? === Principal HomePage === */
/* const homePageContent = displayHome(); 
displayMobile.appendChild(homePageContent);  */

//*? ==== Changes Section & LazyLoading ==== */
const changesSection = (sectionId) => {
  main.forEach(page => {
    page.classList.remove("active"); 
  })
  sections.classList.add("active"); 

  lazyLoading(sectionId); 
}; 


const lazyLoading = (idSection) => {
  try {
    if(sections.dataset.loaded !== True) {
       sections.dataset.loaded ="True"; 
    } else {
      throw new Error("To load Sections");  
    }
  }catch(err) {
    console.error(`Error to get and Load your Page ${err}`); 
  }
  // - Add Display -
}; 


//** === ===== Functions Get Section & Loaded ===== === */
const sectionsLoaders = {
  "home": { loader: displayHome, active: true },
  "trip": { loader: tripDisplay, active: false },
};


//*? ==== Btn Menu Bar && Display Content === (Remember: "escalable y fácil de mantener) ==== */
document.addEventListener('DOMContentLoaded', () => { 
  const loading = document.createElement("span"); 
  loading.className = "loading__text"; 
  loading.textContent = "loading..."; 
  let currentPageContent = null; 
  let currentPrincipalPage = "home"; 

  const sectionPrincipalLoaded = (sectionId) => {
    displayMobile.innerHTML = ""; 
    displayMobile.appendChild(loading); 
    // Obtener el ID de la sección asociada al botón (navBar)
    const sectionsDataLoaded = e.target.getAttribute("data-section"); 
    // Obtener la función de carga de contenido para la sección
    const sectionLoader = sectionsLoaders[sectionsDataLoaded];  

    if(sectionLoader) {
      displayMobile.innerHTML = "";
      const content = sectionLoader.loader();
      displayMobile.innerHTML = "";   
      displayMobile.appendChild(content); 
      currentPageContent = content; 
      currentPrincipalPage = sectionId; 
    }
    // Remover la clase "active" de todos los botones del menú
    btnMenu.forEach(item => {
      item.classList.remove("active"); 
    }); 

    const activeBtn = document.querySelector(`#menu${sectionId.charAt[0].toUpperCase() + sectionId.slice(1)}`); 

    if(activeBtn) {
      activeBtn.classList.add("active"); 
    } else {
      console.error("section Loaded Error to Update."); 
    }

  }
  
  btnMenu.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); 
      // Obtener el ID de la sección asociada al botón (navBar)
      const sectionsDataId = e.target.getAttribute("data-section"); 
      if(sectionsDataId !== currentPrincipalPage) {
        sectionPrincipalLoaded(sectionsDataId); 
      } else {
        console.error("Section Page Error to Loaded.")
      } 
     });
   });

   sectionPrincipalLoaded(currentPrincipalPage); 
}); 