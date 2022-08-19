import React from "react";
import "./components styles/CourseRating.css";

function CourseRating(props) {
  return (
    <div className="rating-box">
      <div className="rate">{props.rate}.0</div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="enrolled">({props.enrolled})</div>
    </div>
  );
}

export default CourseRating;
