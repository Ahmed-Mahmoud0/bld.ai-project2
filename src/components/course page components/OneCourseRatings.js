import React from "react";
import "../components styles/course page styles/OneCourseRatings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const OneCourseRatings = ({ rate, ratingCount, enrollCount }) => {
  return (
    <div className="one-course-rating">
      <span className="rt-gold">{rate} </span>
      <FontAwesomeIcon icon={faStar} color={"orange"} size={"sm"} />
      <FontAwesomeIcon icon={faStar} color={"orange"} size={"sm"} />
      <FontAwesomeIcon icon={faStar} color={"orange"} size={"sm"} />
      <FontAwesomeIcon icon={faStar} color={"orange"} size={"sm"} />
      <FontAwesomeIcon icon={faStar} color={"orange"} size={"sm"} />
      <span className="rt-purple">
        {" "}
        (<Link to="#">{ratingCount} ratings</Link>){" "}
      </span>
      <span className="rt-white"> {enrollCount} students</span>
    </div>
  );
};
