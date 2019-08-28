fetch("./products.json")
  .then(response => response.json())
  .then(data => displayproducts(data.products));
function createTable(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}
function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}
function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}

function displayproducts(products) {
  // take the vale of the products
  for (let value of products) {
    for (let index in value) {
      //index of the vlaue
      var div = document.createElement("div");
      div.innerHTML = value[index];
      document.getElementById("container").appendChild(div); // create child div
    }
  }
}
