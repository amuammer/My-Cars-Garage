const table = document.getElementById("carsTable");

function createTableHeader () {
  const tableHeader = document.createElement("tr");
  const tdCarModel = document.createElement("td");
  tdCarModel.innerText = "Car Model";
  tableHeader.appendChild(tdCarModel);
  const tdModelYear = document.createElement("td");
  tdModelYear.innerText = "Model Year";
  tableHeader.appendChild(tdModelYear);
  const tdPrice = document.createElement("td");
  tdPrice.innerText = "Price";
  tableHeader.appendChild(tdPrice);
  const tdCarManufacturer = document.createElement("td");
  tdCarManufacturer.innerText = "Manufacturer";
  tableHeader.appendChild(tdCarManufacturer);
  const tdCarDelete = document.createElement("td");
  tdCarDelete.innerText = "Delete";
  tableHeader.appendChild(tdCarDelete);
  return tableHeader;
}

function loadCarsToTheTable(){
  for (var i = 0; i < cars.length; i++) {  // eslint-disable-line
    const {model, year, manufacturer, price, index } = cars[i]; // eslint-disable-line
    console.log(model);
    const trCar = document.createElement("tr");
    const tdCarModel = document.createElement("td");
    tdCarModel.innerText = model;
    trCar.appendChild(tdCarModel);
    const tdModelYear = document.createElement("td");
    tdModelYear.innerText = year;
    trCar.appendChild(tdModelYear);
    const tdPrice = document.createElement("td");
    tdPrice.innerText = price;
    trCar.appendChild(tdPrice);
    const tdCarManufacturer = document.createElement("td");
    tdCarManufacturer.innerText = manufacturer;
    trCar.appendChild(tdCarManufacturer);
    const tdCarDelete = document.createElement("td");
    tdCarDelete.innerText = "X";
    tdCarDelete["data-index"] = index;
    tdCarDelete.addEventListener("click", function () {
      cars[index].delete();  // eslint-disable-line
      renderCarsTable();
    });
    trCar.appendChild(tdCarDelete);
    // end
    table.appendChild(trCar);
  }
}

function renderCarsTable () {
  console.log("renderTable");
  table.innerHTML = "";
  Car.load();  // eslint-disable-line
  console.log("loadedCars", cars);  // eslint-disable-line
  const tableHeader = createTableHeader();
  table.appendChild(tableHeader);
  loadCarsToTheTable();
  const totalPricesRow = document.createElement("tr");
  const tdTotalText = document.createElement("td");
  tdTotalText.innerText = "Total";
  totalPricesRow.appendChild(tdTotalText);
  const tdTotalValue = document.createElement("td");
  tdTotalValue.classList.add("total");
  tdTotalValue.innerText = Car.countPrices(); // eslint-disable-line
  totalPricesRow.appendChild(tdTotalValue);
  table.appendChild(totalPricesRow);


}

renderCarsTable();
