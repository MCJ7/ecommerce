import { productServices } from "../services/product-server.js";
import profile from "../../db.json" assert { type: "json" };

const productsinHTML = document.querySelector("[data-product]");
const getProductInfo = async () => {
  const title = document.querySelector(".card-title");
  const img = document.querySelector(".card-img");
  const label = document.querySelector(".card-label");
  const price = document.querySelector(".card-price");
  const detail = document.querySelector(".card-detail");
  const url = new URL(window.location);
  const product = url.searchParams.get("product");
  const id = url.searchParams.get("id");
  console.log(id);
  console.log(product);
  try {
    const productSelect = await productServices.productDetail(product, id);
    
    title.textContent = productSelect.label;
    productsinHTML.appendChild(title);
    label.textContent = product;
    productsinHTML.appendChild(label);
    img.src = productSelect.img;
    productsinHTML.appendChild(img);

    price.textContent = "$"+productSelect.price;
    productsinHTML.appendChild(price);
    detail.textContent = productSelect.description;
    productsinHTML.appendChild(detail);
  } catch (error) {
    // window.location.href = "../screens/message.html?message=error";
  }
  //const productSelect = await productServices.productDetail(product, id);
};

getProductInfo();
