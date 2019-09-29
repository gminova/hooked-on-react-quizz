import React, { useState, useEffect } from "react";
import Data from "../model/data";

const Quiz = ({ setPage, score, setScore  }) => {
    console.log(score);
  return (
    <div>
      <h1>Quizz page</h1>
      <button onClick={() => setScore(Number(score)+1)}>Score +1!</button>
      <button onClick={() => setPage("Score")}>Finish</button>
    </div>
  );
};

export default Quiz;
