function createFootwear(data,key) {
  const footwearStr = `
  <article data-id="${key}" class="product display-flex">
    <img data-id="${key}" src=${data.src} alt=${data.tittle} class="item-img"
    />
    <h3 data-id="${key}">${data.tittle} (${data.price})</h3>
  </article>
  `;

  return footwearStr;
}
console.log("createfootwear");
export default createFootwear;
