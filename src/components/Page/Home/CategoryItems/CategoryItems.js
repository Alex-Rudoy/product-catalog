import React from "react";

export default function CategoryItems({ data: { title, products } }) {
  console.log(products);
  return (
    <>
      <h2 className="category-items__title">{title}</h2>
      <div className="category-items__list-of-items">
        {products.slice(0, 3).map((product) => (
          <div className="category-items__product" key={product.id}>
            <img src={`http://smktesting.herokuapp.com/static/${product.img}`} alt={product.img} />
            <h3>{product.title}</h3>
            <p>{product.text}</p>
          </div>
        ))}
        <div className="category-items__view-all"></div>
      </div>
    </>
  );
}
