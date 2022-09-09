import {
  faAngleDown,
  faAngleUp,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../components styles/course page styles/Description.css";

export const Description = ({ description }) => {
  const desc = description.map((paragraph) => (
    <p key={paragraph}>{paragraph}</p>
  ));

  const [showMore, setShowMore] = useState(false);
  const shownText = showMore ? desc : desc.slice(0, 1);

  return (
    <div>
      <h2>Description</h2>
      <div className="desc-par">{shownText}</div>
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
