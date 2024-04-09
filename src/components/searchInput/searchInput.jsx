import React, { useState } from "react";
import "./searchInput.css";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here using the search state
    console.log("Search query:", search);

    setSearch("");
  };

  return (
    <section className="searchContainer">
      <h1>Weather App</h1>
      <form className="searchForm" onSubmit={handleSearch}>
        <div className="searchInputContainer">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search City"
            className="searchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="searchBtn">
            &#x1F50D;
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
