import React from "react";

const Score = ({ setPage, score, setScore }) => {
  console.log(score);
  return (
    <div>
      <h1>Score page</h1>
      <button onClick={() => setScore(Number(score)+1)}>Score +1!</button>
      <button onClick={() => setPage("WelcomePage")}>Play again!</button>
    </div>
  );
};

export default Score;
