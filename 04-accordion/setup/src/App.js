import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <section>
      <div className="container">
        <h3>Questions and answers about login</h3>
        {data.map((question) => {
          const { id, title, info } = question;
          return (
            <SingleQuestion
              key={id}
              question={title}
              answer={info}
            ></SingleQuestion>
          );
        })}
      </div>
    </section>
  );
}

export default App;
