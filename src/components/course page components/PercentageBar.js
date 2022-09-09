import React from "react";

export const PercentageBar = ({ progress }) => {
  const containerStyles = {
    height: 8,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 0,
    marginTop: 15,
  };
  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "grey",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};
