import React from "react";
import "../styles/Search.css";

const Search = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="container-fluid mx-auto" style={{ width: "50%" }}>
      <form className="d-flex" role="search" onSubmit={formSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder="Search Resources"
          aria-label="Search"
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}

        <button className="btn btn-outline-success margin-left" type="submit">
          Search{" "}
        </button>
      </form>
    </div>
  );
};
export default Search;
