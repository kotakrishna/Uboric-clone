function createGrocery(data,key) {
  const productStr = `
  <article data-id="${key}" class="product display-flex">
    <img data-id="${key}" src=${data.src} alt=${data.tittle} class="item-img"
    />
    <h3 data-id="${key}"><span data-id="${key}" class=${data.tittle[0]=="A"}>${data.tittle}</span></h3>
    <p class="price">
      <span data-id="${key}" class="new-price"> ₹${data.price} </span>
    </p>
  </article>
  `;
  
  console.log("the grocery");
  return productStr;
}
export default createGrocery;
