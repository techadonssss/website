document.getElementById("proceed-btn").addEventListener("click", function () {
  // Hide the landing page and show the main site
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("main-site").style.display = "block";
});

// Select all product elements
// Select all product elements
const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", function () {
    // Remove "expanded" class from any other product (if already expanded)
    document
      .querySelectorAll(".product.expanded")
      .forEach((expandedProduct) => {
        expandedProduct.classList.remove("expanded");
      });

    // Add "expanded" class to the clicked product
    this.classList.add("expanded");
  });
});

// Collapse when clicking outside of the expanded product
document.addEventListener("click", function (e) {
  if (!e.target.closest(".product")) {
    document
      .querySelectorAll(".product.expanded")
      .forEach((expandedProduct) => {
        expandedProduct.classList.remove("expanded");
      });
  }
});
