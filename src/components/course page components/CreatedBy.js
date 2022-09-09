import React from "react";
import { Link } from "react-router-dom";
import "../components styles/course page styles/CreatedBy.css";

export const CreatedBy = ({ instructor }) => {
  return (
    <div className="created-by">
      Created by <Link to="#">{instructor}</Link>
    </div>
  );
};
