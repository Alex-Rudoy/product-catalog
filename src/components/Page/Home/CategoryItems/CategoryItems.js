import React from "react";

export default function CategoryItems({ data: { title, products } }) {
  return (
    <div class="category-items__category">
      <h2 className="category-items__title">{title}</h2>
      <div className="category-items__list-of-items">
        {products.slice(0, 4).map((product) => (
          <div className="category-items__product" key={product.id}>
            <div class="category-items__image-holder">
              <img src={`http://smktesting.herokuapp.com/static/${product.img}`} alt={product.img} />
            </div>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
          </div>
        ))}
        <div className="category-items__view-all">
          <div className="category-items__dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h3>View all products in {title}</h3>
        </div>
      </div>
    </div>
  );
}
