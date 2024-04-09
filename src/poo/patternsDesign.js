//*? === ==== Patterns Design ==== === */
// - Define Pattern Design -
class AbstractFactory {
  createDestination(keyword){}; 
  createFlight(keyword){};
  createLodging(keyword){};
}; 

// - Implement Pattern -
export class ConcreteFactory extends AbstractFactory {
  constructor(data) {
    super(); 
    this.data = data; 
  }
  createDestination(keyword) {
    return this.data.filter(item => item.Destination.toLowerCase().includes(keyword.toLowerCase())); 
  }; 
  createFlight(keyword) {}; 
  createLodging(keyword) {};
}; 