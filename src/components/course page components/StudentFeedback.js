import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../components styles/course page styles/StudentFeedback.css";
import { PercentageBar } from "./PercentageBar";

export const StudentFeedback = ({ rate, feedbackRating }) => {
  const progressBars = feedbackRating.map((rating) => (
    <PercentageBar key={rating} progress={rating} />
  ));

  return (
    <div>
      <h2>Student feedback</h2>
      <div className="feedback-left">
        <div className="feedback-rate">{rate}</div>
        <div className="feedback-stars">
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
        </div>
        <div className="feedback-text">Course Rating</div>
      </div>
      <div className="bars-container">{progressBars}</div>
      <div className="stars-container">
        <div className="stars-row">
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          &nbsp;
          <span className="feedback-rating">{feedbackRating[0]}%</span>
        </div>
        <div className="stars-row">
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          &nbsp;
          <span className="feedback-rating">{feedbackRating[1]}%</span>
        </div>
        <div className="stars-row">
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          &nbsp;
          <span className="feedback-rating">{feedbackRating[2]}%</span>
        </div>
        <div className="stars-row">
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          &nbsp;
          <span className="feedback-rating">{feedbackRating[3]}%</span>
        </div>
        <div className="stars-row">
          <FontAwesomeIcon icon={faStar} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          <FontAwesomeIcon icon={faStarRegular} color="orange" size="sm" />
          &nbsp;
          <span className="feedback-rating">{feedbackRating[4]}%</span>
        </div>
      </div>
    </div>
  );
};
