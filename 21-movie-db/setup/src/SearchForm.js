import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <main>
      <form action="" className="search-form">
        <h2>search movies</h2>
        <input
          type="text"
          className="form-input"
          value={query}
          onChange={handleChange}
        />
      </form>
    </main>
  );
};
export default SearchForm;
