import React from "react";
import Header from "../components/Header";
import Results from "../components/Results";

const Search = () => (
  <div>
    <Header title="Github App" />
    <main className="container mt-5 pt-5">
      <div className="starter-template">
        <h1>Search results</h1>
        <Results />
      </div>
    </main>
  </div>
);

export default Search;
