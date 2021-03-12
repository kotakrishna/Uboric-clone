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
}

switch (obj["tittle"]) {
  case "Bathroom Accessories":
    importData("../bathrooms/data.js");

    break;
  case "Head Phones":
    importData("../Electronics/HeadPhones/data.js");
    break;

  case "Buy Socks Products Online":
    importData("../Socks/data.js");
    break;

  case "Women's Footwear":
    importData("../Footwear/women/data.js");
    break;

  case "Men's Footwear":
    importData("../Footwear/Men/data.js");
    break;

  case "Health & Personal Care":
    importData("../health_and_personal/data.js");
    break;

  case "Kitchen-ware":
    importData("../kitchen_ware/kitchen.js");
    break;

  case "Kids's Footwear":
    importData("../kitchen_ware/kitchen.js");
    break;

  default:
    break;
}

const imgElem = document.getElementById("img-section");
const categoryElem = document.getElementById("category");
const prodNameElem = document.getElementById("prod-name");

console.log(product);
function showProduct(data) {
  const imgStr = `
    <img src=${data.src} />
    `;
}
