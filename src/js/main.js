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
const homePageContent = displayHome(); 
displayMobile.appendChild(homePageContent); 

//*? ==== Changes Section & LazyLoading (System of Navigation between Sections) ==== */

//** === Functions Get Section & Loaded - (System of Navigation between Sections) - === */
const executeNavigation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Limpiar el contenido inicial
    displayMobile.innerHTML = ""; 
    // Mostrar la sección "home" al cargar la página
    /* const homePageContent = displayHome(); 
    displayMobile.appendChild(homePageContent); */ 
    // Asignar eventos de clic a los botones de navegación
    btnMenu.forEach(navLink => {
      navLink.addEventListener("click", () => {
       const sectionDataId = navLink.getAttribute("data-section"); 
       // Ocultar todas las secciones
       displayMobile.querySelectorAll(".section"),forEach(section => {
         section.classList.add("hidden"); 
         section.classList.remove("active"); 
       })
        // Muestra la sección correspondiente (con lazy loading si es necesario)
        let sectionShow = displayMobile.querySelector(`#${sectionDataId}`); 
        if(!sectionShow) {
         sectionShow = document.createElement("div"); 
         sectionShow.id = sectionDataId; 
         sectionShow.classList.add("section"); 
         sectionShow.classList.add("active"); 
         sectionShow.innerHTML = `Content of the Section ${sectionDataId}`; 
   
         if(sectionDataId === "home") {
           sectionShow.innerHTML = displayHome(); 
         } else if(sectionDataId === "trip") {
           sectionShow.innerHTML = tripDisplay(); 
         }
   
         displayMobile.appendChild(sectionShow);
        } else {
         sectionShow.classList.remove("hidden"); 
         sectionShow.classList.add("active");
        }
   
        // Resaltar Botón Active 
        navLink.forEach(link => {
          link.classList.remove("active"); 
        }); 
        navLink.classList.add("active"); 
   
      })
   }); 
  }); 
}; 

executeNavigation(); 