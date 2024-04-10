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


export function CityDestination(destinationData) {
  const trimmedData = []; 
  for (const key in destinationData) {
    trimmedData[key] = destinationData[key].trim(); 
  }
  return  {
    getDestinyDetail: function() {
      return `
        <div class="destination__data">
          <h2>${this.destinationData.Destination}</h2>
          <p>Traveler: ${trimmedData.TravelerName}</p>
          <p>Start Date: ${trimmedData.StartDate}</p>
          <p>End Date: ${trimmedData.EndDate}</p>
          <p>Duration: ${trimmedData.Duration} days</p>
        </div>
      `;  
    } 
  }
};    


export function TravelLodging(dataTravel) {
  const trimmed = []; 
  for(const keyword in dataTravel) {
    trimmed[keyword] = dataTravel[keyword].trim(); 
  }
  return {
    getLodgingDetails: function() {
      return `
        <div class="travel__destiny">
          <h2>${this.dataTravel.Destination}</h2>
          <p>${dataTravel.AccommodationType}</p>
          <p>${dataTravel.AccommodationCost}</p>
        </div>
      `; 
    }
  }
}; 


export function TravelTransport(dataTransport) {
  const trimmedData = []; 
  for(const keyword in dataTransport) {
    trimmedData[keyword] = dataTransport[keyword].trim(); 
  }
  return  {
    getTransportDetails: function() {
      return ` 
      <div class="travel__destiny">
        <h2>${this.dataTravel.Destination}</h2>
        <p>${dataTransport.TransportationType}</p>
        <p>${dataTransport.TransportationCost}</p>
      </div>
      `; 
    }
  }
}; 