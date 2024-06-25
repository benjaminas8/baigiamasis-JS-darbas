export const fetchProductCards = async () => {
  try {
    const response = await fetch(
      "https://667055e20900b5f8724a431b.mockapi.io/product"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewProduct = async (newProduct) => {
  try {
    const response = await fetch(
      "https://667055e20900b5f8724a431b.mockapi.io/product",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchAndBuildCards = async (buildAllCards, sortOrder = "asc") => {
  try {
    const products = await fetchProductCards();

    const sortedProducts = products.sort((a, b) => {
      const priceA = parseFloat(a.price.toString().replace(/,/g, ""));
      const priceB = parseFloat(b.price.toString().replace(/,/g, ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    buildAllCards(sortedProducts);
  } catch (error) {
    console.error(error);
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(
      `https://667055e20900b5f8724a431b.mockapi.io/product/${id}`
    );

    const product = await response.json();
    return product;
  } catch (err) {
    console.log(err);
  }
};

export const deleteClothe = async (productId) => {
  try {
    const response = await fetch(
      `https://667055e20900b5f8724a431b.mockapi.io/product/${productId}`,
      {
        method: "DELETE",
      }
    );
    await response.json();
    alert("Product was deleted successfully. Press OK to go to HOME page");
  } catch (err) {
    console.log(err);
  }
};
