import React from "react";
import { Link } from "react-router-dom";
import "../../components styles/courses styles/CourseTitle.css";

function CourseTitle(props) {
  return (
    <div>
      <Link to={`/course-page/${props.id}#top`}>
        <h3>{props.title}</h3>
      </Link>
    </div>
  );
}

export default CourseTitle;
