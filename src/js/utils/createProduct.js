function createProduct(data) {
  const productStr = `
  <article class="product display-flex">
    <p class="offer">-50%</p>
    <img src=${data.src} alt=${data.tittle} class="item-img"
    />
    <div class="gallery"></div>
    <h3><span>${data.company_name}</span> <span>${data.title}</span></h3>
    <p class="price">
      <span class="line-through"></span>
      <span class="old-price"> ₹1,999.00 </span>
      <span class="new-price"> ₹${data.price} </span>
    </p>
  </article>
  `;

  return productStr;
}

export default createProduct;
