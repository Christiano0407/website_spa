//*? === ==== Patterns Design - (Create: Class or Prototype) - ==== === */
// - Define Pattern Design -
class Destination {
   constructor(destinationData) {
     this.destinationData = destinationData
   }

   getDestinyDetail() {
    throw new Error("Sorry! Method not identified.")
   }
}; 

/* const Travel = {
  getLodgingDetails: function () {},
  getTransportDetails: function() {} 
}; */

 export class CityDestination extends Destination {
  constructor(destinationData) {
    super(destinationData); 
    this.destinationData = Object.fromEntries(
      Object.entries(this.destinationData).map(([key, value]) => [key,value.trim()])
    )
  }; 
  getDestinyDetail() {
    return `
      <div class="destination__data">
        <h2>${trimmedData.Destination}</h2>
        <p>Traveler: ${trimmedData.TravelerName}</p>
        <p>Start Date: ${trimmedData.StartDate}</p>
        <p>End Date: ${trimmedData.EndDate}</p>
        <p>Duration: ${trimmedData.Duration} days</p>
      </div>
    `;  
  } 
};    


/* export function travelLodging(dataTravel) {
  const trimmedData = []; 
  for(const key in dataTravel) {
    trimmed[key] = dataTravel[key].trim(); 
  }
  return {
    getLodgingDetails: function() {
      return `
        <div class="travel__destiny">
          <h2>${trimmedData.Destination}</h2>
          <p>${trimmedData.AccommodationType}</p>
          <p>${trimmedData.AccommodationCost}</p>
        </div>
      `; 
    }
  }
}; 


export function travelTransport(dataTransport) {
  const trimmedData = []; 
  for(const key in dataTransport) {
    trimmedData[key] = dataTransport[key].trim(); 
  }
  return  {
    getTransportDetails: function() {
      return ` 
      <div class="travel__destiny">
        <h2>${trimmedData.Destination}</h2>
        <p>${trimmedData.TransportationType}</p>
        <p>${trimmedData.TransportationCost}</p>
      </div>
      `; 
    }
  }
};  */

//** ==== Use Class ==== */