import { fetchProductCards, fetchAndBuildCards } from "./utils/fetch.js";

const cardHolder = document.getElementById("product-card-holder");
const burgerBtn = document.getElementById("burger-button");
const nav = document.querySelector("nav");
const lowToHighSortBtn = document.getElementById("low-high-sort-btn");
const highToLowSortBtn = document.getElementById("high-low-sort-btn");

//==================================

const buildAllCards = (data) => {
  cardHolder.innerHTML = "";

  data.forEach((d) => {
    const card = document.createElement("a");
    card.setAttribute("class", "card");
    card.href = `./product/product.html?id=${d.id}`;
    card.addEventListener("click", () => window.location.card.href);

    const textHolder = document.createElement("div");
    textHolder.setAttribute("class", "card-text-holder");

    const name = document.createElement("h3");
    name.textContent = d.name;

    const price = document.createElement("h2");
    price.textContent = `${d.price} €`;

    const image = document.createElement("img");
    image.src = d.imageURL;

    const description = document.createElement("h4");
    description.textContent = d.description;

    const location = document.createElement("h4");
    location.textContent = d.location;

    textHolder.append(name, description, location, price);
    card.append(image, textHolder);
    cardHolder.append(card);
  });
};

//==================================

burgerBtn.addEventListener("click", () => nav.classList.toggle("visible"));

fetchAndBuildCards(buildAllCards, "asc");

lowToHighSortBtn.addEventListener("click", () =>
  fetchAndBuildCards(buildAllCards, "asc")
);
highToLowSortBtn.addEventListener("click", () =>
  fetchAndBuildCards(buildAllCards, "desc")
);
