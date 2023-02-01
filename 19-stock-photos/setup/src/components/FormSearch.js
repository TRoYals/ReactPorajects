import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchForm = ({ loading, setLoading, photos, setPhotos }) => {
  const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchImages = async () => {
    const mainUrl = `https://api.unsplash.com/photos/`;
    const searchUrl = `https://api.unsplash.com/search/photos/`;
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${searchTerm}`;
    if (searchTerm) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldphotos) => {
        if (searchTerm && page === 1) {
          return data.results;
        } else if (searchTerm) {
          return [...oldphotos, ...data.results];
        } else {
          return [...oldphotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const searchValue = React.useRef(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
    if (!searchTerm) {
      console.log(searchTerm);
      fetchImages();
      return;
    }
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
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
