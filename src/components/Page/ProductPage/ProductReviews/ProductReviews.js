import React, { useContext } from "react";
import AddReview from "./AddReview/AddReview";
import Review from "./Review/Review";

export default function ProductReviews({ reviews }) {
  const appState = useContext();

  return (
    <section className="product-reviews">
      <AddReview />
      {reviews
        .slice()
        .sort((a, b) => a.id - b.id)
        .map((review) => (
          <Review review={review} key={review.id} />
        ))}
    </section>
  );
}
