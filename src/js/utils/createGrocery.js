function createGrocery(data) {
  const productStr = `
  <article class="product display-flex">
    <img src=${data.src} alt=${data.tittle} class="item-img"
    />
    <h3><span class=${data.tittle[0]=="A"}>${data.tittle}</span></h3>
    <p class="price">
      <span class="new-price"> ₹${data.price} </span>
    </p>
  </article>
  `;

  return productStr;
}

export default createGrocery;
