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
    //when i reload the page the currentcart count will stay the same
    document.getElementById("Uname").innerHTML = localStorage.getItem(
      "username"
    );
    //when i reload the page the currentcart count will stay the same
    var currentCount = document.getElementById("cartItem");
    currentCount.innerHTML = localStorage.getItem("currentCartCount");
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
