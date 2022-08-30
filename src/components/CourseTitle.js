import React from "react";
import "./components styles/CourseTitle.css";

function CourseTitle(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default CourseTitle;
