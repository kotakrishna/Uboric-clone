const dataArr = JSON.parse(localStorage.getItem("cart")).map((cv) => ({
  ...cv,
  quantity: cv.quantity ? cv.quantity : 1,
}));
console.log(dataArr);

const tbodyElem = document.querySelector("tbody");
const subTotalElem = document.getElementById("sub-total");

showAllProduct(dataArr);
tbodyElem.addEventListener("click", (e) => {
  const target = e.target;
  if (target.className === "decrease") {
    let id = target.dataset.id;
    dataArr[id].quantity =
      dataArr[id].quantity == 1 ? 1 : --dataArr[id].quantity;
    showAllProduct(dataArr);
  }

  if (target.className === "increase") {
    let id = target.dataset.id;
    dataArr[id].quantity = ++dataArr[id].quantity;
    showAllProduct(dataArr);
  }

  if (target.className === "delete") {
    let id = target.dataset.id;
    console.log(id);
    dataArr.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(dataArr));
    console.log(dataArr);
    showAllProduct(dataArr);
  }
});

function showAllProduct(arr) {
  const allProductStr = arr
    .map((product, i) => createProductInCart(product, i))
    .join("\n");

  tbodyElem.innerHTML = allProductStr;
  subTotalElem.innerText = "₹" + convertPriceStr(findSubtotal(dataArr));
}

function createProductInCart(data, index) {
  const productStr = `
  <tr>
    <td>
      <div class="display-flex product-details">
        <button data-id="${index}" class="delete">X</button>
        <div class="prod-img">
          <img src=${data.src} alt="name " />
        </div>
        <span class="pron-name">${data.tittle}</span>
      </div>
    </td>
    <td class="price">₹${convertPriceStr(data.price)}</td>
    <td>
      <div class="quantity display-grid">
        <button class="decrease" data-id="${index}">-</button>
        <span data-id="${index}">${data.quantity}</span>
        <button class="increase" data-id="${index}">+</button>
      </div>
    </td>
    <td class="subtotal" data-id="${index}">₹${convertPriceStr(
    parseNum(data.price) * data.quantity
  )}</td>
  </tr>
  `;

  return productStr;
}

function convertPriceStr(price) {
  return `${price}`.split(".")[1] == "00" ? price : price + ".00";
}

function findSubtotal(arr) {
  return arr.reduce((acc, cv) => acc + cv.quantity * parseNum(cv.price), 0);
}

function parseNum(price) {
  return Number(`${price}`.split(".")[0].match(/\d/g).join(""));
}

const orderBtn = document.getElementById("order-now");

orderBtn.addEventListener("click", (e) => {
  alert("Your order is placed");
});
