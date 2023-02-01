import React, { useState, useEffect } from "react";

import Photo from "./Photo";
import SearchForm from "./components/FormSearch";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  return (
    <main>
      <SearchForm
        loading={loading}
        setLoading={setLoading}
        photos={photos}
        setPhotos={setPhotos}
      />
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
