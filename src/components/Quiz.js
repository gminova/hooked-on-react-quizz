import React, { useState, useEffect } from "react";
import Data from "../model/Data";

const Quiz = ({ setPage, score, setScore }) => {
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(Data[count]);
  const [answer, setAnswer] = useState(false);

  const handleQuestion = e => {
    if (answer === true) {
      setCount(count + 1);
      setScore(score + 1);
    } else {
      alert("That's incorrect. Try again!")
    }
  };

  useEffect(() => {
    if (count >= Data.length) {
      setPage("Score");
    } else {
      setQuestion(Data[count]);
      setAnswer(false);
    }
  }, [count]);

  return (
    (Data[count] && (
      <div>
        <h1>Quizz page</h1>
        <p>
          <i>
            You must select the correct answer to proceed to the next question
          </i>
        </p>
        <>
          <h2>{Data[count].question}</h2>
          {question.answers.map((a, i) => (
            <div className="container">
              <input
                type="radio"
                key={a.key}
                value={a.text}
                id={a.text}
                name="answer"
                onChange={e => setAnswer(a.isCorrect)}
              />
              <label id={a.text} value={a.text}>
                {a.text}
              </label>
            </div>
          ))}
        </>
        <button onClick={handleQuestion}>Answer</button>
        <button onClick={() => setPage("Score")}>Finish</button>
      </div>
    )) || <div>error</div>
  );
};

export default Quiz;
