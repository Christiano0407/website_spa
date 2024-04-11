//*? === ==== Patterns Design - (Create: Class or Prototype) - ==== === */
// - Define Pattern Design & Use Class Import: Main -
class Destination {
   constructor(destinationData) {
     this.destinationData = destinationData; 
   }; 

   getDestinyDetail() {
    throw new Error("Sorry! Method not identified."); 
   }; 
}; 


class Travel {
  constructor(dataTravel) {
   this.dataTravel = dataTravel; 
  }; 

  getLodgingDetails() {
    throw new Error("Sorry! Error to Get Data Lodging Travel"); 
  }; 

  getTransportDetails() {
    throw new Error("Sorry! Error to Get Data Transport Travel"); 
  };  
};


 export class CityDestination extends Destination {
  constructor(destinationData) {
    super(destinationData); 
    this.destinationData = Object.fromEntries(
      Object.entries(this.destinationData).map(([key, value]) => [key,value.trim()])
    ); 
  }; 
  getDestinyDetail() {
    return `
      <div class="destination__data">
        <h2>${this.destinationData.Destination}</h2>
        <p>Traveler: ${this.destinationData.TravelerName}</p>
        <p>Start Date: ${this.destinationData.StartDate}</p>
        <p>End Date: ${this.destinationData.EndDate}</p>
        <p>Duration: ${this.destinationData.Duration} days</p>
      </div>
    `;  
  } 
};    


export class TravelLodging extends Travel {
  constructor(dataTravel) {
    super(dataTravel); 
    this.dataTravel = Object.fromEntries(
      Object.entries(this.dataTravel).map(([key, value]) => [key,value.trim()])
    ); 
  }; 
  
  getLodgingDetails() {
    return `
      <div class="travel__destiny">
        <h2>${this.dataTravel.Destination}</h2>
        <p>${this.dataTravel.AccommodationType}</p>
        <p>${this.dataTravel.AccommodationCost}</p>
      </div>
    `; 
  }
}; 


export class TravelTransport extends Travel {
  constructor(dataTransport) {
    super(dataTransport); 
    this.dataTransport = Object.fromEntries(
      Object.entries(this.dataTransport).map(([key, value]) => [key, value.trim()])
    ); 
  }; 

  getTransportDetails() {
    return ` 
      <div class="travel__destiny">
        <h2>${this.dataTransport.Destination}</h2>
        <p>${this.dataTransport.TransportationType}</p>
        <p>${this.dataTransport.TransportationCost}</p>
      </div>
    `; 
  }
}; 