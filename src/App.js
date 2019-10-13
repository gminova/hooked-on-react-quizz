import React, { useState } from "react";
import "./App.css";
//components
import WelcomePage from "./components/WelcomePage";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {
  const [page, setPage] = useState("WelcomePage");
  const [username, setUsername] = useState("guest");
  const [score, setScore] = useState(0);

  return (
    <>
      {page === "WelcomePage" && (
        <WelcomePage
          setPage={setPage}
          score={score}
          setScore={setScore}
          username={username}
          setUsername={setUsername}
        />
      )}
      {page === "Quiz" && (
        <Quiz setPage={setPage} score={score} setScore={setScore} />
      )}
      {page === "Score" && (
        <Score setPage={setPage} score={score} username={username} />
      )}
    </>
  );
}

export default App;
