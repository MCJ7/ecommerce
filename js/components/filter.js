let filterfield = document.querySelector("#search");
let filterbutton = document.querySelector("#search-button");
const listSearch = document.querySelector("[data-search]");
let wordSearch = [];
filterfield.addEventListener("input", function(event) {
  // filterbutton.addEventListener("click",function(event) {
  //     event.preventDefault();
  // console.log(this.value)
  // let listSearch =  document.querySelector("[characterList]");
  let products = document.querySelectorAll(".card-ul");
  
  if (this.value.length > 0) {
    for (let i = 0; i < products.length; i++) {
      let product = products[i];

      let labelText = product.querySelector(".card-label").textContent;
      let thNew = document.createElement("th");
      thNew.textContent = labelText;
      thNew.classList.add("option");
      
      let line = document.createElement("tr");
      line.classList.add("optionsList");

      let id = product.querySelector(".card-id").textContent;
      let productName = product.querySelector(".card-product").textContent;

      if (wordSearch.length === 0) {
        localStorage.setItem("words", JSON.stringify(wordSearch));
        wordSearch.push(labelText);
      }

      let wordInstant = JSON.parse(localStorage.getItem("words"));
      let expression = new RegExp(this.value, "i");
      line.innerHTML = thNew.outerHTML;

      if (expression.test(labelText) && !wordInstant.includes(labelText)) {

        let aux = JSON.parse(localStorage.getItem("words"));
        aux.push(labelText);
        localStorage.setItem("words", JSON.stringify(aux));
        listSearch.appendChild(line);
        console.log(JSON.parse(localStorage.getItem("words")));
        line.addEventListener("click", () => {
          window.location.href = `/screens/productView.html?product=${productName}&id=${id}`;
        });
      } else {
        //  listSearch.remove(listSearch.firstChild)
      }
      //   if (!expression.test(label)) {
      //     trLabel.removeChild(thContent);
      // } else {

      //       trLabel.appendChild(thContent);
      // }
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      product.classList.remove("invisible");
    }
  }

  // })
});