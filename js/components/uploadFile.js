import { productServices } from "../../services/product-server.js";

const createProduct = ((id, product, label, img, price, description) => {
  const Content = `
                  <li class="card">
                    <ul class="card-ul">
                      <img src="${img}" alt="${label}" class="card-img" data-img>
                      <p class="card-label" data-label>${label}</p>
                      <p class="card-price" data-price>$${price}</p>
                      <p class="card-detail" data-description>$${description}</p>
                      <a href="/screens/productView.html/${product}/${id}" class="card-view-product">Ver producto</a>
                    </ul>
                  </li>`;
});
const form = document.querySelector("[data-form]");
const file = document.querySelector("#myFile");
let base64String = "";


file.addEventListener("change",(event) => {
let files = document.getElementById("myFile").files;
  if (files.length > 0) {
    getBase64(files[0]);
  }

})
function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    base64String=reader.result;
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // const img = base64String;
  const img = document.querySelector("[data-img]").value;
  const product = document.querySelector("[data-product]").value;
  const label = document.querySelector("[data-label]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;
  try {
    await productServices.productCreate(
      product,
      label,
      img,
      price,
      description
    );
    // window.location.href = "../screens/message.html?message=success";
  } catch (error) {
    // window.location.href = "../screens/message.html?message=error";
    console.log(error)
  }
});
