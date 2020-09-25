import React from "react";
import ProductCard from "../../../_reusable/ProductCard/ProductCard";

export default function CategoryItems({ data: { title, products } }) {
  return (
    <div className="category-items__category">
      <h2 className="category-items__title">{title}</h2>
      <div className="category-items__list-of-items">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} />
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
