import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, data, removeStory } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {data.map((singleStory) => {
        const {
          title,
          objectID,
          author,
          url,
          points,
          num_comments: comments,
          created_at: date,
        } = singleStory;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">{`${points} points by ${author} | ${comments} comments | ${date.slice(
              0,
              10
            )}`}</p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
