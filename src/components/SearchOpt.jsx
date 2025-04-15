import React from "react";

const SearchOpt = ({ search, setSearch }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchOpt;
