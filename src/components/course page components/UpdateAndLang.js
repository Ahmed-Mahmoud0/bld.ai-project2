import React from "react";
import "../components styles/course page styles/UpdateAndLang.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClosedCaptioning,
  faExclamationCircle,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export const UpdateAndLang = ({ lastUpdate }) => {
  return (
    <div className="update-and-lang">
      <FontAwesomeIcon icon={faExclamationCircle} color={"white"} />{" "}
      <span> Last updated {lastUpdate} </span>
      &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faGlobe} color={"white"} />
      <span> English</span>
      &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faClosedCaptioning} color={"white"} />
      <span> English</span>
    </div>
  );
};
