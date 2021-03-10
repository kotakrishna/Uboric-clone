function createFootwear(data) {
  const footwearStr = `
  <article class="product display-flex">
    <img src=${data.src} alt=${data.tittle} class="item-img"
    />
    <h3>${data.tittle}</h3>
  </article>
  `;

  return footwearStr;
}

export default createFootwear;
