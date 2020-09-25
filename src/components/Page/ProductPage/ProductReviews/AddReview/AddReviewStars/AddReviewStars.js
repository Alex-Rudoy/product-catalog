import React from "react";

export default function AddReviewStars({ rate }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(5 - i);
  }

  return (
    <div className="add-review-stars">
      {stars.map((star) => (
        <>
          <input type="radio" name="rate" id={star} value={star} />
          <label htmlFor={star}>
            <i class={`material-icons`}>star</i>
          </label>
        </>
      ))}
    </div>
  );
}
//
