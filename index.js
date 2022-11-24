function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.wheels = 4;

Car.prototype.getMake = function () {
  return this.make;
};

Car.prototype.getModel =  function () {
  return this.model;
};

// newKeyword is a function that performs the same functions that the new keyword does
function newKeyword(fn, args) {
  const newInstance = Object.create(null);
  Object.setPrototypeOf(newInstance, fn.prototype);
  const returnedValue = fn.apply(newInstance, args);
  return returnedValue || newInstance;
}

// a and b are same thing
const a = newKeyword(Car, ['maruti', '800', 2001]);
const b = new Car('Swift', 'Dzire', 2020);
console.log(a, b);
console.log(a.wheels, b.wheels);
console.log(a.getMake(), b.getMake());
console.log(a.getModel(), b.getModel());


