import React from "react";
import "../components styles/course page styles/Requirements.css";

export const Requirements = ({ requirements }) => {
  const reqList = requirements.map((requirement) => (
    <li key={requirement}>{requirement}</li>
  ));
  return (
    <div className="req">
      <h2>Requirements</h2>
      <ul>{reqList}</ul>
    </div>
  );
};
