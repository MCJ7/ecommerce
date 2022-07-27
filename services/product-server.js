import profile from "../../db.json" assert { type: "json" };

// json-server --watch db.json
const productList = () =>
  fetch("http://localhost:3000/products").then((response) => response.json());

const productCreate = (products, label, img, price, description) => {
  return fetch(`http://localhost:3000/${products}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: uuid.v4(), label, img, price, description }),
  });
};
const productDelete = (products, id) => {
  return fetch(`http://localhost:3000/${products}/${id}`, {
    method: "DELETE",
  });
};
const productDetail = (products, id) => {
  return fetch(`http://localhost:3000/${products}/${id}`).then((response) =>
    response.json()
  );
};
const productUpdate = (products, label, img, price, id) => {
  return fetch(`http://localhost:3000/${products}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ label, img, price }),
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
export const productServices = {
  productList,
  productCreate,
  productDelete,
  productDetail,
  productUpdate,
};
