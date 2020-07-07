function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function addCarSubmission(event) {
  event.preventDefault();
  const carModel = event.target.carModel.value;
  const modelYear = event.target.modelYear.value;
  const manufacturer = event.target.manufacturer.value;
  const price = getRndInteger(7000, 100000);
  new Car(carModel, modelYear, manufacturer, price); // eslint-disable-line
  renderCarsTable(); // eslint-disable-line
}

document.getElementById("addCartForm").addEventListener("submit", addCarSubmission);
