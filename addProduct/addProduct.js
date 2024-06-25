import { fetchNewProduct } from "../utils/fetch.js";

const form = document.getElementById("form");
const burgerBtn = document.getElementById("burger-button");
const nav = document.querySelector("nav");

const inputName = document.getElementById("name");
const inputPrice = document.getElementById("price");
const inputImageURL = document.getElementById("image-url");
const inputDescription = document.getElementById("description");
const inputLocation = document.getElementById("location");
const addBtn = document.getElementById("add-btn");

//==================================

burgerBtn.addEventListener("click", () => nav.classList.toggle("visible"));

addBtn.addEventListener("click", () => {
  const newProduct = {
    name: inputName.value,
    price: inputPrice.value,
    imageURL: inputImageURL.value,
    description: inputDescription.value,
    location: inputLocation.value,
  };

  const previousMessages = form.querySelectorAll("h5");
  previousMessages.forEach((message) => message.remove());

  if (
    inputName.value.length < 3 ||
    inputPrice.value.length < 1 ||
    inputImageURL.value.length < 3 ||
    inputDescription.value.length < 3 ||
    inputLocation.value.length < 3
  ) {
    const productFailed = document.createElement("h5");
    productFailed.textContent = "Product input is too short";
    productFailed.setAttribute("class", "text-red");
    form.append(productFailed);
    return;
  }

  fetchNewProduct(newProduct);

  const productCompleted = document.createElement("h5");
  productCompleted.textContent =
    "Product is added successfully. Page will restart in a few seconds";
  productCompleted.setAttribute("class", "text-green");
  form.append(productCompleted);

  inputName.value = "";
  inputPrice.value = "";
  inputImageURL.value = "";
  inputDescription.value = "";
  inputLocation.value = "";

  setTimeout(() => {
    window.location.href = "./addProduct.html";
  }, 3000);
});
