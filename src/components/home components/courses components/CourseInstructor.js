import React from "react";
import "../../components styles/courses styles/CourseInstructor.css";

function CourseInstructor(props) {
  return (
    <div>
      <h6>{props.instructor}</h6>
    </div>
  );
}

export default CourseInstructor;
