//example 1
let array = [1-5,10];
let [a,b] = array;
console.log(array);

//example 2
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model, year}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + ' ' +year;
  
    console.log( message);
  }

  //example 3
  const carOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  myCar(carOne)
  
  function myCar({ model, registration: { state } }) {
    const text = 'My ' + model + ' is registered in ' + state + '.';
  console.log(text);
  }