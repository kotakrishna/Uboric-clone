import createGrocery from "../utils/createGrocery.js";
import groceryData from "./data.js";

const productContainer = document.querySelector(".products-cont");

const allDataStr = Object.keys(groceryData)
  .map((key) => createGrocery(groceryData[key],key))
  .join("\n");

productContainer.innerHTML = allDataStr;
