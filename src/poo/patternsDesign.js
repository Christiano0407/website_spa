//*? === ==== Patterns Design ==== === */
// - Define Pattern Design -
const Destination = {
   getDestinyDetails: function() { }
}; 

const Travel = {
  getLodgingDetails: function () {},
  getTransportDetails: function() {} 
};


const CityDestination = Object.create(Destination);  
CityDestination.constructor = CityDestination; 

const TravelLodging = Object.create(Travel); 
TravelLodging.constructor = TravelLodging; 

const TravelTransport = Object.create(Travel);
TravelTransport.constructor = TravelTransport; 


export function cityDestination(destinationData) {
  const trimmedData = []; 
  for (const key in destinationData) {
    trimmedData[key] = destinationData[key].trim(); 
  }
  return  {
    getDestinyDetail: function() {
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
  }
};    


export function travelLodging(dataTravel) {
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
}; 