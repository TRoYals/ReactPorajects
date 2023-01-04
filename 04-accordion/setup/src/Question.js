import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question, answer }) => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <article className="question">
      <div>
        <header>
          <h4>{question}</h4>
          <button className="btn" onClick={handleClick}>
            {!isShow ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </button>
        </header>
      </div>
      {isShow ? <p>{answer}</p> : ""}
    </article>
  );
};

export default Question;
