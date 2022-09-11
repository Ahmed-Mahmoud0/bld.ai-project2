import React from "react";
import RingLoader from "react-spinners/RingLoader";
import "./components styles/LoadingSpinner.css";

export const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <RingLoader loading={true} color={"#0090ff"} speedMultiplier={1} />
    </div>
  );
};
