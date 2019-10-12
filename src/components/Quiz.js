import React, { useState, useEffect } from "react";
import Data from "../model/Data";

const Quiz = ({ setPage, score, setScore }) => {
  const [answer, setAnswer] = useState(false);
  return (
    <div>
      <h1>Quizz page</h1>
      {Data.map((q, i) => (
        <>
          <p key={i}>
            #{i + 1}: {q.question}
          </p>

          {q.answers.map((a, i) => (
              <button key={i}>{a.text}</button>
          ))}
        </>
      ))}
      <button onClick={() => setScore(Number(score) + 1)}>Score +1!</button>
      <button onClick={() => setPage("Score")}>Finish</button>
    </div>
  );
};

export default Quiz;
