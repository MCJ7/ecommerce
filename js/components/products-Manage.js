document.addEventListener("DOMContentLoaded", () => {
  const productsDataBase = [
    {
      id: 1,
      label: "Rayada",
      img: "/img/tshirt/geoffroy-danest-0fG6zACWGJY-unsplash.jpg",
      type: "tshirt",
      price: 150,
    },
    {
      id: 2,
      label: "Original",
      img: "/img/tshirt/alex-haigh-fEt6Wd4t4j0-unsplash.jpg",
      type: "tshirt",
      price: 150,
    },
    {
      id: 3,
      label: "Tom",
      img: "/img/tshirt/faith-yarn-Wr0TpKqf26s-unsplash.jpg",
      type: "tshirt",
      price: 150,
    },
    {
      id: 4,
      label: "Sigmund",
      img: "/img/tshirt/sigmund-wngWQPuZIOc-unsplash.jpg",
      type: "tshirt",
      price: 150,
    },
    {
      id: 5,
      label: "Zevent",
      img: "/img/tshirt/zoe-ywgxkUJgSF8-unsplash.jpg",
      type: "tshirt",
      price: 150,
    },
    {
      id: 6,
      label: "Naranja",
      img: "/img/sneakers/alex-hudson-J-VOzId2M_g-unsplash.jpg",
      type: "sneaker",
      price: 150,
    },
    {
      id: 7,
      label: "Blanco",
      img: "/img/sneakers/alin-surdu-em89au_3qx8-unsplash.jpg",
      type: "sneaker",
      price: 150,
    },
    {
      id: 8,
      label: "Ojos",
      img: "/img/sneakers/ervan-m-wirawan-6r280_Z7Efc-unsplash.jpg",
      type: "sneaker",
      price: 150,
    },
    {
      id: 9,
      label: "Fluor",
      img: "/img/sneakers/grailify-BFRhz9A1uKU-unsplash.jpg",
      type: "sneaker",
      price: 150,
    },
    {
      id: 10,
      label: "Rodilla",
      img: "/img/pants/alicia-petresc-BciCcl8tjVU-unsplash.jpg",
      type: "pant",
      price: 150,
    },
    {
      id: 11,
      label: "Varios",
      img: "/img/pants/bbiddac-M7m40TYfx1o-unsplash.jpg",
      type: "pant",
      price: 150,
    },
    {
      id: 12,
      label: "Marrón",
      img: "/img/pants/clem-onojeghuo-kg3N8vqvMd8-unsplash.jpg",
      type: "pant",
      price: 150,
    },
    {
      id: 13,
      label: "Classic",
      img: "/img/pants/eduardo-pastor-3oejsU5OQVk-unsplash.jpg",
      type: "pant",
      price: 150,
    },
    {
      id: 14,
      label: "Desgastado",
      img: "/img/pants/engin-akyurt-ahs1R32GG9Y-unsplash.jpg",
      type: "pant",
      price: 150,
    },
    {
      id: 15,
      label: "Marrón",
      img: "/img/pants/katarina-sikuljak-R3KsTl9SG-U-unsplash.jpg",
      type: "pant",
      price: 150,
    },
  ];
  let cart = [];
  const divisa = "$";
  const DOMitems = document.querySelector("#items");
  const DOMcart = document.querySelector("#cart");
  const DOMTotal = document.querySelector("#total");
  const DOMbuttonEmpty = document.querySelector("#button-empty");
  const myLocalStorage = window.localStorage;

  function renderProduct() {
    productsDataBase.forEach((info) => {
      // Strucure
      const myNodo = document.createElement("ul");
      myNodo.classList.add("card-ul");
      // Img
      const nodoImg = document.createElement("img");
      nodoImg.classList.add("card-img");
      nodoImg.setAttribute("src", info.img);
      // Name
      const nodoName = document.createElement("p");
      nodoName.classList.add("card-label");
      nodoName.textContent = info.label;
      // Price
      const nodoPrice = document.createElement("p");
      nodoPrice.classList.add("card-price");
      nodoPrice.textContent = `${info.price}${divisa}`;
      // Link view product
      const nodoLink = document.createElement("a");
      nodoLink.classList.add("card-view-product");
      nodoLink.textContent = "+";
      nodoLink.setAttribute("marcador", info.id);
      nodoLink.addEventListener("click", addProduct);
      // Insertamos falta type
      myNodo.appendChild(nodoImg);
      myNodo.appendChild(nodoName);
      myNodo.appendChild(nodoPrice);
      myNodo.appendChild(nodoLink);
      DOMitems.appendChild(myNodo);
    });
  }
  function addProduct(event) {
    cart.push(event.target.getAttribute("mark"));
    renderizarCart();

  }
  function renderizarCart() {
    DOMcart.textContent = "";
    const cartWithoutDuplicate = [...new Set(cart)];
    cartWithoutDuplicate.forEach((item) => {
      const myItem = productsDataBase.filter((itemsBaseDatos) => {
        return itemsBaseDatos.id === parseInt(item);
      });
      const numUnitItem = cart.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total;
      }, 0);
      const newNodo = document.createElement("li");
      // nodo.classList.add('');
      // newNodo.textContent = `${numUnitItem} x ${myItem[0].name} - ${myItem[0].price}${divisa}`;
      newNodo.textContent = `${numUnitItem} x ${myItem[0].name} - ${myItem[0].price}${divisa}`;

      const myButton = document.createElement("button");
      myButton.classList.add("fa-solid fa-circle-xmark");
      myButton.style.color = "red";
      myButton.dataset.item = item;
      myButton.addEventListener("click", deleteItemCart);
      newNodo.appendChild(myButton);
      DOMcart.appendChild(newNodo);
    });
    DOMTotal.textContent = calculateTotal();
  }
  function deleteItem(event) {
    const id = event.target.dataset.item;
    cart = cart.filter((cartId) => {
      return cartId !== id;
    });
    renderizarCart();
    saveCartLocalStorage();
  }
  function calculateTotal() {
    return cart.reduce((total, item) => {
        const myItem = productsDataBase.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        return total + myItem[0].price;
      }, 0).toFixed(2);
  }
  function emptyCart() {
    cart = [];
    renderizarCart();
    localStorage.clear();
  }
  function saveCartLocalStorage() { 
    myLocalStorage.setItem('cart', JSON.stringify(cart));
  }
  function fillCartLocalStorage() {
    if (myLocalStorage.getItem('cart') !== null) {
      cart = JSON.parse(myLocalStorage.getItem('cart'));
    }
  }

  DOMbuttonEmpty.addEventListener("click", emptyCart);

  fillCartLocalStorage();
  renderProduct();
  renderizarCart();
});;