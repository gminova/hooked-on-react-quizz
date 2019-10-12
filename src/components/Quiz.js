import React, { useState, useEffect } from "react";
import Data from "../model/Data";

const Quiz = ({ setPage, score, setScore }) => {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(Data[count]);
  const [answer, setAnswer] = useState(false);
  console.log({ question });

  useEffect(() => {
    const handleQuestion = () => {
      return answer === true ? setCount(count + 1) : count;
    };
  }, [answer]);

  return (
    <div>
      <h1>Quizz page</h1>
      <>
        <p>{Data[count].question}</p>
        {question.answers.map((a, i) => (
          <div>
            <input
              type="radio"
              value={a.text}
              key={i}
              id={a.text}
              name="answer"
              onChange={e => setAnswer(e.target.value)}
            />
            <label id={a.text} value={a.text} key={a.text}>
              {a.text}
            </label>
          </div>
        ))}
      </>
      <button onClick={() => setScore(Number(score) + 1)}>Score +1!</button>
      <button onClick={() => setPage("Score")}>Finish</button>
    </div>
  );
};

export default Quiz;
