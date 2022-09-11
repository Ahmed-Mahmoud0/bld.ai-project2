import React from "react";
import "../components styles/course page styles/OneCourseTitle.css";

export const OneCourseTitle = ({ title }) => {
  return (
    <div className="one-course-title">
      <h1>{title}</h1>
    </div>
  );
};
