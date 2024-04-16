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


class Home {
  constructor(dataHome) {
    this.dataHome = dataHome; 
  }; 

  getHomeDetails() {
   throw new Error("Error! Error to Get Data Information Home");  
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
        <h2 class="destination__data--title"> Destiny: ${this.destinationData.Destination}</h2>
        <p class="destination__data--traveler"> Traveler: ${this.destinationData.TravelerName}</p>
        <p class="destination__data--start"> Start Date: ${this.destinationData.StartDate}</p>
        <p class="destination__data--end"> End Date: ${this.destinationData.EndDate}</p>
        <p class="destination__data--time"> Duration: ${this.destinationData.Duration} days</p>
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
        <h2 class="travel__destiny--destiny"> Destination:${this.dataTravel.Destination}</h2>
        <p class="travel__destiny--type"> AccommodationType:${this.dataTravel.AccommodationType}</p>
        <p "travel__destiny--cost"> AccommodationCost:${this.dataTravel.AccommodationCost}</p>
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
        <h2 class="travel__transport--destiny"> Destination: ${this.dataTravel.Destination}</h2>
        <p class="travel__transport--type"> TransportationType: ${this.dataTravel.TransportationType}</p>
        <p class="travel__transport--cost"> TransportationCost: ${this.dataTravel.TransportationCost}</p>
      </div>
    `; 
  }
}; 


export class HomePageTravel extends Home {
  constructor(dataHome) {
    super(dataHome); 
    //this.dataHome = typeof dataHome === "object" ? dataHome : {}; 
    this.dataHome = Object.fromEntries(
      Object.entries(dataHome).map(({key, value}) => {
        if(key) {
          const valueTrim = typeof value === "string" ? value.trim() : value; 
          const camelCaseKey = key.replace(/\s([a-z])/g, (_, followingLetter) => followingLetter.toUpperCase()); // - Convert key to camelCase and Exp Reg -
          return [camelCaseKey, valueTrim];
        }
        return null; 
        //return [key, valueTrim]; 
      }).filter(element => element !== null) // Filtrar las entradas que sean null
    )
  }; 
  
  getHomeDetails() {
    const imgSrc = this.dataHome.images && this.dataHome.images.image ? this.dataHome.images.image : ''; 
    return `
      <div id="homeCard" class="home__card">
         <figure class="home__card--figure">
            <img class="home__card--img" alt="" src=${imgSrc}>
         </figure>
         <div class="home__card--text">
            <h2 class="title__destiny"> destination: ${this.dataHome.Destination}</h2>
            <div class="home__card--pay">
              <p class="title__transport"> transportationType:${this.dataHome.transportationType}</p>
              <span class="trip__pay">$ transportationCost: ${this.dataHome.transportationCost}</span>
            </div>
         </div>
      </div>
    `; 
  }

}; 