import React from "react";

export default function ReviewRating({ rate }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rate);
  }

  return (
    <div className="review-rating">
      {stars.map((star, index) => (
        <i className={`material-icons review-rating__${star ? "orange" : "gray"}`} key={index}>
          star
        </i>
      ))}
    </div>
  );
}
