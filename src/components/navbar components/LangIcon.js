import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../components styles/navbar styles/LangIcon.css";

export const LangIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faGlobe} className="lang-icon" />
    </div>
  );
};
