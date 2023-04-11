import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const debounce = (fn, ms) => {
    let timeout;
    function wrapper() {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), ms);
    }
    return wrapper;
  };

  function throttle(func, delay = 2500) {
    let isThrottled = false;
    let thisArg, savedArgs;

    const timeoutFunc = () => {
      if (savedArgs === null) {
        isThrottled = false;
      } else {
        func.apply(thisArg, savedArgs);
        thisArg = savedArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return function () {
      if (isThrottled) {
        thisArg = this;
        savedArgs = arguments;
        return;
      }

      func.apply(this, arguments);
      isThrottled = true;

      setTimeout(timeoutFunc, delay);
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktails</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={throttle(searchCocktail, 1000)}
          />
          <p>{searchValue.current.value}</p>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
