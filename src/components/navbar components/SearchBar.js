import React from "react";
import "../components styles/navbar styles/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faSearch} />
      <input
        className="search-input"
        type="search"
        placeholder="Search for anything"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};
