import React from "react";
import { CartIcon } from "./CartIcon";
import { LangIcon } from "./LangIcon";
import { LoginButton } from "./LoginButton";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { SignupButton } from "./SignupButton";
import { TextOption } from "./TextOption";
import "../components styles/navbar styles/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <TextOption text="Categories" />
      <SearchBar />
      <TextOption text="Udemy Business" />
      <TextOption text="Tech on Udemy" />
      <CartIcon />
      <LoginButton />
      <SignupButton />
      <LangIcon />
    </nav>
  );
};
