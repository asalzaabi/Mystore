// // fetch("./products.json")
// //   .then(response => response.json())
// //   .then(data => displayproducts(data.products));
// // function createTable(records) {
// //   var table = document.createElement("table");
// //   table.setAttribute("border", 1);
// //   table.appendChild(createHeading(records[0]));
// //   for (let record of records) {
// //     table.appendChild(createRow(record));
// //   }
// //   document.getElementById("container").appendChild(table);
// // }
// // function createHeading(record) {
// //   var row = document.createElement("tr");
// //   for (let prop in record) {
// //     var heading = document.createElement("th");
// //     heading.innerHTML = prop.toUpperCase();
// //     row.appendChild(heading);
// //   }
// //   return row;
// // }
// // function createRow(record) {
// //   var row = document.createElement("tr");
// //   for (let prop in record) {
// //     var column = document.createElement("td");
// //     column.innerHTML = record[prop];
// //     row.appendChild(column);
// //   }
// //   return row;
// // }

// function displayproducts(products) {
//   // take the vale of the products
//   for (let value of products) {
//     for (let index in value) {
//       //index of the vlaue
//       var div = document.createElement("div");
//       div.innerHTML = value[index];
//       document.getElementById("container").appendChild(div); // create child div
//     }
//   }
// }

// function displayproducts(records) {
//   var container = document.getElementById("container");
//   for (value of records) {
//     var outerdiv = document.createElement("div");
//     outerdiv.setAttribute("name", value.productId);
//     outerdiv.setAttribute("class", "gallery");
//     var img = document.createElement("img");
//     img.setAttribute("src", value.img);
//     img.setAttribute("width", "300px");
//     img.setAttribute("height", "300px");
//     outerdiv.appendChild(img);
//     var desctiption = document.createElement("div");
//     desctiption.setAttribute("class", "desc");
//     var price = document.createElement("price");
//     price.setAttribute

//     outerdiv.innerHTML =
//       value.name +
//       " " +
//       value.desctiption +
//       " " +
//       value.price +
//       " " +
//       value.link +
//       " " +
//       value.img;

//     container.appendChild(outerdiv);
//   }
// }

// Fetch data
var prodData;
var promise = fetch("./products.json");
promise
  .then(response => {
    return response.json();
  })
  .then(data => {
    prodData = data;
    displayProducts(data);
  });

function displayProducts(test) {
  // we will get the id of the leftcolumn
  var leftcolumn = document.getElementById("container");
  leftcolumn.className = "leftcolumn";
  for (let obj of test) {
    // div gallery has img tag only
    var gallery = document.createElement("div");
    gallery.className = "gallery";

    //create image and assign each URL to it
    var img = document.createElement("img");
    img.src = obj.imageSrc;
    // append this image to the parent div gallery
    gallery.appendChild(img);

    //div description has description only
    var description = document.createElement("div");
    description.className = "imgDesc";
    var pGallery = document.createElement("p");
    pGallery.className = "pt";
    description.appendChild(pGallery);

    gallery.appendChild(description);
    description.innerHTML = getDesc(obj);
    gallery.appendChild(description);
    var btn = document.createElement("BUTTON");
    btn.className = "btn";
    btn.innerHTML = "add to chart";
    btn.onclick = incrementCartAmount;
    //set arrtribute for button
    btn.setAttribute("type", "button");
    gallery.appendChild(btn);
    leftcolumn.appendChild(gallery);
  }
}
// get description
function getDesc(element) {
  return `<b> ${element.name}</b> <p class="pt">${element.price}</p>`;
}

//function for add to cart
function incrementCartAmount() {
  var currentCount = document.getElementById("cartItem");
  var currentCountParsed = parseInt(currentCount.textContent);
  var nextCount = counter(currentCountParsed);
  console.log(currentCount);
  currentCount.innerHTML = nextCount;
  window.localStorage.setItem("currentCartCount", nextCount);
}
function counter(currentCountParsed) {
  // var cartCount = cartCount.value;
  return currentCountParsed + 1;
}
//product search
function ProductsSearch() {
  var search_input = document.getElementById("search").value;
  document.getElementById("container").innerHTML = "";
  displayProducts(
    prodData.filter(value => {
      var lowerCaseProduct = value.name.toLocaleLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}
