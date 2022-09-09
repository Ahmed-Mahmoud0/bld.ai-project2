import {
  faMedal,
  faPlayCircle,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../components styles/course page styles/InstructorProfile.css";

export const InstructorProfile = ({ instructor }) => {
  return (
    <div className="instructor-profile">
      <img
        className="instructor-image"
        src={instructor.Image}
        alt="Instructor"
      />
      <div className="instructor-info">
        <div className="inst-info-item">
          <FontAwesomeIcon icon={faStar} size="sm" />
          &nbsp;&nbsp;&nbsp;&nbsp;{instructor.Rating} Instructor Rating
        </div>
        <div className="inst-info-item">
          <FontAwesomeIcon icon={faMedal} />
          &nbsp;&nbsp;&nbsp;&nbsp;{instructor.reviewsNumber} Reviews
        </div>
        <div className="inst-info-item">
          <FontAwesomeIcon icon={faUser} size="sm" /> &nbsp;&nbsp;&nbsp;&nbsp;
          {instructor.studentsNumber} Students
        </div>
        <div className="inst-info-item">
          <FontAwesomeIcon icon={faPlayCircle} />
          &nbsp;&nbsp;&nbsp;&nbsp;{instructor.coursesNumber} Courses
        </div>
      </div>
    </div>
  );
};
