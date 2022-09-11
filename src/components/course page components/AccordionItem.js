import {
  faMinusCircle,
  faPlayCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../components styles/course page styles/AccordionItem.css";

export const AccordionItem = ({ lecture, toggleAll }) => {
  const lectureTitle = lecture[0];
  const lectureLessons = lecture[1].map((lesson) => (
    <div key={lesson}>
      <span className="sign">
        <FontAwesomeIcon icon={faPlayCircle} />
      </span>
      {lesson}
    </div>
  ));

  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked(!clicked);
  };

  return (
    <div className="accordion-item">
      <button onClick={() => toggle()}>
        <span className="sign">
          {clicked ? (
            <FontAwesomeIcon icon={faMinusCircle} />
          ) : (
            <FontAwesomeIcon icon={faPlusCircle} />
          )}
        </span>
        <span className="lec-title">{lectureTitle}</span>
      </button>
      {clicked || toggleAll ? (
        <div className="lessons">{lectureLessons}</div>
      ) : null}
    </div>
  );
};
