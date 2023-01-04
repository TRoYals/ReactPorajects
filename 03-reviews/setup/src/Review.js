import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const randomNum = (index) => {
    const num = Math.floor(Math.random() * people.length);
    return num === index ? (num + 1) % people.length : num;
  };
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={people[index].image} alt="" />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>

      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            setIndex(randomNum(index));
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            setIndex((index + 1) % people.length);
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      <button
        className="random-btn"
        onClick={() => setIndex(Math.floor(Math.random() * people.length))}
      >
        surprise me
      </button>
    </article>
  );
};

export default Review;
