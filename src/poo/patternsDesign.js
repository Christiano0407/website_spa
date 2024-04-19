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
    this.dataHome = {}; 

    for (const key in dataHome) {
      if(Object.hasOwnProperty.call(dataHome, key)) {
        const value = dataHome[key]; 
        const camelCaseKey = key.replace(/\s([a-z])/g, (_, followingLetter) => followingLetter.toUpperCase()); // - Convert key to camelCase and Exp Reg -
        this.dataHome[camelCaseKey] = typeof value === "string" ? value.trim() : value; 
      }
    }
    //this.dataHome = typeof dataHome === "object" ? dataHome : {}; 
    /* this.dataHome = Object.fromEntries(
      Object.entries(dataHome).map(({key, value}) => {
        if(key) {
          const valueTrim = typeof value === "string" ? value.trim() : value; 
          const camelCaseKey = key.replace(/\s([a-z])/g, (_, followingLetter) => followingLetter.toUpperCase());
          return [camelCaseKey, valueTrim];
        }
        return null; 
      }).filter(element => element !== null)
    ) */
  }; 
  
  getHomeDetails() {
    const imgSrc = this.dataHome.images && this.dataHome.images.image ? this.dataHome.images.image : ''; 
    return `
      <div id="homeCard" class="home__card">
         <figure class="home__card--figure">
            <img class="home__card--img" alt="" src=${imgSrc}>
         </figure>
         <div class="home__card--text">
            <h2 class="title__destiny">${this.dataHome.Destination}</h2>
            <div class="home__card--pay">
              <p class="title__transport">Lodging Trip: ${this.dataHome.transportationType}</p>
              <span class="trip__pay">Lodging Cost: $${this.dataHome.transportationCost}</span>
              <button class="tripBtn__pay">Pay</button>
            </div>
         </div>
      </div>
    `; 
  }

}; 


export class TripPage extends Home {
  constructor(dataTrip) {
    super(dataTrip); 
    this.dataTrip = {}; 

    for (const key in dataTrip) {
      if(Object.hasOwnProperty.call(dataTrip, key)) {
        const value = dataTrip[key]; 
        const camelCaseKey = key.replace(/\s([a-z])/g, (_, followingLetter) => followingLetter.toUpperCase()); // - Convert key to camelCase and Exp Reg -
        this.dataTrip[camelCaseKey] = typeof value === "string" ? value.trim() : value; 
      }
    }
  }; 

  getHomeDetails() {
    const imgSrc = this.dataTrip.images && this.dataTrip.images.image ? this.dataTrip.images.image : ''; 
    return `
      <div id="tripCard" class="trip__card">
         <figure class="trip__card--figure">
            <img class="trip__card--img" alt="" src=${imgSrc}>
         </figure>
         <div class="trip__card--text">
            <h2 class="title__tripDestiny">${this.dataTrip.Destination}</h2>
            <div class="trip__card--cost">
              <div class="trip__card__date">
              <span class="tripDate__start">Date ${this.dataTrip.startDate}</span>
              <span class="tripDate__end">End:${this.dataTrip.endDate}</span>
              </div>
              <p class=""> ${this.dataTrip.accommodationType}</p>
              <p class=""> ${this.dataTrip.accommodationCost}</p>
            </div>
            <div class="trip__card--pay">
              <p class="title__tripTransport">Lodging Trip: ${this.dataTrip.transportationType}</p>
              <span class="trip__payment">Lodging Cost: $${this.dataTrip.transportationCost}</span>
              <button class="tripBtn__pay">Pay</button>
            </div>
         </div>
      </div>
    `; 
  }

}; 