import React, { useContext } from "react";
import StateContext from "../../../../reducer/StateContext";
import AddReview from "./AddReview/AddReview";
import Review from "./Review/Review";
import ReviewsAuth from "./ReviewsAuth/ReviewsAuth";

export default function ProductReviews({ reviews, productId, addNewReview }) {
  const appState = useContext(StateContext);

  return (
    <section className="product-reviews">
      {appState.loggedIn ? <AddReview productId={productId} addNewReview={addNewReview} /> : <ReviewsAuth />}
      {reviews
        .slice()
        .sort((a, b) => b.id - a.id)
        .map((review) => (
          <Review review={review} key={review.id} />
        ))}
    </section>
  );
}
