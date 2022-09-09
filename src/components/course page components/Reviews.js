import React from "react";
import { OneReview } from "./OneReview";

export const Reviews = ({ reviews }) => {
  const reviewList = reviews.map((review) => (
    <OneReview key={review.id} review={review} />
  ));
  return (
    <div id="reviews">
      <h2>Reviews</h2>
      {reviewList}
    </div>
  );
};
