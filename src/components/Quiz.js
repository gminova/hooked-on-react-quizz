import React, { useState, useEffect } from "react";
import Data from "../model/data";

const Quiz = ({ setPage }) => {
  return (
    <div>
      <h1>Quizz page</h1>
      <button onClick={() => setPage("Score")}>Finish</button>
    </div>
  );
};

export default Quiz;
