import React from "react";
import "../components styles/course page styles/OneReview.css";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OneReview = ({ review }) => {
  const fullStars = Array.from({ length: review.rate }).map((item, index) => (
    <FontAwesomeIcon icon={faStar} key={index} color="orange" size="2xs" />
  ));
  const emptyStars = Array.from({ length: 5 - review.rate }).map(
    (item, index) => (
      <FontAwesomeIcon
        icon={faStarRegular}
        key={index}
        color="orange"
        size="2xs"
      />
    )
  );

  return (
    <>
      <div className="one-review">
        <div className="rev-image">{review.name[0]}</div>
        <div className="rev-body">
          <div className="rev-name">{review.name}</div>
          <div>
            {fullStars}
            {emptyStars}
          </div>
          <div className="rev-content">{review.content}</div>
          <div className="rev-note">Was this review helpful?</div>
          <div className="rev-footer">
            <span className="th-up-container">
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            &nbsp;&nbsp;&nbsp;
            <span className="th-up-container">
              <FontAwesomeIcon icon={faThumbsDown} />
            </span>
            <span className="rev-report">Report</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
