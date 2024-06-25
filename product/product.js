import { fetchProductById, deleteClothe } from "../utils/fetch.js";

const burgerBtn = document.getElementById("burger-button");
const nav = document.querySelector("nav");
const wrapper = document.getElementById("product-wrapper");
const name = document.getElementById("product-name");
const price = document.getElementById("product-price");
const location = document.getElementById("product-location");
const description = document.getElementById("product-description");
const image = document.getElementById("product-image");
const deleteBtn = document.getElementById("delete-btn");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const product = await fetchProductById(id);

name.textContent = product.name;
image.src = product.imageURL;
description.textContent = product.description;
price.textContent = `${product.price} €`;
location.textContent = product.location;

burgerBtn.addEventListener("click", () => nav.classList.toggle("visible"));
deleteBtn.addEventListener("click", () => {
  deleteClothe(id);

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
});

//=============Nepavyko išsiaiškinti kodėl neveikia=======================
// deleteBtn.addEventListener("click", () => {
//   deleteClothe(id);

//   setTimeout(() => {
//     wrapper.innerHTML = "";

//     const notifyDelete = document.createElement("h1");
//     price.textContent = "Product was deleted successfully";
//     wrapper.append(notifyDelete);

//     window.location.reload();
//   }, 1000);
// });
