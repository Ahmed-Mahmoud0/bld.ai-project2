import React, { useState } from "react";
import "../components styles/course page styles/CourseContent.css";
import { Accordion } from "./Accordion";
import { Description } from "./Description";
import { Requirements } from "./Requirements";

export const CourseContent = ({
  sectionsCount,
  lecturesCount,
  totalLength,
  content,
  requirements,
  description,
}) => {
  const [clicked, setClicked] = useState(false);

  const toggleAll = () => {
    setClicked(!clicked);
  };

  return (
    <div id="content" className="course-content-wrapper">
      <h2>Course content</h2>
      <span className="info-container">
        <span className="content-info">
          {sectionsCount} sections • {lecturesCount} lectures • {totalLength}{" "}
          total length
        </span>
        <button onClick={() => toggleAll()}>
          {clicked ? <>Collapse</> : <>Expand</>} sections
        </button>
      </span>
      <Accordion content={content} toggleAll={clicked} />
      <Requirements requirements={requirements} />
      <Description description={description} />
    </div>
  );
};
