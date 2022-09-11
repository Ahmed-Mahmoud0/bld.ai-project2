import React from "react";
import "../components styles/navbar styles/Logo.css";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="navbar-logo">
      <Link to={"/"}>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy Logo"
        />
      </Link>
    </div>
  );
};
