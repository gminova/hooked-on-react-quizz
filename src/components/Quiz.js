import React, { useState, useEffect } from "react";
import Data from "../model/Data";

const Quiz = ({ setPage, score, setScore }) => {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(Data[count]);
  const [answer, setAnswer] = useState(false);
  console.log({ question });

  const handleQuestion = e => {
    console.log(answer);
    if (answer === true) {
      setCount(count + 1);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    debugger;
    if (count >= Data.length) {
      setPage("Score");
    } else {
      setQuestion(Data[count]);
    }
  }, [count]);

  return (
    (Data[count] && (
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
                onChange={e => setAnswer(a.isCorrect)}
              />
              <label id={a.text} value={a.text} key={a.text}>
                {a.text}
              </label>
            </div>
          ))}
        </>
        <button onClick={handleQuestion}>Score +1!</button>
        <button onClick={() => setPage("Score")}>Finish</button>
      </div>
    )) || <div>error</div>
  );
};

export default Quiz;
