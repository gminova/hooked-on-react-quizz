import React from "react";

const Score = ({ setPage }) => {
  return (
    <div>
      <h1>Score page</h1>
      <button onClick={() => setPage("WelcomePage")}>Play again!</button>
    </div>
  );
};

export default Score;
