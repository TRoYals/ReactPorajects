import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchForm = ({ searchTerm, setSearchTerm }) => {
  const searchValue = React.useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
    console.log(searchTerm);
  };
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input" id="name" ref={searchValue} />
        <button className="submit-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
