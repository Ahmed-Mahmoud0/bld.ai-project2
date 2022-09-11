import React from "react";
import { HashLink } from "react-router-hash-link";
import "../../components styles/courses styles/CourseImage.css";

function CourseImage(props) {
  return (
    <div className="course-image">
      <HashLink to={`/course-page/${props.id}#top`}>
        <img src={props.url} alt="Course"></img>
      </HashLink>
    </div>
  );
}

export default CourseImage;

// width={200} height={120}
