//import { productServices } from "../../services/product-server.js";
import profile from "../../db.json" assert { type: "json" };

// console.log(profile.pants);
const completeHtml = (label, product, img, price, description, id) => {
  // const line = document.createElement("li");
  const productContent = `<img src="${img}" alt="${label}" class="card-img">
                      <p class="card-label">${label}</p>
                      <p class="card-price">$${price}</p>
                      <p class="card-detail">${description}</p>
                      <p hidden class="card-id">${id}</p>
                      <p hidden class="card-product">${product}</p>`;
  return productContent;
        };
        
const productsinHTML = document.querySelector("[data-product]");

const createProduct = () => {
  let prodType = ["tshirts", "pants", "sneakers"];

  let prod = "";
  let prodSpanish="";
  for (let j = 0; j < prodType.length; j++) {
    switch (j) {
      case 0:
        prod = profile.tshirts;
        prodSpanish="Remeras"
        break;
      case 1:
        prod = profile.pants;
        prodSpanish="Pantalones"
        break;
      case 2:
        prod = profile.sneakers;
        prodSpanish="Zapatillas"
        break;
    }

    let bodyPersonalized = document.createElement("section");
    bodyPersonalized.classList.add("card");
    const productTitle = `
    <div class="card-text">
    <h3 class="card-subtitle">${prodSpanish}</h3>
    <a class="view-products"  href="ProductsByType.html?product=${prodType[j]}">Ver todo <i class="fa-solid fa-arrow-right"></i></a>
    </div>`;
    bodyPersonalized.innerHTML = productTitle;
    let line = document.createElement("tr");
    line.classList.add("card-li");

    let n = prod.length > 6 ? 6 : prod.length;
    for (let i = 0; i < n; i++) {
      let thContent = document.createElement("th");
      thContent.classList.add("card-ul");

      thContent.innerHTML = completeHtml(
        prod[i].label,
        prodType[j],
        prod[i].img,
        prod[i].price,
        prod[i].description,
        prod[i].id
      );
      line.appendChild(thContent);


      bodyPersonalized.appendChild(line);
      productsinHTML.appendChild(bodyPersonalized);
    }
  }
};
createProduct();
let cards = document.querySelectorAll(".card-ul")
for (let i = 0; i < cards.length; i++) {
cards[i].addEventListener("click", () => {
  
    let id = document.querySelector(".card-id");
    let product = document.querySelector(".card-product");
    console.log(id.textContent)
    console.log(product.textContent)
  window.location.href=
  `/screens/productView.html?product=${product.textContent}&id=${id.textContent}` 
});  
}
const getProductInfo = async () => {

  const img = document.querySelector(".card-img");
  const label = document.querySelector(".card-label");
  const price = document.querySelector(".card-price");
  const detail = document.querySelector(".card-detail");
  try {
    const productSelect = await productServices.productDetail(product, id);
    img.value = productSelect.img;
    label.value = productSelect.label;
    price.value = productSelect.price;
    detail.value = productSelect.description;
  } catch (error) {
    window.location.href = "/screens/error.html";
  }
};
export const showProductModule = {
  completeHtml
};