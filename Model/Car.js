var cars = [];

function Car(model, year, manufacturer, price) {
  this.model = model;
  this.year = year;
  this.manufacturer = manufacturer;
  this.price = price;
  console.log("new car", this);
  this.index = cars.push(this) - 1;
  Car.save();
}

Car.prototype.delete = function () {
  cars.splice(this.index, 1);
  Car.save();
  // ill return
};

Car.save = function () {
  localStorage.setItem("cars", JSON.stringify(cars));
};

Car.load = function () {
  cars = [];
  const loadedCarsArray = JSON.parse(localStorage.getItem("cars")) || [];
  for (var i = 0; i < loadedCarsArray.length; i++) {
    const {model, year, manufacturer, price }  = loadedCarsArray[i];
    new Car(model, year, manufacturer, price);
  }
};

Car.countPrices = function () {
  var prices = 0;
  for (var i = 0; i < cars.length; i++) {
    prices += parseInt(cars[i].price);
  }
  return prices;
};
