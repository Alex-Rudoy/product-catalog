import React from "react";
import ProductCard from "../../../../_reusable/ProductCard/ProductCard";

export default function CategoryCarousel({ data: { title, products } }) {
  return (
    <div className="category-carousel">
      <h2 className="category-carousel__title">{title}</h2>
      <div className="category-carousel__scrollable">
        <div className="category-carousel__cards">
          {products.slice(0, 4).map((product) => (
            <ProductCard product={product} />
          ))}
          <div className="category-carousel__view-all">
            <div className="category-carousel__dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <h3>View all products in {title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
