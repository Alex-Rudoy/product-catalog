import React from "react";
import Avatar from "../../../../_reusable/Avatar/Avatar";
import ReviewRating from "./ReviewRating/ReviewRating";

export default function Review({
  review: {
    created_at,
    created_by: { username: author },
    rate,
    text,
  },
}) {
  let date = new Date(created_at).toLocaleString();

  return (
    <div className="review">
      <div className="review__top-line">
        <Avatar />
        <div>
          <p className="review__author">{author}</p>
          <p className="review__date">{date}</p>
        </div>
      </div>
      <ReviewRating rate={rate} />
      <p className="review__text">{text}</p>
    </div>
  );
}
