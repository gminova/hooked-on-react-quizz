import React, { useState, useEffect } from "react";
import "./App.css";
//components
import WelcomePage from "./components/WelcomePage";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {
  const [page, setPage] = useState("WelcomePage");
  const [score, setScore] = useState("0");
  return (
    <>
      {page === "WelcomePage" && <WelcomePage setPage={setPage} />}
      {page === "Quiz" && (
        <Quiz setPage={setPage} score={score} setScore={setScore} />
      )}
      {page === "Score" && (
        <Score setPage={setPage} score={score} setScore={setScore} />
      )}
    </>
  );
}

export default App;
