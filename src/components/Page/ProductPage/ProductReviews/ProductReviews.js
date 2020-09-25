import React, { useContext } from "react";
import StateContext from "../../../../reducer/StateContext";
import AddReview from "./AddReview/AddReview";
import Review from "./Review/Review";

export default function ProductReviews({ reviews }) {
  const appState = useContext(StateContext);

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
