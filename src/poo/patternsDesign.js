//*? === ==== Patterns Design ==== === */
// - Define Pattern Design -
class AbstractFactory {
  createDestination(keyword){}; 
  createFlight(keyword){};
  createLodging(keyword){};
}; 

// - Implement Pattern -
export class ConcreteFactory extends AbstractFactory {
  createDestination(keyword) {}; 
  createFlight(keyword) {}; 
  createLodging(keyword) {};
}; 