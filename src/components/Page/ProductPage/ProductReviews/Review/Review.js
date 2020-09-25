import React from "react";

export default function Review({
  review: {
    created_at,
    created_by: { username: author },
    rate,
    text,
  },
}) {
  return (
    <div className="review">
      <p className="review__author">{author}</p>
      <p className="review__date">{created_at}</p>
      <p className="review__rate">{rate}</p>
      <p className="review__text">{text}</p>
    </div>
  );
}
