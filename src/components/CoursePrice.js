import React from "react";
import "./components styles/CoursePrice.css";

function CoursePrice(props) {
  return (
    <div className="course-price">
      <div className="final-price">E&#163;{props.price}</div>
      <div className="original-price">E&#163;{props.originalPrice}</div>
    </div>
  );
}

export default CoursePrice;
