import React, { useState, useEffect } from "react";

import Photo from "./Photo";
import SearchForm from "./components/FormSearch";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [searchTerm, setSearchTerm] = useState("sfs");

  return (
    <main>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="photos">tests</section>
    </main>
  );
}

export default App;
