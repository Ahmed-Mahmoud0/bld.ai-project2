import React from "react";
import "./components styles/CourseImage.css";

function CourseImage(props) {
  return (
    <div>
      <img src={props.url} alt="Course"></img>
    </div>
  );
}

export default CourseImage;

// width={200} height={120}
