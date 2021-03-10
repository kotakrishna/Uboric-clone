import createFootwear from "../../utils/createFootwear.js";
import footwearData from "./data.js";

const productContainer = document.querySelector(".products-cont");

const allDataStr = Object.keys(footwearData)
  .map((key) => createFootwear(footwearData[key]))
  .join("\n");

productContainer.innerHTML = allDataStr;
