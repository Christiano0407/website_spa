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

function CityDestination(destinationData) {
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
