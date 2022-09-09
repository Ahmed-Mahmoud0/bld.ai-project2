import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../components styles/course page styles/Instructor.css";
import { InstructorProfile } from "./InstructorProfile";

export const Instructor = ({ instructor }) => {
  const [showMore, setShowMore] = useState(false);
  const shownText = showMore
    ? instructor.description
    : instructor.description.slice(0, 300) + "...";

  return (
    <div id="instructor" className="instructor-main">
      <h2>Instructor</h2>
      <h3>{instructor.name}</h3>
      <p className="instructor-intro">{instructor.Intro}</p>
      <InstructorProfile instructor={instructor} />
      <div className="inst-desc">{shownText}</div>
      <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
      {showMore ? (
        <FontAwesomeIcon icon={faAngleUp} />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} />
      )}
    </div>
  );
};
