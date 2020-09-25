import React from "react";

export default function AddReviewStars({ rate, onChange }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(5 - i);
  }

  return (
    <div className="add-review-stars">
      {stars.map((star) => (
        <React.Fragment key={star}>
          <input type="radio" name="rate" id={star} value={star} checked={star === +rate} onChange={onChange} />
          <label htmlFor={star}>
            <i className={`material-icons`}>star</i>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}
//
