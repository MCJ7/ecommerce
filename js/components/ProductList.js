import profile from "../../db.json" assert { type: "json" };
// import showProductModule from "../components/showProduct.js";
const completeHtml = (label, product, img, price, description, id) => {
  const productContent = `<img src="${img}" alt="${label}" class="card-img">
                      <p class="card-label">${label}</p>
                      <p class="card-price">$${price}</p>
                      <p class="card-detail">${description}</p>`
  
  return productContent;
};

const productsinHTML = document.querySelector("[data-product]");

const createProduct = () => {
      const url = new URL(window.location);
      const product = url.searchParams.get("product");
      const id = url.searchParams.get("id");

  let prod = "";
  let prodSpanish = "";
  
    switch (product) {
      case "tshirts":
        prod = profile.tshirts;
        prodSpanish="Remeras";
        break;
      case "pants":
        prod = profile.pants;
        prodSpanish = "Pantalones";
        break;
      case "sneakers":
        prod = profile.sneakers;
        prodSpanish = "Zapatillas";
        break;
    }
  const title = document.querySelector(".title");
  title.textContent=`${prodSpanish}`
    let line = document.createElement("tr");
    line.classList.add("card-tr");

    let n = prod.length > 6 ? 6 : prod.length;
    for (let i = 0; i < n; i++) {
      let thContent = document.createElement("th");
      thContent.classList.add("card-th");
      thContent.addEventListener("click", () => {
        window.location.href = `/screens/productView.html?product=${product}&id=${prod[i].id}`;
      });
      thContent.innerHTML = completeHtml(
        prod[i].label,
        product,
        prod[i].img,
        prod[i].price,
        prod[i].description,
        prod[i].id
      );
      line.appendChild(thContent);
      productsinHTML.classList.add("card")
      productsinHTML.appendChild(line);
    }
  
};
createProduct();