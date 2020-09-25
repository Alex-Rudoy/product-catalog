import React from "react";

export default function ReviewRating({ rate }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rate);
  }
  console.log(stars);

  return (
    <div className="review-rating">
      {stars.map((star) => (
        <i class={`material-icons review-rating__${star ? "orange" : "gray"}`}>star</i>
      ))}
    </div>
  );
}
