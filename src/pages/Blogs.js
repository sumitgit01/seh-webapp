import React from "react";
import Search from "../components/Search";
import Header from "../components/header/Header";
import "../styles/Blog.css";

function Blogs() {
  return (
    <div>
      {/* page header */}
      <Header />
      {/* Search Bar */}
      <Search />
      {/* Blog List & Empty List components */}
      {/* <BlogList /> */}
    </div>
  );
}

export default Blogs;
