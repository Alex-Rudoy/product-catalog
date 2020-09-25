import React from "react";

export default function ProductDescription({ productData: { id, img, text, title } }) {
  return (
    <section className="product-description">
      <div className="product-description__image-holder">
        <img src={`http://smktesting.herokuapp.com/static/${img}`} alt="" />
      </div>
      <div className="product-description__description">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
