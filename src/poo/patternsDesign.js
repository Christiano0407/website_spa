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
    this.destinationData = typeof destinationData === "object" ? destinationData : {};
    console.log(this.destinationData); 
    this.destinationData = Object.fromEntries(
      Object.entries(this.destinationData).map(([key, value]) => {
        const trimmedValue = typeof value === 'string' ? value.trim() : value;
        return [key, trimmedValue];
      })
    );
  }; 

  getDestinyDetail() {
    return `
      <div class="destination__data">
        <h2 class="destination__data--title >${this.destinationData.Destination}</h2>
        <p class="destination__data--traveler >Traveler: ${this.destinationData.TravelerName}</p>
        <p class="destination__data--start >Start Date: ${this.destinationData.StartDate}</p>
        <p class="destination__data--end >End Date: ${this.destinationData.EndDate}</p>
        <p class="destination__data--time >Duration: ${this.destinationData.Duration} days</p>
      </div>
    `;  
  } 
};    


export class TravelLodging extends Travel {
  constructor(dataTravel) {
    super(dataTravel); 
    this.dataTravel = typeof dataTravel === "object" ? dataTravel : {}; 
    console.log(this.dataTravel); 
    this.dataTravel = Object.fromEntries(
      Object.entries(this.dataTravel).map(([key, value]) => {
        const trimmedValue = typeof value === 'string' ? value.trim() : value;
        return [key, trimmedValue];
      })
    );
  }; 
  
  getLodgingDetails() {
    return `
      <div class="travel__destiny">
        <h2 travel__destiny--destiny >Destination:${this.dataTravel.Destination}</h2>
        <p travel__destiny--type >AccommodationType:${this.dataTravel.AccommodationType}</p>
        <p travel__destiny--cost >AccommodationCost:${this.dataTravel.AccommodationCost}</p>
      </div>
    `; 
  }
}; 


export class TravelTransport extends Travel {
  constructor(dataTravel) {
    super(dataTravel); 
    this.dataTravel = typeof dataTravel === "object" ? dataTravel : {}; 
    console.log(this.dataTravel); 
    this.dataTravel = Object.fromEntries(
      Object.entries(this.dataTravel).map(([key, value]) => {
        const trimmedValues = typeof value === 'string' ? value.trim() : value;
        return [key, trimmedValues];
      })
    );
  }; 

  getTransportDetails() {
    return ` 
      <div class="travel__transport">
        <h2 travel__transport--destiny >Destination: ${this.dataTravel.Destination}</h2>
        <p travel__transport--type >TransportationType: ${this.dataTravel.TransportationType}</p>
        <p travel__transport--cost >TransportationCost: ${this.dataTravel.TransportationCost}</p>
      </div>
    `; 
  }
}; 