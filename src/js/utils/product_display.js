// var url=new URL
// console.log(window.location)

var obj = localStorage.getItem("data");
var h1 = document.getElementById("h1");
obj = JSON.parse(obj);

var { id, tittle } = obj;
console.log(id, tittle);
var product = null;

async function importData(path) {
  var im = import(path);
  var wt = await im;
  product = wt["default"][id];
  console.log(product);
  showProduct(product);
}

console.log(product);

switch (obj["tittle"]) {
  case "Bathroom Accessories":
    importData("../bathrooms/data.js");

    break;
  case "Head Phones":
    importData("../electronics/headPhones/data.js");
    break;

  case "Buy Socks Products Online":
    importData("../Socks/data.js");
    break;

  case "Women's Footwear":
    importData("../footwear/women/data.js");
    break;

  case "Men's Footwear":
    importData("../footwear/men/data.js");
    break;

  case "Health & Personal Care":
    importData("../health_and_personal/data.js");
    break;

  case "Kitchen-ware":
    importData("../kitchen_ware/data.js");
    break;

  case "Kids's Footwear":
    importData("../footwear/kids/data.js");
    break;

  case "SPICES":
    importData("../spices/data.js");
    break;

  default:
    break;
}

const imgElem = document.getElementById("img-section");
const categoryElem = document.getElementById("category");
const prodNameElemArr = document.querySelectorAll(".prod-name");
const priceElemArr = document.querySelectorAll(".new-price");
const descriptionElem = document.querySelector(".prod-description");
const brandElem = document.querySelector(".brand");

function showProduct(data) {
  const imgStr = `
    <img src=${data.src} />
    `;

  const catName = `${tittle}`;
  const prodName = `${data.tittle}`;
  const price = `₹${
    `${data.price}`.split(".")[1] == "00" ? data.price : data.price + ".00"
  }`;

  const description = `${data.description}`;
  prodNameElemArr.forEach((el) => {
    el.innerHTML = prodName;
  });
  priceElemArr.forEach((el) => {
    el.innerHTML = price;
  });

  imgElem.innerHTML = imgStr;
  categoryElem.innerHTML = catName;
  brandElem.innerHTML = data.company_name;

  descriptionElem.innerHTML = description;
}

const addToCartBtn = document.querySelector(".primary-btn");

const handleAddToCart = (e) => {
  const cartArr =
    "cart" in localStorage ? JSON.parse(localStorage.getItem("cart")) : [];

  localStorage.setItem("cart", JSON.stringify([...cartArr, product]));
  window.location = "./cart.html";
};

addToCartBtn.addEventListener("click", handleAddToCart);
