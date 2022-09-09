import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../components styles/course page styles/CourseOverview.css";

export const CourseOverview = ({ overview }) => {
  <FontAwesomeIcon icon={faCheckCircle} />;

  const overviewList = overview.map((item) => <li key={item}>{item}</li>);

  return (
    <div id="overview" className="course-overview">
      <h2>What you'll learn</h2>
      <ul>{overviewList}</ul>
    </div>
  );
};
