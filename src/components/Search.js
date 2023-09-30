import React from "react";
import "../styles/Search.css";

export default function Search() {
  return (
    <div className="container-fluid mx-auto" style={{ width: "50%" }}>
      <form className="d-flex" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search Resources"
          aria-label="Search"
        />

        <button className="btn btn-outline-success margin-left" type="submit">
          Search{" "}
        </button>
      </form>
    </div>
  );
}
