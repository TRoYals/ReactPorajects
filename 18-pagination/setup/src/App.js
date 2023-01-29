import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState();

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
    console.log(followers);
  }, [page, loading]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const selectPage = (index) => {
    setPage(index);
  };
  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
      </div>
      <div className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            Prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${page === index ? "active - btn" : ""}`}
                onClick={() => selectPage(index)}
              >
                {index}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
