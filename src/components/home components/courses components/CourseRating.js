import React from "react";
import "../../components styles/courses styles/CourseRating.css";

function CourseRating(props) {
  return (
    <div className="rating-box">
      <div className="rate">{props.rate}</div>
      <div className="stars">
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
      </div>
      <div className="enrolled">({props.ratingCount})</div>
    </div>
  );
}

export default CourseRating;
