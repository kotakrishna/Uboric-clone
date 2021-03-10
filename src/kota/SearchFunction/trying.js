// import createProduct from "../utils/createProduct.js";
import createProduct from "../../js/utils/createProduct.js";
// import productsData from "./data.js";
import productsData from "../../js/bathrooms/data.js";

const productContainer = document.querySelector(".products-cont");

console.log(productsData);

const allDataStr = Object.keys(productsData)
  .map((key) => createProduct(productsData[key]))
  .join("\n");

productContainer.innerHTML = allDataStr;

console.log(allDataStr);







