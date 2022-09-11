import React from "react";
import "../components styles/navbar styles/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchData = event.target[0].value;
    searchData === ""
      ? setSearchParams({})
      : setSearchParams({ filter: searchData });
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
