import React from "react";

const Score = ({ setPage, username, score }) => {
  return (
    <div>
      <h1>Well done, {username}, your score is: {score}</h1>
      <button onClick={() => setPage("WelcomePage")}>Play again!</button>
    </div>
  );
};

export default Score;
