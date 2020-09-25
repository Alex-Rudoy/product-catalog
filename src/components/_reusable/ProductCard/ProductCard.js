import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product: { id, img, title, text } }) {
  return (
    <Link to={`/product/${id}`} key={id}>
      <div className="product-card">
        <div className="product-card__image-holder">
          <img src={`http://smktesting.herokuapp.com/static/${img}`} alt={img} />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}
