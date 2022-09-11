import React from "react";
import { HeaderImage } from "./HeaderImage";
import { HeaderText } from "./HeaderText";
import "../components styles/header styles/Header.css";

export const Header = () => {
  return (
    <header>
      <HeaderImage />
      <HeaderText />
    </header>
  );
};
