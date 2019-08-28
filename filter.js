// product filter
// the query will be for the input filed
const searchBar = document.forms["search-products"].querySelector("input");
searchBar.addEventListener("keyup", function(e) {
  //to turn the whole string into lawercase
  const term = e.target.value.toLowerCase();
  const products = list.getElementsByTag("li");
  Array.form(products).forEach(function(product) {
    const title = product.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      product.style.display;
    }
  });
});
